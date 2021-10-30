export interface ProfileModel {
    id: number;
    userType: string;
    isAdmin: boolean;
    permissions: JSON;
    createdAt: Date;
    updatedAt: Date;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}

export enum ProfileEnum {
    ADMINISTRATOR = 1,
    MANAGER,
    ADVISOR,
    BROKER,
    SECRETARY
}