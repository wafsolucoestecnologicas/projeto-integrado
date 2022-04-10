import { CompanyEntity } from '../entities/company.entity';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { SecretaryEntity } from '../entities/secretary.entity';
import { OwnerEntity } from '../entities/owner.entity';
import { CustomerEntity } from '../entities/customer.entity';
import { PropertyEntity } from '../entities/property.entity';
import { LeadEntity } from '../entities/lead.entity';

export interface BusinessModel {
    id: number;
    status: number;
    dateVisit: Date;
    dateSale: Date;
    visitForm: string;
    propertyRegistration: string;
    propertySaleContract: string;
    ITBI: string;
    customerRG: string;
    customerCPF: string;
    customerAddressProof: string;
    customerPayslip: string;
    ownerRG: string;
    ownerCPF: string;
    ownerAddressProof: string;
    ownerPayslip: string;
    createdByAdministrator: boolean;
    createdByManager: boolean;
    createdBySecretary: boolean;
    redirectedManagerId: number;
    redirectedAdvisorId: number;
    redirectedBrokerId: number;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    administrator?: AdministratorEntity;
    manager?: ManagerEntity;
    advisor?: AdvisorEntity;
    broker?: BrokerEntity;
    secretary?: SecretaryEntity;
    owner: OwnerEntity;
    customer: CustomerEntity;
    property: PropertyEntity;

    convertDatesToTimestamp(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}

export const status: string[] = [
    'Prospecção',
    'Visita',
    'Proposta',
    'Rejeitado',
    'Fechado'
];