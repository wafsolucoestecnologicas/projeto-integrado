import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { ProfileEnum } from '../models/profile.model';
import bcrypt from 'bcryptjs';

export class UserService {

    private repository: Repository<UserEntity>;

    constructor() {
        this.repository = getRepository(UserEntity);
    }

    public async index(): Promise<UserEntity[]> {
        const userEntity: UserEntity[] =
            await this.repository.find({
                select: [
                    'id',
                    'name',
                    'surname',
                    'email',
                    'isAdministrator',
                    'isManager',
                    'isAdvisor',
                    'isBroker',
                    'isSecretary',
                    'createdAt',
                    'updatedAt'
                ],
                relations: [
                    'company',
                    'profile',
                    'administrator',
                    'manager',
                    'advisor',
                    'broker',
                    'secretary'
                ]
            });

        return userEntity;
    }

    public async create(data: UserEntity, transaction: EntityManager): Promise<UserEntity> {
        const userEntity: UserEntity =
            this.repository.create({
                profile: data.profile,
                company: data.company,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password,
                isAdministrator: false,
                isManager: false,
                isAdvisor: false,
                isBroker: false,
                isSecretary: false
            });

        switch (data.profile.id) {
            case ProfileEnum.ADMINISTRATOR:
                userEntity.administrator = data.administrator;
                userEntity.isAdministrator = true;
                break;

            case ProfileEnum.MANAGER:
                userEntity.manager = data.manager;
                userEntity.isManager = true;
                break;

            case ProfileEnum.ADVISOR:
                userEntity.advisor = data.advisor;
                userEntity.isAdvisor = true;
                break;

            case ProfileEnum.BROKER:
                userEntity.broker = data.broker;
                userEntity.isBroker = true;
                break;

            case ProfileEnum.SECRETARY:
                userEntity.secretary = data.secretary;
                userEntity.isSecretary = true;
                break;
        }

        const result: UserEntity =
            await transaction.save(userEntity);

        return result;
    }

    public async read(id: number): Promise<UserEntity | undefined> {
        const userEntity: UserEntity | undefined =
            await this.repository.findOne({
                select: [
                    'id',
                    'name',
                    'surname',
                    'email',
                    'isAdministrator',
                    'isManager',
                    'isAdvisor',
                    'isBroker',
                    'isSecretary',
                    'createdAt',
                    'updatedAt'
                ],
                relations: [
                    'company',
                    'profile',
                    'administrator',
                    'manager',
                    'advisor',
                    'broker',
                    'secretary'
                ],
                where: {
                    id: id
                }
            });

        return userEntity;
    }

    public async update(id: number, data: UserEntity, transaction: EntityManager): Promise<UserEntity> {
        const userEntity: UserEntity =
            this.repository.create({
                id: id,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password
            });

        const result: UserEntity =
            await transaction.save(userEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(UserEntity, {
                id: id
            });

        return result;
    }

    public async findByEmail(email: string): Promise<UserEntity | undefined> {
        const userEntity: UserEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'profile'
                ],
                where: {
                    email: email
                }
            });

        return userEntity;
    }

    public async validatePassword(data: UserEntity, password: string): Promise<boolean> {
        const isValid: boolean =
            await bcrypt.compare(password, data.password);

        return isValid;
    }

    public validateData(data: UserEntity): boolean {
        let isValid: boolean = true;

        if (!data.name ||
            !data.surname ||
            !data.email ||
            !data.password ||
            !data.profile.id) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisteredByEmail(email: string): Promise<boolean> {
        const userEntity: UserEntity | undefined =
            await this.repository.findOne({
                select: ['email'],
                where: {
                    email: email
                }
            });

        const result: boolean = (userEntity) ? true : false;

        return result;
    }

    public async alreadyRegisteredById(id: number): Promise<boolean> {
        const userEntity: UserEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (userEntity) ? true : false;

        return result;
    }

}