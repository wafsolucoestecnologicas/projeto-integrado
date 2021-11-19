import { CompanyEntity } from '../entities/company.entity';
import { PropertyEntity } from '../entities/property.entity';

export interface CommissionReceivebleModel {
    id: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    property: PropertyEntity;

    convertValuesToNumber(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}