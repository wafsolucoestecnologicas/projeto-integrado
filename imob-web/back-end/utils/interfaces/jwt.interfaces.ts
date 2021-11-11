import { CompanyEntity } from "../../src/api/entities/company.entity";

export interface Payload {
    id: number;
    uuid: string;
    company: CompanyEntity;
    name: string;
    surname: string;
    email: string;
    isAdmin: boolean;
    permissions: JSON;
    iat?: number;
    exp?: number;
}