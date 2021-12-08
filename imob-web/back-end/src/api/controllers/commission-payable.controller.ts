import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { CommissionPayableEntity } from '../entities/commission-payable.entity';
import { CommissionPayableService } from '../services/commission-payable.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class CommissionPayableController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const commissionPayableService: CommissionPayableService =
                new CommissionPayableService();

            const commissionPayableEntity: CommissionPayableEntity[] =
                await commissionPayableService.index();

            return response.status(200).json(commissionPayableEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const commissionPayableService: CommissionPayableService =
                    new CommissionPayableService();

                const result: boolean =
                    commissionPayableService.validateData(request.body);

                if (result) {
                    request.body.company = request.payload.company;
                    
                    const commissionPayableEntity: CommissionPayableEntity =
                        await commissionPayableService.create(request.body, transaction);

                    return response.status(201).json(commissionPayableEntity);
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
            const commissionPayableService: CommissionPayableService =
                new CommissionPayableService();

            if (Number(request.params.id)) {
                const commissionPayableEntity: CommissionPayableEntity | undefined =
                    await commissionPayableService.read(Number(request.params.id));

                return response.status(200).json(commissionPayableEntity);
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
                const commissionPayableService: CommissionPayableService =
                    new CommissionPayableService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await commissionPayableService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            commissionPayableService.validateData(request.body);

                        if (result) {
                            const commissionPayableEntity: CommissionPayableEntity =
                                await commissionPayableService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(commissionPayableEntity);
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
                const commissionPayableService: CommissionPayableService =
                    new CommissionPayableService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await commissionPayableService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ commissionPayble: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async payable(request: Request, response: Response): Promise<Response> {
        try {
            const commissionPayableService: CommissionPayableService =
                new CommissionPayableService();

            if (request.query.month) {
                const result: any =
                    await commissionPayableService.calculateTotalValuePayable(String(request.query.month));

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}