import { DeleteResult, EntityManager, getRepository, Repository, UpdateResult } from 'typeorm';
import { BusinessEntity } from '../entities/business.entity';
import { ManagerEntity } from '../entities/manager.entity';
import { AdvisorEntity } from '../entities/advisor.entity';
import { BrokerEntity } from '../entities/broker.entity';

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
                    'property',
                    'lead'
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
                lead: data.lead,
                status: data.status,
                dateVisit: data.dateVisit,
                dateSale: data.dateSale,
                visitForm: data.visitForm,
                propertyRegistration: data.propertyRegistration,
                propertySaleContract: data.propertySaleContract,
                IBTI: data.IBTI,
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
                    'property',
                    'lead'
                ]
            });

        return businessEntity;
    }

    public async update(id: number, data: BusinessEntity, transaction: EntityManager): Promise<BusinessEntity> {
        const businessEntity: BusinessEntity =
            this.repository.create({
                id: id,
                owner: data.owner,
                customer: data.customer,
                property: data.property,
                lead: data.lead,
                status: data.status,
                dateVisit: data.dateVisit,
                dateSale: data.dateSale,
                visitForm: data.visitForm,
                propertyRegistration: data.propertyRegistration,
                propertySaleContract: data.propertySaleContract,
                IBTI: data.IBTI,
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
            !data.hasOwnProperty('IBTI') ||
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

    public async transferBusinessToManager(manager: ManagerEntity, business: BusinessEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: business.id
            }, {
                redirectedManagerId: manager.id
            });

        return updateResult;
    }

    public async transferBusinessToAdvisor(advisor: AdvisorEntity, business: BusinessEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: business.id
            }, {
                redirectedAdvisorId: advisor.id
            });

        return updateResult;
    }

    public async transferBusinessToBroker(broker: BrokerEntity, business: BusinessEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: business.id
            }, {
                redirectedBrokerId: broker.id
            });

        return updateResult;
    }

    public async rejectBusiness(business: BusinessEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: business.id
            }, {
                status: 3
            });

        return updateResult;
    }

    public async closeBusiness(business: BusinessEntity, transaction: EntityManager): Promise<UpdateResult> {
        const updateResult: UpdateResult =
            await transaction.update(BusinessEntity, {
                id: business.id
            }, {
                status: 4
            });

        return updateResult;
    }

}