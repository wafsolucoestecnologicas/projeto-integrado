export interface Administrator {
    id?: number;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    isAdministrator: boolean;
    RG: string;
    CPF: string;
    landline?: string;
    cellPhone: string;
    profession?: string;
}