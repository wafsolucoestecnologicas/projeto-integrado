export interface Profile {
    id?: number;
    userType: string;
    isAdmin: boolean;
    permissions: JSON;
}

export interface UserType {
    disabled: boolean;
    description: string;
    value: number;
}