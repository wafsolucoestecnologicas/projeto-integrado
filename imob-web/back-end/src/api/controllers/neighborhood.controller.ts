import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { NeighborhoodEntity } from '../entities/neighborhood.entity';
import { NeighborhoodService } from '../services/neighborhood.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class NeighborhoodController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const neighborhoodService: NeighborhoodService =
                new NeighborhoodService();

            const neighborhoodEntity: NeighborhoodEntity[] =
                await neighborhoodService.index();

            return response.status(200).json(neighborhoodEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const neighborhoodService: NeighborhoodService =
                    new NeighborhoodService();

                const result: boolean =
                    neighborhoodService.validateData(request.body);

                if (result) {
                    const neighborhoodEntity: NeighborhoodEntity =
                        await neighborhoodService.create(request.body, transaction);

                    return response.status(200).json(neighborhoodEntity);
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
            const neighborhoodService: NeighborhoodService =
                new NeighborhoodService();

            if (Number(request.params.id)) {
                const neighborhoodEntity: NeighborhoodEntity | undefined =
                    await neighborhoodService.read(Number(request.params.id));

                return response.status(200).json(neighborhoodEntity);
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
                const neighborhoodService: NeighborhoodService =
                    new NeighborhoodService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await neighborhoodService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            neighborhoodService.validateData(request.body);

                        if (result) {
                            const neighborhoodEntity: NeighborhoodEntity =
                                await neighborhoodService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(neighborhoodEntity);
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
                const neighborhoodService: NeighborhoodService =
                    new NeighborhoodService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await neighborhoodService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ neighborhood: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

}