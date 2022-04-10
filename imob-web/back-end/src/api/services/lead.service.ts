import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { LeadEntity } from '../entities/lead.entity'
import { Payload } from '../../../utils/interfaces/jwt.interfaces';
import moment from 'moment';

export class LeadService {

    private repository: Repository<LeadEntity>;

    constructor() {
        this.repository = getRepository(LeadEntity);
    }

    public async index(payload: Payload): Promise<LeadEntity[]> {
        const leadEntity: LeadEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ],
                where: {
                    company: payload.company.id
                }
            });

        return leadEntity;
    }

    public async create(data: LeadEntity, transaction: EntityManager): Promise<LeadEntity> {
        const leadEntity: LeadEntity =
            this.repository.create({
                company: data.company,
                administrator: data?.administrator,
                manager: data?.manager,
                secretary: data?.secretary,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                source: data.source,
                landline: data.landline,
                cellPhone: data.cellPhone,
                comments: data.comments ? data.comments.toLowerCase() : '',
                createdByAdministrator: data.createdByAdministrator,
                createdByManager: data.createdByManager,
                createdBySecretary: data.createdBySecretary,
                registered: data.registered
            });

        const result: LeadEntity =
            await transaction.save(leadEntity);

        return result;
    }

    public async read(id: number): Promise<LeadEntity | undefined> {
        const leadEntity: LeadEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'company',
                    'manager',
                    'secretary'
                ]
            });

        return leadEntity;
    }

    public async update(id: number, data: LeadEntity, transaction: EntityManager): Promise<LeadEntity> {
        const leadEntity: LeadEntity =
            this.repository.create({
                company: data.company,
                id: id,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                source: data.source,
                landline: data.landline,
                cellPhone: data.cellPhone,
                comments: data.comments ? data.comments.toLowerCase() : '',
                registered: data.registered
            });

        const result: LeadEntity =
            await transaction.save(leadEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(LeadEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: LeadEntity): boolean {
        let isValid: boolean = true;

        if (!data.name ||
            !data.surname ||
            !data.email ||
            !data.hasOwnProperty('source') ||
            !data.hasOwnProperty('landline') ||
            !data.cellPhone ||
            !data.hasOwnProperty('comments') ||
            !data.hasOwnProperty('createdByAdministrator') ||
            !data.hasOwnProperty('createdByManager') ||
            !data.hasOwnProperty('createdBySecretary') ||
            !data.hasOwnProperty('registered')) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const leadEntity: LeadEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (leadEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterByEmail(email: string): Promise<boolean> {
        const leadEntity: LeadEntity | undefined =
            await this.repository.findOne({
                select: ['email'],
                where: {
                    email: email
                }
            });

        const result: boolean = (leadEntity) ? true : false;

        return result;
    }

    /** @TODO Implementar método de pesquisa avançada de leads */

    /* public async advancedLeadSearch(): Promise<LeadEntity[]> { } */

    public async calculateTotalAmountLeads(month: string): Promise<any> {
        const dateFrom: string = moment(month).startOf('month').format('YYYY-MM-DD');
        const dateTo: string = moment(month).endOf('month').format('YYYY-MM-DD');

        const query: any =
            await this.repository.query(`
                SELECT
                    COUNT (*) AS "totalLeads"
                FROM business.leads
                WHERE (leads.created_at BETWEEN '${dateFrom}' AND '${dateTo}');
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