import { getRepository, Repository } from 'typeorm';
import { ProfileEntity } from '../entities/profile.entity';

export class ProfileService {

    private repository: Repository<ProfileEntity>;

    constructor() {
        this.repository = getRepository(ProfileEntity);
    }

    public async index(): Promise<ProfileEntity[]> {
        const profileEntity: ProfileEntity[] =
            await this.repository.find();

        return profileEntity;
    }

    /* public async create(): Promise<ProfileEntity> { } */

    public async read(id: number): Promise<ProfileEntity | undefined> {
        const profileEntity: ProfileEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return profileEntity;
    }

    /* public async udpate(): Promise<ProfileEntity> { } */

    /* public async delete(): Promise<boolean> { } */

}