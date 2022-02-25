import { Company } from './company.interface';

export interface Manager {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    isManager: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
    company: Company
}

export interface UpdateManager {
    name: string,
    surname: string,
    email: string,
    birthDate: string,
    RG: string,
    CPF: string,
    landline?: string,
    cellPhone: string,
    profession?: string
}

export interface DeleteManager {
    user: number;
    manager: number;
}