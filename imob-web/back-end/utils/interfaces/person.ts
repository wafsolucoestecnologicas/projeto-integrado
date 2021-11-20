export interface PersonModel {
    id: number;
    name: string;
    surname: string;
    email: string;
    birthDate: Date;
    RG: string;
    CPF: string;
    landline: string;
    cellPhone: string;
    profession: string;
    createdAt: Date;
    updatedAt: Date;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}