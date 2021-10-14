import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { JWT } from '../../../utils/classes/jwt.class';
import { returnMessages, statusMessages } from '../../../utils/utils';
import { UserService } from '../services/user.service';

export class AuthenticationController {

    constructor() { }

    public async authenticate(request: Request, response: Response): Promise<Response> {
        try {
            const userService: UserService =
                new UserService();

            if (request.body.email && request.body.password) {
                const result: boolean =
                    await userService.alreadyRegisteredByEmail(request.body.email);

                if (!result) {
                    return response.status(401).json({ message: statusMessages[401] });
                }

                const userModel: UserModel | undefined =
                    await userService.findByEmail(request.body.email);

                if (userModel) {
                    const isValid: boolean =
                        await userService.validatePassword(userModel, request.body.password);

                    if (!isValid) {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[7]}` });
                    }

                    userModel.password = '';

                    const jwt: JWT = new JWT();

                    jwt.setPayload({
                        id: userModel.id,
                        uuid: userModel.uuid,
                        name: userModel.name,
                        surname: userModel.surname,
                        email: userModel.email,
                        isAdmin: userModel.profile.isAdmin,
                        permissions: userModel.profile.permissions
                    });

                    jwt.setExpiredIn('1d');

                    return response.status(200).json({ userModel, token: jwt.generateToken() });
                } else {
                    return response.status(500).json({ message: `${statusMessages[500]} ${returnMessages[1]}` });
                }
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}