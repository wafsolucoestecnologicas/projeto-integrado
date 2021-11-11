import { Request, Response } from 'express';
import { StateEntity } from '../entities/state.entity';
import { StateService } from '../services/state.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class StateController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const stateService: StateService =
                new StateService();

            const stateEntity: StateEntity[] =
                await stateService.index();

            return response.status(200).json(stateEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    /* public async create(request: Request, response: Response): Promise<Response> { } */

    public async read(request: Request, response: Response): Promise<Response> {
        try {
            const stateService: StateService =
                new StateService();

            if (Number(request.params.id)) {
                const stateEntity: StateEntity | undefined =
                    await stateService.read(Number(request.params.id));

                return response.status(200).json(stateEntity);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    /* public async update(request: Request, response: Response): Promise<Response> { } */

    /* public async delete(request: Request, response: Response): Promise<Response> { } */

}