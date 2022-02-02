import { Company } from './company.interface';
import { Administrator } from './administrator.interface';
import { Manager } from './manager.interface';
import { Secretary } from './secretary.interface';

export interface Lead {
    id?: number;
    name: string;
    surname: string;
    email: string;
    source: number;
    landline?: string;
    cellPhone: string;
    comments?: string;
    createdByAdministrator: boolean;
    createdByManager: boolean;
    createdBySecretary: boolean;
    company: Company;
    administrator?: Administrator;
    manager?: Manager;
    secretary?: Secretary;
}