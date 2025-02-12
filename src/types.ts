export interface Employee {
    id: number;
    name: string;
    gender: string;
    photo: string;
    phone: string;
    position: string;   
    stack: string[];
    birthdate: string;
    dateOfEmployment: string;
  }
  
  export interface EmployeeState {
    employees: Employee[];
    employee: Employee | null;
    loading: boolean;
    error: string | null;
  }
  
  