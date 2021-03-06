import { CompanyEntity } from '../entities/company.entity';
import { OwnerEntity } from '../entities/owner.entity';
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
    owner: OwnerEntity;
    administrator?: AdministratorEntity;
    manager?: ManagerEntity;
    advisor?: AdvisorEntity;
    broker?: BrokerEntity;
    secretary?: SecretaryEntity;

    convertValuesToNumber(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}