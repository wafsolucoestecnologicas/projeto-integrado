import { Company } from './company.interface';
import { Administrator } from './administrator.interface';
import { Manager } from './manager.interface';
import { Advisor } from './advisor.interface';
import { Broker } from './broker.interface';
import { Secretary } from './secretary.interface';

export interface Property {
    id?: number;
    description?: string;
    photos?: JSON;
    checked: boolean;
    elevator?: boolean;
    bedrooms?: number;
    bathrooms?: number;
    suites?: number;
    parkingLots?: number;
    terrainArea?: number;
    buildingArea?: number;
    totalUtilTerrainArea?: number;
    condominium?: number;
    IPTU?: number;
    value?: number;
    company: Company;
    administrator?: Administrator;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
}