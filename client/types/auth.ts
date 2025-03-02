export type User = {
    id: string
    email: string
    name: string
  }
  
  export type SignupCredentials = {
    email: string
    password: string
  }
  
  export type LoginCredentials = {
    email: string
    password: string
  }
  
  export interface AuthFormData {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    panCard?: string;
  }