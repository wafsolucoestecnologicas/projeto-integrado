import { CompanyEntity } from '../entities/company.entity';
import { PersonModel } from './person.model';

export interface AdvisorModel extends PersonModel {
    isAdvisor: boolean;
    company: CompanyEntity;
}