import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { BrokerEntity } from '../entities/broker.entity';
import { UserEntity } from '../entities/user.entity';
import { BrokerService } from '../services/broker.service';
import { UserService } from '../services/user.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class BrokerController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const brokerService: BrokerService =
                new BrokerService();

            const brokerEntity: BrokerEntity[] =
                await brokerService.index();

            return response.status(200).json(brokerEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const brokerService: BrokerService =
                    new BrokerService();

                const result: boolean =
                    brokerService.validateData(request.body);

                if (result) {
                    const result: boolean =
                        await brokerService.alreadyRegisterByCPF(request.body.cpf);

                    if (!result) {
                        const brokerEntity: BrokerEntity =
                            await brokerService.create(request.body, transaction);

                        return response.status(201).json(brokerEntity);
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
            const brokerService: BrokerService =
                new BrokerService();

            if (Number(request.params.id)) {
                const brokerEntity: BrokerEntity | undefined =
                    await brokerService.read(Number(request.params.id));

                return response.status(200).json(brokerEntity);
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
                const brokerService: BrokerService =
                    new BrokerService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await brokerService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            brokerService.validateData(request.body);

                        if (result) {
                            const brokerEntity: BrokerEntity =
                                await brokerService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(brokerEntity);
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
                const brokerService: BrokerService =
                    new BrokerService();

                if (Number(request.params.id)) {
                    const brokerEntity: BrokerEntity | undefined =
                        await brokerService.read(Number(request.params.id));

                    if (brokerEntity) {
                        const userService: UserService =
                            new UserService();

                        const userEntity: UserEntity | undefined =
                            await userService.findByBroker(Number(request.params.id));

                        if (userEntity) {
                            const userDeleteResult: DeleteResult =
                                await userService.delete(userEntity.id, transaction);

                            const brokerDeleteResult: DeleteResult =
                                await brokerService.delete(Number(request.params.id), transaction);

                            return response.status(200).json({
                                user: userDeleteResult.affected,
                                broker: brokerDeleteResult.affected
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