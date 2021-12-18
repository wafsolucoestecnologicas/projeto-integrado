import { Repository, getRepository, DeleteResult, EntityManager } from 'typeorm';
import { NeighborhoodEntity } from '../entities/neighborhood.entity';

export class NeighborhoodService {

    private repository: Repository<NeighborhoodEntity>;

    constructor() {
        this.repository = getRepository(NeighborhoodEntity);
    }

    public async index(): Promise<NeighborhoodEntity[]> {
        const neighborhoodEntity: NeighborhoodEntity[] =
            await this.repository.find({
                relations: [
                    'city'
                ]
            });

        return neighborhoodEntity;
    }

    public async create(data: NeighborhoodEntity, transaction: EntityManager): Promise<NeighborhoodEntity> {
        const neighborhoodEntity: NeighborhoodEntity =
            this.repository.create({
                city: data.city,
                neighborhood: data.neighborhood.toLowerCase()
            });

        const result: NeighborhoodEntity =
            await transaction.save(neighborhoodEntity);

        return result;
    }

    public async read(id: number): Promise<NeighborhoodEntity | undefined> {
        const neighborhoodEntity: NeighborhoodEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'city'
                ]
            });

        return neighborhoodEntity;
    }

    public async update(id: number, data: NeighborhoodEntity, transaction: EntityManager): Promise<NeighborhoodEntity> {
        const neighborhoodEntity: NeighborhoodEntity =
            this.repository.create({
                id: id,
                city: data.city,
                neighborhood: data.neighborhood.toLowerCase()
            });

        const result: NeighborhoodEntity =
            await transaction.save(neighborhoodEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(NeighborhoodEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: NeighborhoodEntity): boolean {
        let isValid: boolean = true;

        if (!data.neighborhood) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const neighborhoodEntity: NeighborhoodEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (neighborhoodEntity) ? true : false;

        return result;
    }

}