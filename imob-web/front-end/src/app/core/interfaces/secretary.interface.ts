import { Company } from './company.interface';

export interface Secretary {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    isSecretary: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
    company: Company
}

export interface UpdateSecretary {
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