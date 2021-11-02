import { CompanyEntity } from '../entities/company.entity';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { SecretaryEntity } from '../entities/secretary.entity';

export interface PropertyModel {
    id: number;
    description: string;
    photos: JSON;
    checked: boolean;
    elevator: boolean;
    bedrooms: number;
    bathrooms: number;
    suites: number;
    parkingLots: number;
    terrainArea: number;
    buildingArea: number;
    totalUtilTerrainArea: number;
    condominium: number;
    IPTU: number;
    value: number;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    administrator?: AdministratorEntity;
    manager?: ManagerEntity;
    advisor?: AdvisorEntity;
    broker?: BrokerEntity;
    secretary?: SecretaryEntity;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}