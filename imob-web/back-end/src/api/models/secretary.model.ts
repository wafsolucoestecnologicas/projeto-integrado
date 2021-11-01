import { CompanyEntity } from '../entities/company.entity';
import { PersonModel } from './person.model';

export interface SecretaryModel extends PersonModel {
    isSecretary: boolean;
    company: CompanyEntity;
}