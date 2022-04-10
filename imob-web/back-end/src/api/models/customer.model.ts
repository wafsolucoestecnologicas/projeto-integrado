import { CompanyEntity } from '../entities/company.entity';
import { LeadEntity } from '../entities/lead.entity';
import { Person } from '../../../utils/interfaces/person';

export interface CustomerModel extends Person {
    isCustomer: boolean;
    company: CompanyEntity;
    lead: LeadEntity;
}