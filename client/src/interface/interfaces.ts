export interface patientInterface {
    id?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    martialStatus?: string;
    phoneNumber?: string;
    maritalStatus?: string;
    email?: string;
    address?: string;
    country?: string;
  }
  export interface userInterface {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    martialStatus?: string;
    phoneNumber?: string;
    password?:string;
    roleId:number;
    username:string
    Role?:Role;
    role:string
  }
  export interface Role {
    id?: number;
    name?: string;
  }
  export interface appointmentInterface {
    id?: string;
    symptoms?: string;
    diagosis?: string;
    checkUpDate?: string;
    nextvist?: string;
    doctor?: number;
    patient?: number;

  }
  export interface checkUpInterface {
    id?: string;
    symptoms?: string;
    diagosis?: string;
    checkUpDate?: string;
    nextvist?: string;
    doctor?: number;
    patient: number;
  }
  export interface PatientVitals {
    id?: string;
    temperature?: string;
    bpSystolic?: string;
    bpDiastolic?: string;
    notes?: string;
    patient?: number;
    doctor?: number;
  }
  
  export interface roleInterface {
    id?: string;
    name?: string;
  }
  export interface LoginValues {
    email: string
    password: string
  }
  
