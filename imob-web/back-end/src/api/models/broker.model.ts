import { CompanyEntity } from '../entities/company.entity';
import { PersonModel } from './person.model';

export interface BrokerModel extends PersonModel {
    isBroker: boolean;
    company: CompanyEntity;
}