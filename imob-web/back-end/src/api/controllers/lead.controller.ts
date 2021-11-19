import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { LeadEntity } from '../entities/lead.entity';
import { LeadService } from '../services/lead.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class LeadController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const leadService: LeadService =
                new LeadService();

            const leadEntity: LeadEntity[] =
                await leadService.index();

            return response.status(200).json(leadEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const leadService: LeadService =
                    new LeadService();

                const result: boolean =
                    leadService.validateData(request.body);

                if (result) {
                    const result: boolean =
                        await leadService.alreadyRegisterByEmail(request.body.email);

                    if (!result) {
                        /** @TODO Descomentar a linha abaixo após os testes com o Postman */
                        //request.body.company = request.payload.company;

                        const leadEntity: LeadEntity =
                            await leadService.create(request.body, transaction);

                        return response.status(201).json(leadEntity);
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[3]}` });
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
            const leadService: LeadService =
                new LeadService();

            if (Number(request.params.id)) {
                const leadEntity: LeadEntity | undefined =
                    await leadService.read(Number(request.params.id));

                return response.status(200).json(leadEntity);
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
                const leadService: LeadService =
                    new LeadService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await leadService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            leadService.validateData(request.body);

                        if (result) {
                            const leadEntity: LeadEntity =
                                await leadService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(leadEntity);
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
                const leadService: LeadService =
                    new LeadService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await leadService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ lead: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async amount(request: Request, response: Response): Promise<Response> {
        try {
            const leadService: LeadService =
                new LeadService();

            if (request.query.month) {
                const result: any =
                    await leadService.calculateTotalAmountLeads(String(request.query.month));

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}