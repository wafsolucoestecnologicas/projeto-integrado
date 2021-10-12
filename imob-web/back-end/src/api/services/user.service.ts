import { getRepository, Repository, DeleteResult } from 'typeorm';
import { UserModel } from '../models/user.model';

export class UserService {

    private repository: Repository<UserModel>;

    constructor() {
        this.repository = getRepository(UserModel);
    }

    public async index(): Promise<UserModel[]> {
        const userModel: UserModel[] =
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

        return userModel;
    }

    public async create(data: UserModel): Promise<UserModel> {
        const userModel: UserModel =
            this.repository.create({
                profile: data.profile,
                company: data.company,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password
            });

        const result: UserModel =
            await this.repository.save(userModel);

        return result;
    }

    public async read(id: number): Promise<UserModel | undefined> {
        const userModel: UserModel | undefined =
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

        return userModel;
    }

    public async update(id: number, data: UserModel): Promise<UserModel> {
        const userModel: UserModel =
            await this.repository.create({
                id: id,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                password: data.password
            });

        const result: UserModel =
            await this.repository.save(userModel);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
                id: id
            });

        return result;
    }

    public validateData(data: UserModel): boolean {
        let isValid: boolean = true;

        if (!data.name || !data.surname || !data.email || !data.password) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisteredByEmail(email: string): Promise<boolean> {
        const userModel: UserModel | undefined =
            await this.repository.findOne({
                select: ['email'],
                where: {
                    email: email
                }
            });

        const result: boolean = (userModel) ? true : false;

        return result;
    }

    public async alreadyRegisteredById(id: number): Promise<boolean> {
        const userModel: UserModel | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (userModel) ? true : false;

        return result;
    }

}