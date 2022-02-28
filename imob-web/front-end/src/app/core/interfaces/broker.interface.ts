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
    company: Company
}

export interface UpdateBroker {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    RG: string;
    CPF: string;
    landline: string;
    cellPhone: string;
    profession: string
}

export interface DeleteBroker {
    user: number;
    broker: number;
}