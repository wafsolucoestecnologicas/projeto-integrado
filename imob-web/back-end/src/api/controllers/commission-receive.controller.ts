import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { CommissionReceiveEntity } from '../entities/commission-receive.entity';
import { CommissionReceiveService } from '../services/commission-receive.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class CommissionReceiveController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const commissionReceiveService: CommissionReceiveService =
                new CommissionReceiveService();

            const commissionReceiveEntity: CommissionReceiveEntity[] =
                await commissionReceiveService.index();

            return response.status(200).json(commissionReceiveEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const commissionReceiveService: CommissionReceiveService =
                    new CommissionReceiveService();

                const result: boolean =
                    commissionReceiveService.validateData(request.body);

                if (result) {
                    const commissionReceiveEntity: CommissionReceiveEntity =
                        await commissionReceiveService.create(request.body, transaction);

                    return response.status(201).json(commissionReceiveEntity);
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
            const commissionReceiveService: CommissionReceiveService =
                new CommissionReceiveService();

            if (Number(request.params.id)) {
                const commissionReceiveEntity: CommissionReceiveEntity | undefined =
                    await commissionReceiveService.read(Number(request.params.id));

                return response.status(200).json(commissionReceiveEntity);
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
                const commissionReceiveService: CommissionReceiveService =
                    new CommissionReceiveService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await commissionReceiveService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            commissionReceiveService.validateData(request.body);

                        if (result) {
                            const commissionReceiveEntity: CommissionReceiveEntity =
                                await commissionReceiveService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(commissionReceiveEntity);
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
                const commissionReceiveService: CommissionReceiveService =
                    new CommissionReceiveService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await commissionReceiveService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ commissionReceive: deleteResult.affected });
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
            const commissionReceiveService: CommissionReceiveService =
                new CommissionReceiveService();

            if (request.query.month) {
                const result: any =
                    await commissionReceiveService.calculateTotalValueReceiveble(String(request.query.month));

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}