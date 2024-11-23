import { showSuccessToast, showFailToast } from "vant";

interface Database {
  version: number;
  name: string;
}

class calculateDatabase implements Database {
  private _db?: IDBDatabase;
  public version = 3;
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

    request.onsuccess = (event) => {
      this._db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
    };

    request.onupgradeneeded = (event) => {
      this._db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
      if (this._tempCreateStores.length > 0) {
        this._tempCreateStores.forEach(({ storeName, keyPath, autoIncrement = false }) => {
          try {
            this._db.createObjectStore(storeName, { keyPath, autoIncrement });
          } catch (error) {
            console.log("表创建失败", storeName, error);
          }
        });
      }
    };
  }

  public createStore(storeName: string, keyPath: string, autoIncrement: boolean = false): void {
    if (!this._db) {
      this._tempCreateStores.push({ storeName, keyPath, autoIncrement });
    } else {
      this._db.createObjectStore(storeName, { keyPath, autoIncrement });
    }
  }

  public add(storeName: string, data: any): Promise<string> {
    if (!this._db) {
      throw new Error("数据库尚未准备好");
    }

    const transaction: IDBTransaction = this._db.transaction([storeName], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);
    const request: IDBRequest = objectStore.add(data);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
  
      request.onerror = () => {
        reject(request.result);
      };
    });
  }

  public put(storeName: string, data: any): Promise<any> {
    if (!this._db) {
      showFailToast("数据更新失败");
      throw new Error("数据库尚未准备好");
    }
    const transaction: IDBTransaction = this._db.transaction([storeName], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);
    const request: IDBRequest = objectStore.put(data);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.result);
      };
    });
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

  public delete(storeName: string, key: string): Promise<any> {
    if (!this._db) {
      throw new Error("数据库尚未准备好");
    }

    const transaction: IDBTransaction = this._db.transaction([storeName], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore(storeName);
    const request: IDBRequest = objectStore.delete(key);
    return new Promise((resolve, reject) => {

      request.onsuccess = () => {
        resolve(request.result)
        showSuccessToast("数据已删除");
      };
      request.onerror = (event) => {
        showFailToast("数据删除失败");
        reject((event.target as IDBRequest<undefined>).error);
      };
    })
  }
}

const db = new calculateDatabase();
export default db;
