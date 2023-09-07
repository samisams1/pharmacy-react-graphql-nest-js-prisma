export interface userInterface {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    role?: string;
  }
  export interface categoryInterface {
    id?: number;
    name?: string;
  }
  export interface pharmayInterface {
    id?: string;
    symptoms?: string;
    diagosis?: string;
    checkUpDate?: string;
    nextvist?: string;
    doctor?: number;
    patient?: number;

  }
  export interface productInterface {
    id?: string;
    name?: string;
    price?: string;
    barcode?: string;
    description?: string;
    image?:string;
    expire_date?:string;
    category?:categoryInterface;

   // sales?: SaleInterface;
   // supplier: supplierIiiinterface;
  }
  export interface supplierInterface {
    id?: string;
    name: string;
  }
  export interface SaleInterface {
    id?: string;
    name: string;
  }
  export interface roleInterface {
    id?: string;
    name?: string;
  }
  export interface LoginValues {
    email: string
    password: string
  }
  
