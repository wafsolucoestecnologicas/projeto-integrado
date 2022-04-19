import { Company } from './company.interface';
import { Broker } from './broker.interface';
import { Property } from './property.interface';

export interface CommissionPayable {
    id?: number;
    date: string;
    valueClosedDeals: number;
    valuePropertyCaptured: number;
    company: Company;
    broker: Broker;
    property: Property;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCommissionPayable {
    date: string;
    valueClosedDeals: number;
    valuePropertyCaptured: number;
    broker: Broker;
    property: Property;
}

export interface UpdateCommissionPayable {
    date: string;
    valueClosedDeals: number;
    valuePropertyCaptured: number;
}

export interface DeleteCommissionPayable {
    commissionPayable: number;
}

export interface Payable {
    totalValueClosedDeals: number;
    totalValuePropertyCaptured: number;
}