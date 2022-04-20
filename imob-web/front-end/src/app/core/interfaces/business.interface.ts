import { Company } from './company.interface';
import { Administrator } from './administrator.interface';
import { Manager } from './manager.interface';
import { Advisor } from './advisor.interface';
import { Broker } from './broker.interface';
import { Secretary } from './secretary.interface';
import { Owner } from './owner.interface';
import { Customer } from './customer.interface';
import { Lead } from './lead.interface';
import { Property } from './property.interface';

export interface Business {
    id?: number;
    status: number;
    dateVisit?: string;
    dateSale?: string;
    visitForm?: string;
    propertyRegistration?: string;
    propertySaleContract?: string;
    ITBI?: string;
    customerRG?: string;
    customerCPF?: string;
    customerAddressProof?: string;
    customerPayslip?: string;
    ownerRG?: string;
    ownerCPF?: string;
    ownerAddressProof?: string;
    ownerPayslip?: string;
    createdByAdministrator: boolean;
    createdByManager: boolean;
    createdBySecretary: boolean;
    redirectedManagerId?: number;
    redirectedAdvisorId?: number;
    redirectedBrokerId?: number;
    company: Company;
    administrator?: Administrator;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
    owner: Owner;
    customer: Customer;
    lead: Lead;
    property: Property;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBusiness {
    status: number;
    dateVisit?: string;
    dateSale?: string;
    visitForm?: string;
    propertyRegistration?: string;
    propertySaleContract?: string;
    ITBI?: string;
    customerRG?: string;
    customerCPF?: string;
    customerAddressProof?: string;
    customerPayslip?: string;
    ownerRG?: string;
    ownerCPF?: string;
    ownerAddressProof?: string;
    ownerPayslip?: string;
    createdByAdministrator: boolean;
    createdByManager: boolean;
    createdBySecretary: boolean;
    redirectedManagerId?: number;
    redirectedAdvisorId?: number;
    redirectedBrokerId?: number;
    company: Company;
    administrator?: Administrator;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
    owner?: Owner;
    customer?: Customer;
    lead?: Lead;
    property?: Property;
}

export interface UpdateBusiness {
    status: number;
    dateVisit?: string;
    dateSale?: string;
    visitForm?: string;
    propertyRegistration?: string;
    propertySaleContract?: string;
    ITBI?: string;
    customerRG?: string;
    customerCPF?: string;
    customerAddressProof?: string;
    customerPayslip?: string;
    ownerRG?: string;
    ownerCPF?: string;
    ownerAddressProof?: string;
    ownerPayslip?: string;
    createdByAdministrator: boolean;
    createdByManager: boolean;
    createdBySecretary: boolean;
    redirectedManagerId?: number;
    redirectedAdvisorId?: number;
    redirectedBrokerId?: number;
    administrator?: Administrator;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
    owner?: Owner;
    customer?: Customer;
    lead?: Lead;
    property?: Property;
}

export interface DeleteBusiness {
    business: number;
}

export interface AmountBusiness {
    totalAmountProspecting: number;
    totalAmountVisit: number;
    totalAmountProposal: number;
    totalAmountRejected: number;
    totalAmountClosed: number;
    totalAmountBusinesses: number;
}

export interface TransferManager {
    manager: {
        id: number;
    };
}

export interface TransferAdvisor {
    advisor: {
        id: number;
    };
}

export interface TransferBroker {
    broker: {
        id: number;
    };
}

export interface RejectBusiness {
    business: number;
}

export interface CloseBusiness {
    business: number;
}
