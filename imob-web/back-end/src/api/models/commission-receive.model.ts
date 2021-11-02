import { CompanyEntity } from '../entities/company.entity';
import { PropertyEntity } from '../entities/property.entity';

export interface CommissionReceiveModel {
    id: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    property: PropertyEntity;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}