import { Request, Response } from 'express';

export class UsersController {

    constructor() { }

    public async createUser(request: Request, response: Response): Promise<Response> {
        return response.status(200).json(request.body);
    }

}