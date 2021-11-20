import { CompanyEntity } from '../entities/company.entity';
import { Person } from '../../../utils/interfaces/person';

export interface BrokerModel extends Person {
    isBroker: boolean;
    company: CompanyEntity;
}