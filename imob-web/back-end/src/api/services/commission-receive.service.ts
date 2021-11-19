import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { CommissionReceiveEntity } from '../entities/commission-receive.entity'
import moment from 'moment';

export class CommissionReceiveService {

    private repository: Repository<CommissionReceiveEntity>;

    constructor() {
        this.repository = getRepository(CommissionReceiveEntity);
    }

    public async index(): Promise<CommissionReceiveEntity[]> {
        const commissionReceiveEntity: CommissionReceiveEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'property'
                ]
            });

        return commissionReceiveEntity;
    }

    public async create(data: CommissionReceiveEntity, transaction: EntityManager): Promise<CommissionReceiveEntity> {
        const commissionReceiveEntity: CommissionReceiveEntity =
            this.repository.create({
                company: data.company,
                property: data.property,
                date: data.date,
                value: data.value
            });

        const result: CommissionReceiveEntity =
            await transaction.save(commissionReceiveEntity);

        return result;
    }

    public async read(id: number): Promise<CommissionReceiveEntity | undefined> {
        const commissionReceiveEntity: CommissionReceiveEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'company',
                    'property'
                ]
            });

        return commissionReceiveEntity;
    }

    public async update(id: number, data: CommissionReceiveEntity, transaction: EntityManager): Promise<CommissionReceiveEntity> {
        const commissionReceiveEntity: CommissionReceiveEntity =
            this.repository.create({
                id: id,
                date: data.date,
                value: data.value
            });

        const result: CommissionReceiveEntity =
            await transaction.save(commissionReceiveEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CommissionReceiveEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: CommissionReceiveEntity): boolean {
        let isValid: boolean = true;

        if (!data.date ||
            !data.value) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const commissionReceiveEntity: CommissionReceiveEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (commissionReceiveEntity) ? true : false;

        return result;
    }

    public async calculateTotalValueReceiveble(month: string): Promise<any> {
        const dateFrom: string = moment(month).startOf('month').format('YYYY-MM-DD');
        const dateTo: string = moment(month).endOf('month').format('YYYY-MM-DD');

        const query: any =
            await this.repository.query(`
                    SELECT
                        SUM (commissions_receive.value) AS "totalValueReceiveble"
                    FROM commission.commissions_receive AS commissions_receive
                    WHERE (commissions_receive.date BETWEEN '${dateFrom}' AND '${dateTo}')
                `);

        const result: any =
            query.map((object: any) => {
                for (const key in object) {
                    if (typeof object[key] === 'string') object[key] = Number(object[key]);
                }

                return object;
            });

        return result[0];
    }

}