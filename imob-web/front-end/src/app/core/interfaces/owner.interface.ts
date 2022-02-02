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
    company: Company
}