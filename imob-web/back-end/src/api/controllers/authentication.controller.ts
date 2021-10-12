import { getRepository, Repository } from 'typeorm';
import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { JWT } from '../../../utils/classes/jwt.class';
import { statusMessages } from '../../../utils/utils';
import bcrypt from 'bcryptjs';

export class AuthenticationController {

    constructor() { }

    public async authenticate(request: Request, response: Response): Promise<Response> {
        try {
            const repository: Repository<UserModel> = getRepository(UserModel);

            const user: UserModel | undefined =
                await repository.findOne({
                    where: {
                        email: request.body.email
                    }
                });

            if (!user) {
                return response.status(401).json({ message: statusMessages[401] });
            }

            const isValidPassword: boolean = await bcrypt.compare(request.body.password, user.password);

            if (!isValidPassword) {
                return response.status(401).json({ message: statusMessages[401] });
            }

            user.password = '';

            const jwt: JWT = new JWT();

            jwt.setPayload({ id: user.id });
            jwt.setExpiredIn('1d');

            return response.status(200).json({ user, token: jwt.generateToken() });
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}