import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { CommissionPayableEntity } from '../entities/commission-payable.entity'

export class CommissionPayableService {

    private repository: Repository<CommissionPayableEntity>;

    constructor() {
        this.repository = getRepository(CommissionPayableEntity);
    }

    public async index(): Promise<CommissionPayableEntity[]> {
        const commissionPayableEntity: CommissionPayableEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'broker',
                    'property'
                ]
            });

        return commissionPayableEntity;
    }

    public async create(data: CommissionPayableEntity, transaction: EntityManager): Promise<CommissionPayableEntity> {
        const commissionPayableEntity: CommissionPayableEntity =
            this.repository.create({
                company: data.company,
                broker: data.broker,
                property: data.property,
                date: data.date,
                valueClosedDeals: data.valueClosedDeals,
                valuePropertyCaptured: data.valuePropertyCaptured
            });

        const result: CommissionPayableEntity =
            await transaction.save(commissionPayableEntity);

        return result;
    }

    public async read(id: number): Promise<CommissionPayableEntity | undefined> {
        const commissionPayableEntity: CommissionPayableEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'company',
                    'broker',
                    'property'
                ]
            });

        return commissionPayableEntity;
    }

    public async update(id: number, data: CommissionPayableEntity, transaction: EntityManager): Promise<CommissionPayableEntity> {
        const commissionPayableEntity: CommissionPayableEntity =
            this.repository.create({
                id: id,
                date: data.date,
                valueClosedDeals: data.valueClosedDeals,
                valuePropertyCaptured: data.valuePropertyCaptured
            });

        const result: CommissionPayableEntity =
            await transaction.save(commissionPayableEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CommissionPayableEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: CommissionPayableEntity): boolean {
        let isValid: boolean = true;

        if (!data.date ||
            !data.valueClosedDeals ||
            !data.valuePropertyCaptured) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const commissionPayableEntity: CommissionPayableEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (commissionPayableEntity) ? true : false;

        return result;
    }

}