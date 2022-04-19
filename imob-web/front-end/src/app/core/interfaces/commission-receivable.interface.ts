import { Company } from './company.interface';
import { Property } from './property.interface';

export interface CommissionReceivable {
    id?: number;
    date: string;
    value: number;
    company: Company;
    property: Property;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCommissionReceivable {
    date: string;
    value: number;
    property: Property;
}

export interface UpdateCommissionReceivable {
    date: string;
    value: number;
}

export interface DeleteCommissionReceivable {
    commissionReceivable: number;
}

export interface Receivable {
    totalValueReceivable: number;
}