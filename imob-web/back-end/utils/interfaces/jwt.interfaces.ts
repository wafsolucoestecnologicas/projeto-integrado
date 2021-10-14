export interface Payload {
    id: number;
    uuid: string;
    name: string;
    surname: string;
    email: string;
    isAdmin: boolean;
    permissions: JSON;
    iat?: number;
    exp?: number;
}