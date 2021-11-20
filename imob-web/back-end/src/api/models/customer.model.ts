import { CompanyEntity } from '../entities/company.entity';
import { Person } from '../../../utils/interfaces/person';

export interface CustomerModel extends Person {
    isCustomer: boolean;
    company: CompanyEntity;
}