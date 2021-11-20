import { CompanyEntity } from '../entities/company.entity';
import { Person } from '../../../utils/interfaces/person';

export interface SecretaryModel extends Person {
    isSecretary: boolean;
    company: CompanyEntity;
}