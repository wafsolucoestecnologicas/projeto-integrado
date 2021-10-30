export interface PersonModel {
    id: number;
    name: string;
    surname: string;
    email: string;
    birthDate: Date;
    rg: string;
    cpf: string;
    landline: string;
    cellPhone: string;
    profession: string;
    createdAt: Date;
    updatedAt: Date;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}