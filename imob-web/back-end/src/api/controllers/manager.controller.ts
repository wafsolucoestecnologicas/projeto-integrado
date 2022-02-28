import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { ManagerEntity } from '../entities/manager.entity';
import { UserEntity } from '../entities/user.entity';
import { ManagerService } from '../services/manager.service';
import { UserService } from '../services/user.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class ManagerController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const managerService: ManagerService =
                new ManagerService();

            const managerEntity: ManagerEntity[] =
                await managerService.index(request.payload);

            return response.status(200).json(managerEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const managerService: ManagerService =
                    new ManagerService();

                const result: boolean =
                    managerService.validateData(request.body);

                if (result) {
                    const result: boolean =
                        await managerService.alreadyRegisterByCPF(request.body.cpf);

                    if (!result) {
                        const managerEntity: ManagerEntity =
                            await managerService.create(request.body, transaction);

                        return response.status(201).json(managerEntity);
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
            const managerService: ManagerService =
                new ManagerService();

            if (Number(request.params.id)) {
                const managerEntity: ManagerEntity | undefined =
                    await managerService.read(Number(request.params.id), request.payload);

                return response.status(200).json(managerEntity);
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
                const managerService: ManagerService =
                    new ManagerService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await managerService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            managerService.validateData(request.body);

                        if (result) {
                            const managerEntity: ManagerEntity =
                                await managerService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(managerEntity);
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
                const managerService: ManagerService =
                    new ManagerService();

                if (Number(request.params.id)) {
                    const managerEntity: ManagerEntity | undefined =
                        await managerService.read(Number(request.params.id), request.payload);

                    if (managerEntity) {
                        const userService: UserService =
                            new UserService();

                        const userEntity: UserEntity | undefined =
                            await userService.findByManager(Number(request.params.id));

                        if (userEntity) {
                            const userDeleteResult: DeleteResult =
                                await userService.delete(userEntity.id, transaction);

                            const managerDeleteResult: DeleteResult =
                                await managerService.delete(Number(request.params.id), transaction);

                            return response.status(200).json({
                                user: userDeleteResult.affected,
                                manager: managerDeleteResult.affected
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