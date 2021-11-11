import { Repository, getRepository, DeleteResult, EntityManager } from 'typeorm';
import { CityEntity } from '../entities/city.entity';

export class CityService {

    private repository: Repository<CityEntity>;

    constructor() {
        this.repository = getRepository(CityEntity);
    }

    public async index(): Promise<CityEntity[]> {
        const cityEntity: CityEntity[] =
            await this.repository.find({
                relations: [
                    'state'
                ]
            });

        return cityEntity;
    }

    public async create(data: CityEntity, transaction: EntityManager): Promise<CityEntity> {
        const cityEntity: CityEntity =
            this.repository.create({
                state: data.state,
                city: data.city.toLowerCase()
            });

        const result: CityEntity =
            await transaction.save(cityEntity);

        return result;
    }

    public async read(id: number): Promise<CityEntity | undefined> {
        const cityEntity: CityEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'state'
                ]
            });

        return cityEntity;
    }

    public async update(id: number, data: CityEntity, transaction: EntityManager): Promise<CityEntity> {
        const cityEntity: CityEntity =
            this.repository.create({
                id: id,
                city: data.city.toLowerCase()
            });

        const result: CityEntity =
            await transaction.save(cityEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CityEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: CityEntity): boolean {
        let isValid: boolean = true;

        if (!data.city) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const cityEntity: CityEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (cityEntity) ? true : false;

        return result;
    }

}