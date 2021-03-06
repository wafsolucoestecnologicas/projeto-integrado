import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { AdvisorEntity } from '../entities/advisor.entity';
import { UserEntity } from '../entities/user.entity';
import { AdvisorService } from '../services/advisor.service';
import { UserService } from '../services/user.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class AdvisorController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const advisorService: AdvisorService =
                new AdvisorService();

            const advisorEntity: AdvisorEntity[] =
                await advisorService.index(request.payload);

            return response.status(200).json(advisorEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const advisorService: AdvisorService =
                    new AdvisorService();

                const result: boolean =
                    advisorService.validateData(request.body);

                if (result) {
                    const result: boolean =
                        await advisorService.alreadyRegisterByCPF(request.body.cpf);

                    if (!result) {
                        const advisorEntity: AdvisorEntity =
                            await advisorService.create(request.body, transaction);

                        return response.status(201).json(advisorEntity);
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
            const advisorService: AdvisorService =
                new AdvisorService();

            if (Number(request.params.id)) {
                const advisorEntity: AdvisorEntity | undefined =
                    await advisorService.read(Number(request.params.id), request.payload);

                return response.status(200).json(advisorEntity);
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
                const advisorService: AdvisorService =
                    new AdvisorService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await advisorService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            advisorService.validateData(request.body);

                        if (result) {
                            const advisorEntity: AdvisorEntity =
                                await advisorService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(advisorEntity);
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
                const advisorService: AdvisorService =
                    new AdvisorService();

                if (Number(request.params.id)) {
                    const advisorEntity: AdvisorEntity | undefined =
                        await advisorService.read(Number(request.params.id), request.payload);

                    if (advisorEntity) {
                        const userService: UserService =
                            new UserService();

                        const userEntity: UserEntity | undefined =
                            await userService.findByAdvisor(Number(request.params.id));

                        if (userEntity) {
                            const userDeleteResult: DeleteResult =
                                await userService.delete(userEntity.id, transaction);

                            const advisorDeleteResult: DeleteResult =
                                await advisorService.delete(Number(request.params.id), transaction);

                            return response.status(200).json({
                                user: userDeleteResult.affected,
                                advisor: advisorDeleteResult.affected
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