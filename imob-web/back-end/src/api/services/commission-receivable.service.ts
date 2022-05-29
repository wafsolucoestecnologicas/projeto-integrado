import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { CommissionReceivableEntity } from '../entities/commission-receivable.entity'
import { Payload } from '../../../utils/interfaces/jwt.interfaces';
import moment from 'moment';

export class CommissionReceivableService {

    private repository: Repository<CommissionReceivableEntity>;

    constructor() {
        this.repository = getRepository(CommissionReceivableEntity);
    }

    public async sale(CNPJ: string): Promise<CommissionReceivableEntity[]> {
        const commissionReceivableEntity: CommissionReceivableEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'property'
                ],
                where: {
                    company: {
                        CNPJ: CNPJ
                    }
                }
            });

        return commissionReceivableEntity;
    }

    public async index(payalod: Payload): Promise<CommissionReceivableEntity[]> {
        const commissionReceivableEntity: CommissionReceivableEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'property'
                ],
                where: {
                    company: payalod.company.id
                }
            });

        return commissionReceivableEntity;
    }

    public async create(data: CommissionReceivableEntity, transaction: EntityManager): Promise<CommissionReceivableEntity> {
        const commissionReceivableEntity: CommissionReceivableEntity =
            this.repository.create({
                company: data.company,
                property: data.property,
                date: data.date,
                value: data.value
            });

        const result: CommissionReceivableEntity =
            await transaction.save(commissionReceivableEntity);

        return result;
    }

    public async read(id: number): Promise<CommissionReceivableEntity | undefined> {
        const commissionReceivableEntity: CommissionReceivableEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'company',
                    'property'
                ]
            });

        return commissionReceivableEntity;
    }

    public async update(id: number, data: CommissionReceivableEntity, transaction: EntityManager): Promise<CommissionReceivableEntity> {
        const commissionReceivableEntity: CommissionReceivableEntity =
            this.repository.create({
                id: id,
                date: data.date,
                value: data.value
            });

        const result: CommissionReceivableEntity =
            await transaction.save(commissionReceivableEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CommissionReceivableEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: CommissionReceivableEntity): boolean {
        let isValid: boolean = true;

        if (!data.date ||
            !data.value) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const commissionReceivableEntity: CommissionReceivableEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (commissionReceivableEntity) ? true : false;

        return result;
    }

    public async calculateTotalValueReceivable(month: string, payload: Payload): Promise<any> {
        const dateFrom: string = moment(month).startOf('month').format('YYYY-MM-DD');
        const dateTo: string = moment(month).endOf('month').format('YYYY-MM-DD');

        const query: any =
            await this.repository.query(`
                    SELECT
                        SUM (commissions_receivable.value) AS "totalValueReceivable"
                    FROM commission.commissions_receivable AS commissions_receivable
                    WHERE (commissions_receivable.date BETWEEN '${dateFrom}' AND '${dateTo}')
                    AND (commissions_receivable.company_id = ${payload.company.id})
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