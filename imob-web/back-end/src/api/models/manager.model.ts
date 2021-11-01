import { CompanyEntity } from '../entities/company.entity';
import { PersonModel } from './person.model';

export interface ManagerModel extends PersonModel {
    isManager: boolean;
    company: CompanyEntity;
}