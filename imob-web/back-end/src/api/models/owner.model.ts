import { CompanyEntity } from '../entities/company.entity';
import { Person } from '../../../utils/interfaces/person';

export interface OwnerModel extends Person {
    checked: boolean;
    isOwner: boolean;
    company: CompanyEntity;
}