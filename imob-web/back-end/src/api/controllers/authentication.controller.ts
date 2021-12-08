import { Request, Response } from 'express';
import { UserEntity } from '../entities/user.entity';
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
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                }

                const userEntity: UserEntity | undefined =
                    await userService.findByEmail(request.body.email);

                if (userEntity) {
                    const isValid: boolean =
                        await userService.validatePassword(userEntity, request.body.password);

                    if (!isValid) {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[7]}` });
                    }

                    userEntity.password = '';

                    const jwt: JWT = new JWT();

                    jwt.setPayload({
                        id: userEntity.id,
                        uuid: userEntity.uuid,
                        company: userEntity.company,
                        name: userEntity.name,
                        surname: userEntity.surname,
                        email: userEntity.email,
                        isAdmin: userEntity.profile.isAdmin,
                        permissions: userEntity.profile.permissions,
                        administrator: userEntity?.administrator,
                        manager: userEntity?.manager,
                        advisor: userEntity?.advisor,
                        broker: userEntity?.broker,
                        secretary: userEntity?.secretary
                    });

                    jwt.setExpiredIn('1d');

                    return response.status(200).json({
                        user: {
                            id: userEntity.id,
                            name: userEntity.name,
                            surname: userEntity.surname,
                            email: userEntity.email,
                            isAdministrator: userEntity.isAdministrator,
                            isManager: userEntity.isManager,
                            isAdvisor: userEntity.isAdvisor,
                            isBroker: userEntity.isBroker,
                            isSecretary: userEntity.isSecretary,
                            createdAt: userEntity.createdAt,
                            updatedAt: userEntity.updatedAt
                        },
                        company: userEntity.company,
                        profile: userEntity.profile,
                        administrator: userEntity?.administrator,
                        manager: userEntity?.manager,
                        advisor: userEntity?.advisor,
                        broker: userEntity?.broker,
                        secretary: userEntity?.secretary,
                        token: jwt.generateToken()
                    });
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