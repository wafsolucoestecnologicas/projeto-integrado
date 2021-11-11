import { Repository, getRepository, DeleteResult, EntityManager } from 'typeorm';
import { StateEntity } from '../entities/state.entity';

export class StateService {

    private repository: Repository<StateEntity>;

    constructor() {
        this.repository = getRepository(StateEntity);
    }

    public async index(): Promise<StateEntity[]> {
        const stateEntity: StateEntity[] =
            await this.repository.find();

        return stateEntity;
    }

    public async create(data: StateEntity, transaction: EntityManager): Promise<StateEntity> {
        const stateEntity: StateEntity =
            this.repository.create({
                state: data.state,
                UF: data.UF
            });

        const result: StateEntity =
            await transaction.save(stateEntity);

        return result;
    }

    public async read(id: number): Promise<StateEntity | undefined> {
        const stateEntity: StateEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return stateEntity;
    }

    public async update(id: number, data: StateEntity, transaction: EntityManager): Promise<StateEntity> {
        const stateEntity: StateEntity =
            this.repository.create({
                id: id,
                state: data.state,
                UF: data.UF
            });

        const result: StateEntity =
            await transaction.save(stateEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(StateEntity, {
                id: id
            });

        return result;
    }

    public async findByUF(UF: string): Promise<StateEntity | undefined> {
        const stateEntity: StateEntity | undefined =
            await this.repository.findOne({
                where: {
                    UF: UF.toUpperCase()
                }
            });

        return stateEntity;
    }

}