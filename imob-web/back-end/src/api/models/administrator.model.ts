import { PersonModel } from "./person.model";

export interface AdministratorModel extends PersonModel {
    isAdministrator: boolean;
}