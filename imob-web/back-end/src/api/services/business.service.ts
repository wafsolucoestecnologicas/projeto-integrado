import { DeleteResult, EntityManager, getRepository, Repository, UpdateResult } from 'typeorm';
import { BusinessEntity } from '../entities/business.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';
import moment from 'moment';

export class BusinessService {

    private repository: Repository<BusinessEntity>;

    constructor() {
        this.repository = getRepository(BusinessEntity);
    }

    public async index(): Promise<BusinessEntity[]> {
        const businessEntity: BusinessEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'owner',
                    'customer',
                    'property'
                ]
            });

        return businessEntity;
    }

    public async create(data: BusinessEntity, transaction: EntityManager): Promise<BusinessEntity> {
        const businessEntity: BusinessEntity =
            this.repository.create({
                company: data.company,
                administrator: data?.administrator,
                manager: data?.manager,
                advisor: data?.advisor,
                broker: data?.broker,
                secretary: data?.secretary,
                owner: data.owner,
                customer: data.customer,
                property: data.property,
                status: data.status,
                dateVisit: data.dateVisit,
                dateSale: data.dateSale,
                visitForm: data.visitForm,
                propertyRegistration: data.propertyRegistration,
                propertySaleContract: data.propertySaleContract,
                ITBI: data.ITBI,
                customerRG: data.customerRG,
                customerCPF: data.customerCPF,
                customerAddressProof: data.customerAddressProof,
                customerPayslip: data.customerPayslip,
                ownerRG: data.ownerRG,
                ownerCPF: data.ownerCPF,
                ownerAddressProof: data.ownerAddressProof,
                ownerPayslip: data.ownerPayslip,
                createdByAdministrator: data.createdByAdministrator,
                createdByManager: data.createdByManager,
                createdBySecretary: data.createdBySecretary,
                redirectedManagerId: data.redirectedManagerId,
                redirectedAdvisorId: data.redirectedAdvisorId,
                redirectedBrokerId: data.redirectedBrokerId
            });

        const result: BusinessEntity =
            await transaction.save(businessEntity);

        return result;
    }

    public async read(id: number): Promise<BusinessEntity | undefined> {
        const businessEntity: BusinessEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'company',
                    'owner',
                    'customer',
                    'property'
                ]
            });

        return businessEntity;
    }

    public async update(id: number, data: BusinessEntity, transaction: EntityManager): Promise<BusinessEntity> {
        const businessEntity: BusinessEntity =
            this.repository.create({
                id: id,
                manager: data?.manager,
                advisor: data?.advisor,
                broker: data?.broker,
                secretary: data?.secretary,
                owner: data.owner,
                customer: data.customer,
                property: data.property,
                status: data.status,
                dateVisit: data.dateVisit,
                dateSale: data.dateSale,
                visitForm: data.visitForm,
                propertyRegistration: data.propertyRegistration,
                propertySaleContract: data.propertySaleContract,
                ITBI: data.ITBI,
                customerRG: data.customerRG,
                customerCPF: data.customerCPF,
                customerAddressProof: data.customerAddressProof,
                customerPayslip: data.customerPayslip,
                ownerRG: data.ownerRG,
                ownerCPF: data.ownerCPF,
                ownerAddressProof: data.ownerAddressProof,
                ownerPayslip: data.ownerPayslip,
                createdByAdministrator: data.createdByAdministrator,
                createdByManager: data.createdByManager,
                createdBySecretary: data.createdBySecretary,
                redirectedManagerId: data.redirectedManagerId,
                redirectedAdvisorId: data.redirectedAdvisorId,
                redirectedBrokerId: data.redirectedBrokerId
            });

        const result: BusinessEntity =
            await transaction.save(businessEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(BusinessEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: BusinessEntity): boolean {
        let isValid: boolean = true;

        if (!data.hasOwnProperty('status') ||
            !data.hasOwnProperty('dateVisit') ||
            !data.hasOwnProperty('dateSale') ||
            !data.hasOwnProperty('visitForm') ||
            !data.hasOwnProperty('propertyRegistration') ||
            !data.hasOwnProperty('propertySaleContract') ||
            !data.hasOwnProperty('ITBI') ||
            !data.hasOwnProperty('customerRG') ||
            !data.hasOwnProperty('customerCPF') ||
            !data.hasOwnProperty('customerAddressProof') ||
            !data.hasOwnProperty('customerPayslip') ||
            !data.hasOwnProperty('ownerRG') ||
            !data.hasOwnProperty('ownerCPF') ||
            !data.hasOwnProperty('ownerAddressProof') ||
            !data.hasOwnProperty('ownerPayslip') ||
            !data.hasOwnProperty('createdByAdministrator') ||
            !data.hasOwnProperty('createdByManager') ||
            !data.hasOwnProperty('createdBySecretary') ||
            !data.hasOwnProperty('redirectedManagerId') ||
            !data.hasOwnProperty('redirectedAdvisorId') ||
            !data.hasOwnProperty('redirectedBrokerId')) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const businessEntity: BusinessEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (businessEntity) ? true : false;

        return result;
    }

    public async transferBusinessToManager(id: number, manager: ManagerEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: id
            }, {
                manager: {
                    id: manager.id
                },
                redirectedManagerId: manager.id
            });

        return updateResult;
    }

    public async transferBusinessToAdvisor(id: number, advisor: AdvisorEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: id
            }, {
                advisor: {
                    id: advisor.id
                },
                redirectedAdvisorId: advisor.id
            });

        return updateResult;
    }

    public async transferBusinessToBroker(id: number, broker: BrokerEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: id
            }, {
                broker: {
                    id: broker.id
                },
                redirectedBrokerId: broker.id
            });

        return updateResult;
    }

    public async rejectBusiness(id: number, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: id
            }, {
                status: 3
            });

        return updateResult;
    }

    public async closeBusiness(id: number, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: id
            }, {
                status: 4
            });

        return updateResult;
    }

    public async calculateTotalAmountBusinesses(month: string): Promise<any> {
        const dateFrom: string = moment(month).startOf('month').format('YYYY-MM-DD');
        const dateTo: string = moment(month).endOf('month').format('YYYY-MM-DD');

        const query: any =
            await this.repository.query(`
                SELECT
                    SUM (CASE WHEN (businesses.status = 0) THEN (1) ELSE (0) END) AS "totalAmountProspecting",
                    SUM (CASE WHEN (businesses.status = 1) THEN (1) ELSE (0) END) AS "totalAmountVisit",
                    SUM (CASE WHEN (businesses.status = 2) THEN (1) ELSE (0) END) AS "totalAmountProposal",
                    SUM (CASE WHEN (businesses.status = 3) THEN (1) ELSE (0) END) AS "totalAmountRejected",
                    SUM (CASE WHEN (businesses.status = 4) THEN (1) ELSE (0) END) AS "totalAmountClosed",
                    COUNT (*) AS "totalAmountBusinesses"
                FROM business.businesses AS businesses
                WHERE (businesses.created_at BETWEEN '${dateFrom}' AND '${dateTo}')
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