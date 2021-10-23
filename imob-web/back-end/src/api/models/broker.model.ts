import { PersonModel } from './person.model';

export interface BrokerModel extends PersonModel {
    isBroker: boolean;
}