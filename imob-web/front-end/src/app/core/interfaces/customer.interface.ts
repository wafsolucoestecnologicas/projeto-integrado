import { Company } from './company.interface';

export interface Customer {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    isCustomer: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
    company: Company;
}

export interface CreateCustomer {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
}

export interface UpdateCustomer {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    RG: string;
    CPF: string;
    landline: string;
    cellPhone: string;
    profession: string;
}

export interface DeleteCustomer {
    customer: number;
}
