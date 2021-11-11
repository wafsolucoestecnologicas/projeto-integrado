import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { CityEntity } from '../entities/city.entity';
import { CityService } from '../services/city.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class CityController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const cityService: CityService =
                new CityService();

            const cityEntity: CityEntity[] =
                await cityService.index();

            return response.status(200).json(cityEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const cityService: CityService =
                    new CityService();

                const result: boolean =
                    cityService.validateData(request.body);

                if (result) {
                    const cityEntity: CityEntity =
                        await cityService.create(request.body, transaction);

                    return response.status(200).json(cityEntity);
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
            const cityService: CityService =
                new CityService();

            if (Number(request.params.id)) {
                const cityEntity: CityEntity | undefined =
                    await cityService.read(Number(request.params.id));

                return response.status(200).json(cityEntity);
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
                const cityService: CityService =
                    new CityService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await cityService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            cityService.validateData(request.body);

                        if (result) {
                            const cityEntity: CityEntity =
                                await cityService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(cityEntity);
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
                const cityService: CityService =
                    new CityService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await cityService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ city: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

}