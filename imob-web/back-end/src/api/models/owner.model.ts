import { PersonModel } from './person.model';

export interface OwnerModel extends PersonModel {
    checked: boolean;
    isOwner: boolean;
}