import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { SecretaryEntity } from '../entities/secretary.entity';
import { UserEntity } from '../entities/user.entity';
import { SecretaryService } from '../services/secretary.service';
import { UserService } from '../services/user.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class SecretaryController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const secretaryService: SecretaryService =
                new SecretaryService();

            const secretaryEntity: SecretaryEntity[] =
                await secretaryService.index();

            return response.status(200).json(secretaryEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const secretaryService: SecretaryService =
                    new SecretaryService();

                const result: boolean =
                    secretaryService.validateData(request.body);

                if (result) {
                    const result: boolean =
                        await secretaryService.alreadyRegisterByCPF(request.body.cpf);

                    if (!result) {
                        const secretaryEntity: SecretaryEntity =
                            await secretaryService.create(request.body, transaction);

                        return response.status(201).json(secretaryEntity);
                    } else {
                        return response.status(409).json({ message: `${statusMessages[409]} ${returnMessages[3]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async read(request: Request, response: Response): Promise<Response> {
        try {
            const secretaryService: SecretaryService =
                new SecretaryService();

            if (Number(request.params.id)) {
                const secretaryEntity: SecretaryEntity | undefined =
                    await secretaryService.read(Number(request.params.id));

                return response.status(200).json(secretaryEntity);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const secretaryService: SecretaryService =
                    new SecretaryService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await secretaryService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            secretaryService.validateData(request.body);

                        if (result) {
                            const secretaryEntity: SecretaryEntity =
                                await secretaryService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(secretaryEntity);
                        } else {
                            return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
                        }
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const secretaryService: SecretaryService =
                    new SecretaryService();

                if (Number(request.params.id)) {
                    const secretaryEntity: SecretaryEntity | undefined =
                        await secretaryService.read(Number(request.params.id));

                    if (secretaryEntity) {
                        const userService: UserService =
                            new UserService();

                        const userEntity: UserEntity | undefined =
                            await userService.findBySecretary(Number(request.params.id));

                        if (userEntity) {
                            const userDeleteResult: DeleteResult =
                                await userService.delete(userEntity.id, transaction);

                            const secretaryDeleteResult: DeleteResult =
                                await secretaryService.delete(Number(request.params.id), transaction);

                            return response.status(200).json({
                                user: userDeleteResult.affected,
                                secretary: secretaryDeleteResult.affected
                            });
                        } else {
                            return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                        }
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

}