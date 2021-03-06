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
    company: Company,
    createdAt: string;
    updatedAt: string;
}

export interface UpdateManager {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string
}