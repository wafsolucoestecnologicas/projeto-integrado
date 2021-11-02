import { CompanyEntity } from '../entities/company.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { PropertyEntity } from '../entities/property.entity';

export interface CommissionPayableModel {
    id: number;
    date: Date;
    valueClosedDeals: number;
    valuePropertyCaptured: number;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    broker: BrokerEntity;
    property: PropertyEntity;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}