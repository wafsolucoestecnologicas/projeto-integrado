import { NextFunction, Request, Response } from "express";

import { JWT } from "../../utils/classes/jwt.class";
import { Payload } from "../../utils/interfaces/jwt.interfaces";
import statusMessages from "../../utils/utils";

export function authenticationMiddleware(request: Request, response: Response, next: NextFunction) {
    if (!request.headers.authorization) {
        return response.status(401).json({ message: statusMessages[401] });
    }

    const token: string = request.headers.authorization.replace('Bearer', '').trim();

    try {
        const data: Payload = JWT.checkToken(token);
        
        request.payload = data;

        next();
    } catch (e: any) {
        return response.status(500).json({ message: e.message });
    }
}