import { DeleteResult } from 'typeorm';
import { Request, Response } from 'express';
import { OwnerEntity } from '../entities/owner.entity';
import { OwnerService } from '../services/owner.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class OwnerController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const ownerService: OwnerService =
                new OwnerService();

            const ownerEntity: OwnerEntity[] =
                await ownerService.index();

            return response.status(200).json(ownerEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const ownerService: OwnerService =
                new OwnerService();

            const result: boolean =
                ownerService.validateData(request.body);

            if (result) {
                const result: boolean =
                    await ownerService.alreadyRegisterByCpf(request.body.cpf);

                if (!result) {
                    const ownerEntity: OwnerEntity =
                        await ownerService.create(request.body);

                    return response.status(201).json(ownerEntity);
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[3]}` });
                }
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async read(request: Request, response: Response): Promise<Response> {
        try {
            const ownerService: OwnerService =
                new OwnerService();

            if (Number(request.params.id)) {
                const ownerEntity: OwnerEntity | undefined =
                    await ownerService.read(Number(request.params.id));

                return response.status(200).json(ownerEntity);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const ownerService: OwnerService =
                new OwnerService();

            if (Number(request.params.id)) {
                const result: boolean =
                    await ownerService.alreadyRegisterById(Number(request.params.id));

                if (result) {
                    const result: boolean =
                        ownerService.validateData(request.body);

                    if (result) {
                        const ownerEntity: OwnerEntity =
                            await ownerService.update(Number(request.params.id), request.body);

                        return response.status(200).json(ownerEntity);
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
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const ownerService: OwnerService =
                new OwnerService();

            if (Number(request.params.id)) {
                const deleteResult: DeleteResult =
                    await ownerService.delete(Number(request.params.id));

                return response.status(200).json({ manager: deleteResult.affected });
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}