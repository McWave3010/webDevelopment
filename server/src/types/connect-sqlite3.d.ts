// types/connect-sqlite3.d.ts
import { Store } from "express-session";

declare module "connect-sqlite3" {
  import session from "express-session";

  interface SQLiteStoreOptions {
    dir?: string;
    db?: string;
    ttl?: number;
  }

  class SQLiteStore extends Store {
    constructor(options?: SQLiteStoreOptions);
  }

  export default function (session: typeof import("express-session")): typeof SQLiteStore;
}
