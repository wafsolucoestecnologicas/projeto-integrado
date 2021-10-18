import { getRepository, Repository, DeleteResult } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
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
                    'createdAt',
                    'updatedAt'
                ],
                relations: [
                    'company',
                    'profile'
                ]
            });

        return userEntity;
    }

    public async create(data: UserEntity): Promise<UserEntity> {
        const userEntity: UserEntity =
            this.repository.create({
                profile: data.profile,
                company: data.company,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password
            });

        const result: UserEntity =
            await this.repository.save(userEntity);

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
                    'createdAt',
                    'updatedAt'
                ],
                relations: [
                    'company',
                    'profile'
                ],
                where: {
                    id: id
                }
            });

        return userEntity;
    }

    public async update(id: number, data: UserEntity): Promise<UserEntity> {
        const userEntity: UserEntity =
            this.repository.create({
                id: id,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password
            });

        const result: UserEntity =
            await this.repository.save(userEntity);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
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

        if (!data.name || !data.surname || !data.email || !data.password) {
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