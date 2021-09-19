import { getRepository, Repository } from 'typeorm';
import { Request, Response } from 'express';

import { UserModel } from '../models/user.model';
import statusMessages from '../../../utils/utils';

export class UserController {

    constructor() { }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repository: Repository<UserModel> = getRepository(UserModel);
            const user: UserModel = new UserModel();

            user.name = request.body.name.toLowerCase();
            user.surname = request.body.surname.toLowerCase();
            user.email = request.body.email.toLowerCase();
            user.password = request.body.password;

            const email: UserModel | undefined =
                await repository.findOne({
                    select: ['email'],
                    where: {
                        email: user.email
                    }
                });

            if (email) {
                return response.status(409).json({ message: statusMessages[409] });
            }

            return response.status(200).json(await repository.save(user));
        } catch (e: any) {
            return response.status(500).json({ message: e.message });
        }
    }

}