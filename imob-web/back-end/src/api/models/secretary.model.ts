import { PersonModel } from './person.model';

export interface SecretaryModel extends PersonModel {
    isSecretary: boolean;
}