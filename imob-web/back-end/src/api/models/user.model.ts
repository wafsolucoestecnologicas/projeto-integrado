import { CompanyEntity } from '../entities/company.entity';
import { ProfileEntity } from '../entities/profile.entity';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { SecretaryEntity } from '../entities/secretary.entity';

export interface UserModel {
    id: number;
    uuid: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    isAdministrator: boolean;
    isManager: boolean;
    isAdvisor: boolean;
    isBroker: boolean;
    isSecretary: boolean;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    profile: ProfileEntity;
    administrator?: AdministratorEntity;
    manager?: ManagerEntity;
    advisor?: AdvisorEntity;
    broker?: BrokerEntity;
    secretary?: SecretaryEntity;

    encryptPassword(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}