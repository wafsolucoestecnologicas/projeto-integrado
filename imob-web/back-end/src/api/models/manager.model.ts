import { CompanyEntity } from '../entities/company.entity';
import { Person } from '../../../utils/interfaces/person';

export interface ManagerModel extends Person {
    isManager: boolean;
    company: CompanyEntity;
}