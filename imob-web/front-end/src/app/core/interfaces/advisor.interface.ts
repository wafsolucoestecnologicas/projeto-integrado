import { Company } from './company.interface';

export interface Advisor {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    isAdvisor: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
    company: Company,
    createdAt: string;
    updatedAt: string;
}

export interface UpdateAdvisor {
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