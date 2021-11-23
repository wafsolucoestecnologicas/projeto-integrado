import jwt from 'jsonwebtoken';
import CONFIGURATION from '../../config/dotenv';

import { Payload } from '../interfaces/jwt.interfaces';

export class JWT {

    private payload: Payload;
    private expiredIn: string;
    private privateKey: string;

    constructor() {
        this.expiredIn = '';

        /** @TODO Retirar a palavra secret */
        this.privateKey = (CONFIGURATION.JWT.PRIVATE_KEY) ? CONFIGURATION.JWT.PRIVATE_KEY : 'secret';
    }

    public getPayload(): Payload {
        return this.payload;
    }

    public setPayload(payload: Payload): void {
        this.payload = payload;
    }

    public getExpiredIn(): string {
        return this.expiredIn;
    }

    public setExpiredIn(expiredIn: string): void {
        this.expiredIn = expiredIn;
    }

    public generateToken(): string {
        return jwt.sign(this.payload, this.privateKey, { expiresIn: this.expiredIn });
    }

    public static checkToken(token: string): any {
        /** @TODO Retirar a palavra secret  */
        return jwt.verify(token, CONFIGURATION.JWT.PRIVATE_KEY || 'secret');
    }

}