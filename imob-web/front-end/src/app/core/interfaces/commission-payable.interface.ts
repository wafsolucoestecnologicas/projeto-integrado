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
}