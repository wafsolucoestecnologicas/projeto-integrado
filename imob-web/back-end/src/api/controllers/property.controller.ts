import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { PropertyEntity } from '../entities/property.entity';
import { PropertyService } from '../services/property.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class PropertyController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const propertyService: PropertyService =
                new PropertyService();

            const propertyEntity: PropertyEntity[] =
                await propertyService.index();

            return response.status(200).json(propertyEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const propertyService: PropertyService =
                    new PropertyService();

                const result: boolean =
                    propertyService.validateData(request.body);

                if (result) {
                    const propertyEntity: PropertyEntity =
                        await propertyService.create(request.body, transaction);

                    return response.status(201).json(propertyEntity);
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
            const propertyService: PropertyService =
                new PropertyService();

            if (Number(request.params.id)) {
                const propertyEntity: PropertyEntity | undefined =
                    await propertyService.read(Number(request.params.id));

                return response.status(200).json(propertyEntity);
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
                const propertyService: PropertyService =
                    new PropertyService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await propertyService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            propertyService.validateData(request.body);

                        if (result) {
                            const propertyEntity: PropertyEntity =
                                await propertyService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(propertyEntity);
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
                const propertyService: PropertyService =
                    new PropertyService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await propertyService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ property: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

}