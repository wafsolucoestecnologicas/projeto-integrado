import { PersonModel } from './person.model';

export interface AdvisorModel extends PersonModel {
    isAdvisor: boolean;
}