import { CompanyEntity } from '../entities/company.entity';
import { PersonModel } from './person.model';

export interface OwnerModel extends PersonModel {
    checked: boolean;
    isOwner: boolean;
    company: CompanyEntity;
}