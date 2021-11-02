import { CompanyEntity } from '../entities/company.entity';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { SecretaryEntity } from '../entities/secretary.entity';

export interface LeadModel {
    id: number;
    name: string;
    surname: string;
    email: string;
    source: string;
    landline: string;
    cellPhone: string;
    comments: string;
    createdByAdministrator: boolean;
    createdByManager: boolean;
    createdBySecretary: boolean;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    administrator?: AdministratorEntity;
    manager?: ManagerEntity;
    secretary?: SecretaryEntity;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}

export const sources: string[] = [
    'Imobiliária',
    'Telefone',
    'Anúncios',
    'Internet',
    'Whatsapp'
];