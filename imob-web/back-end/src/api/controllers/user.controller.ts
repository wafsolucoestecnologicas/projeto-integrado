import { DeleteResult } from 'typeorm';
import { Request, Response } from 'express';
import { CompanyModel } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { ProfileModel } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { statusMessages, returnMessages } from '../../../utils/utils';

export class UserController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const userService: UserService =
                new UserService();

            const userModel: UserModel[] =
                await userService.index();

            return response.status(200).json(userModel);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const userService: UserService =
                new UserService();

            const result: boolean =
                userService.validateData(request.body);

            if (result) {
                const result: boolean =
                    await userService.alreadyRegisteredByEmail(request.body.email);

                if (!result) {
                    const companyService: CompanyService =
                        new CompanyService();

                    const companyModel: CompanyModel =
                        await companyService.create({
                            cnpj: '00000000000000',
                            corporateName: 'Empresa Cadastrada Automaticamente',
                            stateRegistration: '0000000000'
                        } as CompanyModel);

                    if (companyModel) {
                        const profileService: ProfileService =
                            new ProfileService();

                        const profileModel: ProfileModel | undefined =
                            await profileService.read(2);

                        if (profileModel && profileModel.userType === 'manager') {
                            request.body.company = companyModel;
                            request.body.profile = profileModel;

                            const userModel: UserModel =
                                await userService.create(request.body);

                            if (userModel) userModel.password = '';

                            return response.status(200).json(userModel);
                        } else {
                            return response.status(500).json({ message: `${returnMessages[6]}` });
                        }
                    } else {
                        return response.status(500).json({ message: `${returnMessages[5]}` });
                    }
                } else {
                    return response.status(409).json({ message: `${statusMessages[409]} ${returnMessages[4]}` });
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
            const userService: UserService =
                new UserService();

            if (Number(request.params.id)) {
                const userModel: UserModel | undefined =
                    await userService.read(Number(request.params.id));

                if (userModel) userModel.password = '';

                return response.status(200).json(userModel);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const userService: UserService =
                new UserService();

            if (Number(request.params.id)) {
                const result: boolean =
                    await userService.alreadyRegisteredById(Number(request.params.id));

                if (result) {
                    const result: boolean =
                        userService.validateData(request.body);

                    if (result) {
                        const userModel: UserModel =
                            await userService.update(Number(request.params.id), request.body);

                        if (userModel) userModel.password = '';

                        return response.status(200).json(userModel);
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
            const userService: UserService =
                new UserService();

            if (Number(request.params.id)) {
                const userModel: UserModel | undefined =
                    await userService.read(Number(request.params.id));

                if (userModel) {
                    const companyService: CompanyService =
                        new CompanyService();

                    const companyId: number = userModel.company.id;

                    const userDeleteResult: DeleteResult =
                        await userService.delete(Number(request.params.id));

                    const companyDeleteResult: DeleteResult =
                        await companyService.delete(companyId);

                    return response.status(200).json({ user: userDeleteResult.affected, company: companyDeleteResult.affected });
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

}