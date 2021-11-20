import { Person } from "../../../utils/interfaces/person";

export interface AdministratorModel extends Person {
    isAdministrator: boolean;
}