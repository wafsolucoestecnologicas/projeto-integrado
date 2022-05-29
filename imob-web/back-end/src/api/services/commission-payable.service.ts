import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { CommissionPayableEntity } from '../entities/commission-payable.entity'
import { Payload } from '../../../utils/interfaces/jwt.interfaces';
import moment from 'moment';

export class CommissionPayableService {

    private repository: Repository<CommissionPayableEntity>;

    constructor() {
        this.repository = getRepository(CommissionPayableEntity);
    }

    public async index(payload: Payload): Promise<CommissionPayableEntity[]> {
        const commissionPayableEntity: CommissionPayableEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'broker',
                    'property'
                ],
                where: {
                    company: payload.company.id
                }
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
            data.valueClosedDeals < 0 ||
            data.valuePropertyCaptured < 0) {
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

    public async calculateTotalValuePayable(month: string, payload: Payload): Promise<any> {
        const dateFrom: string = moment(month).startOf('month').format('YYYY-MM-DD');
        const dateTo: string = moment(month).endOf('month').format('YYYY-MM-DD');

        const query: any =
            await this.repository.query(`
                SELECT
                    SUM (commissions_payable.value_closed_deals) AS "totalValueClosedDeals",
                    SUM (commissions_payable.value_property_captured) AS "totalValuePropertyCaptured"
                FROM commission.commissions_payable AS commissions_payable
                WHERE (commissions_payable.date BETWEEN '${dateFrom}' AND '${dateTo}')
                AND (commissions_payable.company_id = ${payload.company.id})
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