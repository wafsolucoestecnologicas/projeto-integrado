import { Request, Response, NextFunction } from 'express';
import { JWT } from '../../utils/classes/jwt.class';
import { Payload } from '../../utils/interfaces/jwt.interfaces';
import { validateURLWithoutAuthentication, statusMessages } from '../../utils/utils';

function authenticationMiddleware(request: Request, response: Response, next: NextFunction): Response | void {
    try {
        const result: boolean =
            validateURLWithoutAuthentication(request.url, request.method);

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