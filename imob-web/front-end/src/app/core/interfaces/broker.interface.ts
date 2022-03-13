import { Company } from './company.interface';

export interface Broker {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    isBroker: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
    company: Company,
    createdAt: string;
    updatedAt: string;
}

export interface UpdateBroker {
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