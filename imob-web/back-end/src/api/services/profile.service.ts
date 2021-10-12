import { getRepository, Repository } from 'typeorm';
import { ProfileModel } from '../models/profile.model';

export class ProfileService {

    private repository: Repository<ProfileModel>;

    constructor() {
        this.repository = getRepository(ProfileModel);
    }

    public async index(): Promise<ProfileModel[]> {
        const profileModel: ProfileModel[] =
            await this.repository.find();

        return profileModel;
    }

    /* public async create(): Promise<ProfileModel> { } */

    public async read(id: number): Promise<ProfileModel | undefined> {
        const profileModel: ProfileModel | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return profileModel;
    }

    /* public async udpate(): Promise<ProfileModel> { } */

    /* public async delete(): Promise<boolean> { } */

}