import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { CommissionReceivebleEntity } from '../entities/commission-receiveble.entity'
import moment from 'moment';

export class CommissionReceivebleService {

    private repository: Repository<CommissionReceivebleEntity>;

    constructor() {
        this.repository = getRepository(CommissionReceivebleEntity);
    }

    public async index(): Promise<CommissionReceivebleEntity[]> {
        const commissionReceivebleEntity: CommissionReceivebleEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'property'
                ]
            });

        return commissionReceivebleEntity;
    }

    public async create(data: CommissionReceivebleEntity, transaction: EntityManager): Promise<CommissionReceivebleEntity> {
        const commissionReceivebleEntity: CommissionReceivebleEntity =
            this.repository.create({
                company: data.company,
                property: data.property,
                date: data.date,
                value: data.value
            });

        const result: CommissionReceivebleEntity =
            await transaction.save(commissionReceivebleEntity);

        return result;
    }

    public async read(id: number): Promise<CommissionReceivebleEntity | undefined> {
        const commissionReceivebleEntity: CommissionReceivebleEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'company',
                    'property'
                ]
            });

        return commissionReceivebleEntity;
    }

    public async update(id: number, data: CommissionReceivebleEntity, transaction: EntityManager): Promise<CommissionReceivebleEntity> {
        const commissionReceivebleEntity: CommissionReceivebleEntity =
            this.repository.create({
                id: id,
                date: data.date,
                value: data.value
            });

        const result: CommissionReceivebleEntity =
            await transaction.save(commissionReceivebleEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CommissionReceivebleEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: CommissionReceivebleEntity): boolean {
        let isValid: boolean = true;

        if (!data.date ||
            !data.value) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const commissionReceivebleEntity: CommissionReceivebleEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (commissionReceivebleEntity) ? true : false;

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