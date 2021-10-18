import { CompanyEntity } from "../entities/company.entity";
import { ProfileEntity } from "../entities/profile.entity";

export interface UserModel {
    id: number;
    uuid: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    company: CompanyEntity;
    profile: ProfileEntity;
    
    encryptPassword(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}