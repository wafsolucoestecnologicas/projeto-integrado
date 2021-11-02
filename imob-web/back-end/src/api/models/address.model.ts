import { CompanyEntity } from '../entities/company.entity';
import { NeighborhoodEntity } from '../entities/neighborhood.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { SecretaryEntity } from '../entities/secretary.entity';
import { OwnerEntity } from '../entities/owner.entity';
import { CustomerEntity } from '../entities/customer.entity';
import { PropertyEntity } from '../entities/property.entity';

export interface AddressModel {
    id: number;
    street: string;
    complement: string;
    number: number;
    CEP: string;
    isCompany: boolean;
    isManager: boolean;
    isAdvisor: boolean;
    isBroker: boolean;
    isSecretary: boolean;
    isOwner: boolean;
    isCustomer: boolean;
    isProperty: boolean;
    company: CompanyEntity;
    neighborhood: NeighborhoodEntity;
    manager?: ManagerEntity;
    advisor?: AdvisorEntity;
    broker?: BrokerEntity;
    secretary?: SecretaryEntity;
    owner?: OwnerEntity;
    customer?: CustomerEntity;
    property?: PropertyEntity;
}