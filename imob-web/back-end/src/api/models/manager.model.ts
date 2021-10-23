import { PersonModel } from './person.model';

export interface ManagerModel extends PersonModel {
    isManager: boolean;
}