import { Company } from './company.interface';
import { Property } from './property.interface';

export interface CommissionReceivable {
    id?: number;
    date: string;
    value: number;
    company: Company;
    property: Property;
}