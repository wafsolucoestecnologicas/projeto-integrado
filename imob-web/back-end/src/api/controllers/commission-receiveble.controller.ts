import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { CommissionReceivebleEntity } from '../entities/commission-receiveble.entity';
import { CommissionReceivebleService } from '../services/commission-receiveble.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class CommissionReceivebleController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const commissionReceivebleService: CommissionReceivebleService =
                new CommissionReceivebleService();

            const commissionReceivebleEntity: CommissionReceivebleEntity[] =
                await commissionReceivebleService.index();

            return response.status(200).json(commissionReceivebleEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const commissionReceivebleService: CommissionReceivebleService =
                    new CommissionReceivebleService();

                const result: boolean =
                    commissionReceivebleService.validateData(request.body);

                if (result) {
                    const commissionReceivebleEntity: CommissionReceivebleEntity =
                        await commissionReceivebleService.create(request.body, transaction);

                    return response.status(201).json(commissionReceivebleEntity);
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
            const commissionReceivebleService: CommissionReceivebleService =
                new CommissionReceivebleService();

            if (Number(request.params.id)) {
                const commissionReceivebleEntity: CommissionReceivebleEntity | undefined =
                    await commissionReceivebleService.read(Number(request.params.id));

                return response.status(200).json(commissionReceivebleEntity);
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
                const commissionReceivebleService: CommissionReceivebleService =
                    new CommissionReceivebleService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await commissionReceivebleService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            commissionReceivebleService.validateData(request.body);

                        if (result) {
                            const commissionReceivebleEntity: CommissionReceivebleEntity =
                                await commissionReceivebleService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(commissionReceivebleEntity);
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
                const commissionReceivebleService: CommissionReceivebleService =
                    new CommissionReceivebleService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await commissionReceivebleService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ commissionReceiveble: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async receiveble(request: Request, response: Response): Promise<Response> {
        try {
            const commissionReceivebleService: CommissionReceivebleService =
                new CommissionReceivebleService();

            if (request.query.month) {
                const result: any =
                    await commissionReceivebleService.calculateTotalValueReceiveble(String(request.query.month));

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}