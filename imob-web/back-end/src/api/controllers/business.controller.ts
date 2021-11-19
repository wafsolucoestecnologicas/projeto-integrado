import { DeleteResult, EntityManager, getManager, UpdateResult } from 'typeorm';
import { Request, Response } from 'express';
import { BusinessEntity } from '../entities/business.entity';
import { BusinessService } from '../services/business.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class BusinessController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const businessService: BusinessService =
                new BusinessService();

            const businessEntity: BusinessEntity[] =
                await businessService.index();

            return response.status(200).json(businessEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                const result: boolean =
                    businessService.validateData(request.body);

                if (result) {
                    /** @TODO Descomentar a linha abaixo após os testes com o Postman */
                    //request.body.company = request.payload.company;

                    const businessEntity: BusinessEntity =
                        await businessService.create(request.body, transaction);

                    return response.status(201).json(businessEntity);
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
            const businessService: BusinessService =
                new BusinessService();

            if (Number(request.params.id)) {
                const businessEntity: BusinessEntity | undefined =
                    await businessService.read(Number(request.params.id));

                return response.status(200).json(businessEntity);
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
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            businessService.validateData(request.body);

                        if (result) {
                            const businessEntity: BusinessEntity =
                                await businessService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(businessEntity);
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
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await businessService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ business: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async transferBusinessToManager(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.transferBusinessToManager(request.body.manager, request.body.business, transaction);

                        return response.status(200).json({ business: updateResult.affected });
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

    public async transferBusinessToAdvisor(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.transferBusinessToAdvisor(request.body.advisor, request.body.business, transaction);

                        return response.status(200).json({ business: updateResult.affected });
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

    public async transferBusinessToBroker(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.transferBusinessToBroker(request.body.broker, request.body.business, transaction);

                        return response.status(200).json({ business: updateResult.affected });
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

    public async rejectBusiness(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.rejectBusiness(request.body.business, transaction);

                        return response.status(200).json({ business: updateResult.affected });
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

    public async closeBusiness(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.closeBusiness(request.body.business, transaction);

                        return response.status(200).json({ business: updateResult.affected });
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

    public async amount(request: Request, response: Response): Promise<Response> {
        try {
            const businessService: BusinessService =
                new BusinessService();

            if (request.query.month) {
                const result: any =
                    await businessService.calculateTotalAmountBusinesses(String(request.query.month));

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}