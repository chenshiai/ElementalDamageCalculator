interface Database {
  version: number;
  name: string;
  onReady: () => void;
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

    request.onsuccess = () => {};

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
      console.log("数据添加成功");
    };

    request.onerror = (event) => {
      console.error("数据添加失败", (event.target as IDBRequest<undefined>).error);
    };
  }

  public 
}

const db = new calculateDatabase();
export default db;
