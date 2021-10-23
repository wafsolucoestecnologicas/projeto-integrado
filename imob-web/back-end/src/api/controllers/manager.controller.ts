import { DeleteResult } from 'typeorm';
import { Request, Response } from 'express';
import { ManagerEntity } from '../entities/manager.entity';
import { ManagerService } from '../services/manager.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class ManagerController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const managerService: ManagerService =
                new ManagerService();

            const managerEntity: ManagerEntity[] =
                await managerService.index();

            return response.status(200).json(managerEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const managerService: ManagerService =
                new ManagerService();

            const result: boolean =
                managerService.validateData(request.body);

            if (result) {
                const result: boolean =
                    await managerService.alreadyRegisterByCpf(request.body.cpf);

                if (!result) {
                    const managerEntity: ManagerEntity =
                        await managerService.create(request.body);

                    return response.status(201).json(managerEntity);
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
            const managerService: ManagerService =
                new ManagerService();

            if (Number(request.params.id)) {
                const managerEntity: ManagerEntity | undefined =
                    await managerService.read(Number(request.params.id));

                return response.status(200).json(managerEntity);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const managerService: ManagerService =
                new ManagerService();

            if (Number(request.params.id)) {
                const result: boolean =
                    await managerService.alreadyRegisterById(Number(request.params.id));

                if (result) {
                    const result: boolean =
                        managerService.validateData(request.body);

                    if (result) {
                        const managerEntity: ManagerEntity =
                            await managerService.update(Number(request.params.id), request.body);

                        return response.status(200).json(managerEntity);
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
            const managerService: ManagerService =
                new ManagerService();

            if (Number(request.params.id)) {
                const deleteResult: DeleteResult =
                    await managerService.delete(Number(request.params.id));

                return response.status(200).json({ manager: deleteResult.affected });
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}