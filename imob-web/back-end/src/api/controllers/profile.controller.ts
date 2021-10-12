import { Request, Response } from 'express';
import { ProfileModel } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class ProfileController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const profileService: ProfileService =
                new ProfileService();

            const profileModel: ProfileModel[] =
                await profileService.index();

            return response.status(200).json(profileModel);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    /* public async create(request: Request, response: Response): Promise<Response> {
        try {
            return response.status(200).json();
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    } */

    public async read(request: Request, response: Response): Promise<Response> {
        try {
            const profileService: ProfileService =
                new ProfileService();

            if (Number(request.params.id)) {
                const profileModel: ProfileModel | undefined =
                    await profileService.read(Number(request.params.id));

                return response.status(200).json(profileModel);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    /* public async update(request: Request, response: Response): Promise<Response> {
        try {
            return response.status(200).json();
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    } */

    /* public async delete(request: Request, response: Response): Promise<Response> {
        try {
            return response.status(200).json();
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    } */

}