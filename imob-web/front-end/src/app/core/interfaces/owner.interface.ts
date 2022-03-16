import { Company } from './company.interface';

export interface Owner {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    checked: boolean;
    isOwner: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
    company: Company,
    createdAt: string;
    updatedAt: string;
}

export interface CreateOwner {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    checked: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
}

export interface UpdateOwner {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    checked: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
}

export interface DeleteOwner {
    owner: number;
}