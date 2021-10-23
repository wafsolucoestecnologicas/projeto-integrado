import { PersonModel } from './person.model';

export interface CustomerModel extends PersonModel {
    isCustomer: boolean;
}