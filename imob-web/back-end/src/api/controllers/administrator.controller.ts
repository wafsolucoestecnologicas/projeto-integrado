import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { AdministratorEntity } from '../entities/administrator.entity';
import { AdministratorService } from '../services/administrator.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class AdministratorController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const administratorService: AdministratorService =
                new AdministratorService();

            const administratorEntity: AdministratorEntity[] =
                await administratorService.index();

            return response.status(200).json(administratorEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const administratorService: AdministratorService =
                    new AdministratorService();
    
                const result: boolean =
                    administratorService.validateData(request.body);
    
                if (result) {
                    const result: boolean =
                        await administratorService.alreadyRegisterByCPF(request.body.cpf);
    
                    if (!result) {
                        const administratorEntity: AdministratorEntity =
                            await administratorService.create(request.body, transaction);
    
                        return response.status(201).json(administratorEntity);
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
            const administratorService: AdministratorService =
                new AdministratorService();

            if (Number(request.params.id)) {
                const administratorEntity: AdministratorEntity | undefined =
                    await administratorService.read(Number(request.params.id));

                return response.status(200).json(administratorEntity);
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
                const administratorService: AdministratorService =
                    new AdministratorService();
    
                if (Number(request.params.id)) {
                    const result: boolean =
                        await administratorService.alreadyRegisterById(Number(request.params.id));
    
                    if (result) {
                        const result: boolean =
                            administratorService.validateData(request.body);
    
                        if (result) {
                            const administratorEntity: AdministratorEntity =
                                await administratorService.update(Number(request.params.id), request.body, transaction);
    
                            return response.status(200).json(administratorEntity);
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
                const administratorService: AdministratorService =
                    new AdministratorService();
    
                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await administratorService.delete(Number(request.params.id), transaction);
    
                    return response.status(200).json({ manager: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

}