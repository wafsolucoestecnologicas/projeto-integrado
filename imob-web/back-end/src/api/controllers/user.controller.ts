import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { UserEntity } from '../entities/user.entity';
import { CompanyEntity } from '../entities/company.entity';
import { ProfileEntity } from '../entities/profile.entity';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { SecretaryEntity } from '../entities/secretary.entity';
import { UserService } from '../services/user.service';
import { CompanyService } from '../services/company.service';
import { ProfileService } from '../services/profile.service';
import { AdministratorService } from '../services/administrator.service';
import { ManagerService } from '../services/manager.service';
import { AdvisorService } from '../services/advisor.service';
import { BrokerService } from '../services/broker.service';
import { SecretaryService } from '../services/secretary.service';
import { ProfileEnum } from '../models/profile.model';
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
        return await getManager().transaction(async (transaction: EntityManager) => {
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
                            } as CompanyEntity, transaction);

                        if (companyEntity) {
                            const profileService: ProfileService =
                                new ProfileService();

                            const profileEntity: ProfileEntity | undefined =
                                await profileService.read(Number(request.body.profile.id));

                            if (profileEntity) {
                                request.body.company = companyEntity;
                                request.body.profile = profileEntity;

                                switch (profileEntity.id) {
                                    case ProfileEnum.ADMINISTRATOR:
                                        const administratorService: AdministratorService =
                                            new AdministratorService();

                                        const administratorEntity: AdministratorEntity =
                                            await administratorService.create({
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                rg: '000000000',
                                                cpf: '00000000000',
                                                cellPhone: '00000000000'
                                            } as AdministratorEntity, transaction);

                                        request.body.administrator = administratorEntity;
                                        break;

                                    case ProfileEnum.MANAGER:
                                        const managerService: ManagerService =
                                            new ManagerService();

                                        const managerEntity: ManagerEntity =
                                            await managerService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                rg: '000000000',
                                                cpf: '00000000000',
                                                cellPhone: '00000000000'
                                            } as ManagerEntity, transaction);

                                        request.body.manager = managerEntity;
                                        break;

                                    case ProfileEnum.ADVISOR:
                                        const advisorService: AdvisorService =
                                            new AdvisorService();

                                        const advisorEntity: AdvisorEntity =
                                            await advisorService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                rg: '000000000',
                                                cpf: '00000000000',
                                                cellPhone: '00000000000'
                                            } as AdvisorEntity, transaction);

                                        request.body.advisor = advisorEntity;
                                        break;

                                    case ProfileEnum.BROKER:
                                        const brokerService: BrokerService =
                                            new BrokerService();

                                        const brokerEntity: BrokerEntity =
                                            await brokerService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                rg: '000000000',
                                                cpf: '00000000000',
                                                cellPhone: '00000000000'
                                            } as BrokerEntity, transaction);

                                        request.body.broker = brokerEntity;
                                        break;

                                    case ProfileEnum.SECRETARY:
                                        const secretaryService: SecretaryService =
                                            new SecretaryService();

                                        const secretaryEntity: SecretaryEntity =
                                            await secretaryService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                rg: '000000000',
                                                cpf: '00000000000',
                                                cellPhone: '00000000000'
                                            } as SecretaryEntity, transaction);

                                        request.body.secretary = secretaryEntity;
                                        break;
                                }

                                const userEntity: UserEntity =
                                    await userService.create(request.body, transaction);

                                if (userEntity) userEntity.password = '';

                                return response.status(201).json(userEntity);
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
        });
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
        return await getManager().transaction(async (transaction: EntityManager) => {
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
                                await userService.update(Number(request.params.id), request.body, transaction);

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
        });
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
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
                        const personId: number =
                            userEntity.administrator?.id ||
                            userEntity.manager?.id ||
                            userEntity.advisor?.id ||
                            userEntity.broker?.id ||
                            userEntity.secretary?.id ||
                            0;

                        const userDeleteResult: DeleteResult =
                            await userService.delete(Number(request.params.id), transaction);

                        let personDeleteResult: DeleteResult = new DeleteResult();

                        switch (userEntity.profile.id) {
                            case ProfileEnum.ADMINISTRATOR:
                                const administratorService: AdministratorService =
                                    new AdministratorService();

                                personDeleteResult =
                                    await administratorService.delete(personId, transaction);
                                break;

                            case ProfileEnum.MANAGER:
                                const managerService: ManagerService =
                                    new ManagerService();

                                personDeleteResult =
                                    await managerService.delete(personId, transaction);
                                break;

                            case ProfileEnum.ADVISOR:
                                const advisorService: AdvisorService =
                                    new AdvisorService();

                                personDeleteResult =
                                    await advisorService.delete(personId, transaction);
                                break;

                            case ProfileEnum.BROKER:
                                const brokerService: BrokerService =
                                    new BrokerService();

                                personDeleteResult =
                                    await brokerService.delete(personId, transaction);
                                break;

                            case ProfileEnum.SECRETARY:
                                const secretaryService: SecretaryService =
                                    new SecretaryService();

                                personDeleteResult =
                                    await secretaryService.delete(personId, transaction);
                                break;
                        }

                        const companyDeleteResult: DeleteResult =
                            await companyService.delete(companyId, transaction);

                        return response.status(200).json({
                            user: userDeleteResult.affected,
                            person: personDeleteResult.affected,
                            company: companyDeleteResult.affected
                        });
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

}