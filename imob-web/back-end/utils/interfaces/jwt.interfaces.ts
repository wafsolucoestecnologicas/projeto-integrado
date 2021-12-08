import { CompanyEntity } from '../../src/api/entities/company.entity';
import { AdministratorEntity } from '../../src/api/entities/administrator.entity';
import { ManagerEntity } from '../../src/api/entities/manager.entity';
import { AdvisorEntity } from '../../src/api/entities/advisor.entity';
import { BrokerEntity } from '../../src/api/entities/broker.entity';
import { SecretaryEntity } from '../../src/api/entities/secretary.entity';

export interface Payload {
    id: number;
    uuid: string;
    company: CompanyEntity;
    name: string;
    surname: string;
    email: string;
    isAdmin: boolean;
    permissions: JSON;
    administrator?: AdministratorEntity;
    manager?: ManagerEntity;
    advisor?: AdvisorEntity;
    broker?: BrokerEntity;
    secretary?: SecretaryEntity;
    iat?: number;
    exp?: number;
}