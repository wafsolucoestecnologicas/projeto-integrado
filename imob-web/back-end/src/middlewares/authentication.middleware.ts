import { Request, Response, NextFunction } from 'express';
import { JWT } from '../../utils/classes/jwt.class';
import { Payload } from '../../utils/interfaces/jwt.interfaces';
import { statusMessages } from '../../utils/utils';

const validateURLWithoutAuthentication = (url: string): boolean => {
    url = url.split('/')[1];

    /**@TODO Deixar apenas a rota de users futuramente */
    const urls: string[] = [
        'users',
        'companies',
        'profiles'
    ];

    const isValid: boolean = urls.includes(url);

    return isValid;
};

const authenticationMiddleware = (request: Request, response: Response, next: NextFunction): Response | void => {
    try {
        const result: boolean =
            validateURLWithoutAuthentication(request.url);

        if (result) {
            next();
        } else if (!request.headers.authorization) {
            return response.status(401).json({ message: statusMessages[401] });
        } else {
            const token: string = request.headers.authorization.replace('Bearer', '').trim();

            const data: Payload = JWT.checkToken(token);

            request.payload = data;

            next();
        }
    } catch (e: any) {
        return response.status(500).json({ message: e.message });
    }
};

export default authenticationMiddleware;