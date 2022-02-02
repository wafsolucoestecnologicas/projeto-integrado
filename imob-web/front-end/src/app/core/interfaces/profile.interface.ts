export interface Profile {
    id?: number;
    userType: string;
    isAdmin: boolean;
    permissions: JSON;
}