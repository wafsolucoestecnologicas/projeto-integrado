import { CompanyEntity } from '../entities/company.entity';
import { PersonModel } from './person.model';

export interface CustomerModel extends PersonModel {
    isCustomer: boolean;
    company: CompanyEntity;
}