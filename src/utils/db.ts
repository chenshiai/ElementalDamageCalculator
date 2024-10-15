import { showSuccessToast, showFailToast } from "vant";
import { s } from "vite/dist/node/types.d-aGj9QkWt";

interface Database {
  version: number;
  name: string;
}

class calculateDatabase implements Database {
  private _db?: IDBDatabase;
  public version = 1;
  public name = "calculationDatabase";
  private _tempCreateStores = [];

  constructor() {
    this.open();
  }

  private open(): void {
    const request: IDBOpenDBRequest = indexedDB.open(this.name, this.version);

    request.onerror = (event) => {
      console.error("打开数据库失败！", (event.target as IDBOpenDBRequest).error);
    };

    request.onsuccess = () => {
      this._db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
    };

    request.onupgradeneeded = (event) => {
      this._db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      if (this._tempCreateStores.length > 0) {
        this._tempCreateStores.forEach(({ storeName, keyPath }) => {
          this._db.createObjectStore(storeName, { keyPath });
        });
      }
    };
  }

  public createStore(storeName: string, keyPath: string): void {
    if (!this._db) {
      this._tempCreateStores.push({ storeName, keyPath });
    } else {
      this._db.createObjectStore(storeName, { keyPath });
    }
  }

  public add(storeName: string, data: any): void {
    if (!this._db) {
      throw new Error("数据库尚未准备好");
    }

    const transaction: IDBTransaction = this._db.transaction([storeName], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);
    
    const request: IDBRequest = objectStore.add(data);

    request.onsuccess = () => {
      showSuccessToast("数据添加成功");
    };

    request.onerror = () => {
      this.put(storeName, data);
    };
  }

  public put(storeName: string, data: any) {
    if (!this._db) {
      showFailToast("数据更新失败");
      throw new Error("数据库尚未准备好");
    }
    const transaction: IDBTransaction = this._db.transaction([storeName], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);
    const request: IDBRequest = objectStore.put(data);
    request.onsuccess = () => {
      showSuccessToast("数据更新成功");
    };
    request.onerror = (event) => {
      showFailToast("数据更新失败");
      console.error("数据更新失败", (event.target as IDBRequest<undefined>).error);
    };
  }

  public get(storeName: string, key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this._db) {
        reject(new Error("数据库尚未准备好"));
        return;
      }

      const transaction: IDBTransaction = this._db.transaction([storeName], "readonly");
      const objectStore: IDBObjectStore = transaction.objectStore(storeName);
      const request: IDBRequest = objectStore.get(key);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = (event) => {
        reject((event.target as IDBRequest<undefined>).error);
      };
    });
  }

  public getAll(storeName: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!this._db) {
        reject(new Error("数据库尚未准备好"));
        return;
      }

      const transaction: IDBTransaction = this._db.transaction([storeName], "readonly");
      const objectStore: IDBObjectStore = transaction.objectStore(storeName);

      const request: IDBRequest = objectStore.getAll();
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = (event) => {
        reject((event.target as IDBRequest<undefined>).error);
      };
    });
  }

  public delete(storeName: string, key: string): void {
    if (!this._db) {
      throw new Error("数据库尚未准备好");
    }

    const transaction: IDBTransaction = this._db.transaction([storeName], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);
    const request: IDBRequest = objectStore.delete(key);
    request.onsuccess = () => {
      showSuccessToast("数据已删除");
    };
    request.onerror = (event) => {
      showFailToast("数据删除失败");
      console.error("数据删除失败", (event.target as IDBRequest<undefined>).error);
    };
  }
}

const db = new calculateDatabase();
export default db;
