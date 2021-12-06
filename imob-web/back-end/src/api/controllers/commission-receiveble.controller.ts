import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { CommissionReceivableEntity } from '../entities/commission-receiveble.entity';
import { CommissionReceivableService } from '../services/commission-receiveble.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class CommissionReceivableController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const commissionReceivableService: CommissionReceivableService =
                new CommissionReceivableService();

            const commissionReceivableEntity: CommissionReceivableEntity[] =
                await commissionReceivableService.index();

            return response.status(200).json(commissionReceivableEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const commissionReceivableService: CommissionReceivableService =
                    new CommissionReceivableService();

                const result: boolean =
                    commissionReceivableService.validateData(request.body);

                if (result) {
                    const commissionReceivableEntity: CommissionReceivableEntity =
                        await commissionReceivableService.create(request.body, transaction);

                    return response.status(201).json(commissionReceivableEntity);
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
            const commissionReceivableService: CommissionReceivableService =
                new CommissionReceivableService();

            if (Number(request.params.id)) {
                const commissionReceivableEntity: CommissionReceivableEntity | undefined =
                    await commissionReceivableService.read(Number(request.params.id));

                return response.status(200).json(commissionReceivableEntity);
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
                const commissionReceivableService: CommissionReceivableService =
                    new CommissionReceivableService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await commissionReceivableService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            commissionReceivableService.validateData(request.body);

                        if (result) {
                            const commissionReceivableEntity: CommissionReceivableEntity =
                                await commissionReceivableService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(commissionReceivableEntity);
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
                const commissionReceivableService: CommissionReceivableService =
                    new CommissionReceivableService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await commissionReceivableService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ commissionReceivable: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async receivable(request: Request, response: Response): Promise<Response> {
        try {
            const commissionReceivableService: CommissionReceivableService =
                new CommissionReceivableService();

            if (request.query.month) {
                const result: any =
                    await commissionReceivableService.calculateTotalValueReceivable(String(request.query.month));

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}