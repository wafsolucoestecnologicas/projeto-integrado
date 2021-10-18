import { DeleteResult } from 'typeorm';
import { Request, Response } from 'express';
import { UserEntity } from '../entities/user.entity';
import { CompanyEntity } from '../entities/company.entity';
import { ProfileEntity } from '../entities/profile.entity';
import { UserService } from '../services/user.service';
import { CompanyService } from '../services/company.service';
import { ProfileService } from '../services/profile.service';
import { statusMessages, returnMessages } from '../../../utils/utils';

export class UserController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const userService: UserService =
                new UserService();

            const userEntity: UserEntity[] =
                await userService.index();

            return response.status(200).json(userEntity);
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

                    const companyEntity: CompanyEntity =
                        await companyService.create({
                            cnpj: '00000000000000',
                            corporateName: 'Empresa Cadastrada Automaticamente',
                            stateRegistration: '0000000000',
                            percentageCommissionReceived: 0,
                            percentageCommissionPayable: 0
                        } as CompanyEntity);

                    if (companyEntity) {
                        const profileService: ProfileService =
                            new ProfileService();

                        const profileEntity: ProfileEntity | undefined =
                            await profileService.read(2);

                        if (profileEntity && profileEntity.userType === 'manager') {
                            request.body.company = companyEntity;
                            request.body.profile = profileEntity;

                            const userEntity: UserEntity =
                                await userService.create(request.body);

                            if (userEntity) userEntity.password = '';

                            return response.status(200).json(userEntity);
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
                const userEntity: UserEntity | undefined =
                    await userService.read(Number(request.params.id));

                if (userEntity) userEntity.password = '';

                return response.status(200).json(userEntity);
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
                        const userEntity: UserEntity =
                            await userService.update(Number(request.params.id), request.body);

                        if (userEntity) userEntity.password = '';

                        return response.status(200).json(userEntity);
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
                const userEntity: UserEntity | undefined =
                    await userService.read(Number(request.params.id));

                if (userEntity) {
                    const companyService: CompanyService =
                        new CompanyService();

                    const companyId: number = userEntity.company.id;

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