import { CompanyEntity } from '../entities/company.entity';
import { Person } from '../../../utils/interfaces/person';

export interface AdvisorModel extends Person {
    isAdvisor: boolean;
    company: CompanyEntity;
}