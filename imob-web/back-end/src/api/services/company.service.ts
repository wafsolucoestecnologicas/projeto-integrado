import { Repository, getRepository, DeleteResult, EntityManager } from 'typeorm';
import { CompanyEntity } from '../entities/company.entity';

export class CompanyService {

    private repository: Repository<CompanyEntity>;

    constructor() {
        this.repository = getRepository(CompanyEntity);
    }

    public async index(): Promise<CompanyEntity[]> {
        const companyEntity: CompanyEntity[] =
            await this.repository.find();

        return companyEntity;
    }

    public async create(data: CompanyEntity, transaction: EntityManager): Promise<CompanyEntity> {
        const companyEntity: CompanyEntity =
            this.repository.create({
                CNPJ: data.CNPJ,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration,
                percentageCommissionReceived: data.percentageCommissionReceived,
                percentageCommissionPayable: data.percentageCommissionPayable
            });

        const result: CompanyEntity =
            await transaction.save(companyEntity)

        return result;
    }

    public async read(id: number): Promise<CompanyEntity | undefined> {
        const companyEntity: CompanyEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return companyEntity;
    }

    public async udpate(id: number, data: CompanyEntity, transaction: EntityManager): Promise<CompanyEntity> {
        const companyEntity: CompanyEntity =
            this.repository.create({
                id: id,
                CNPJ: data.CNPJ,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration,
                percentageCommissionReceived: data.percentageCommissionReceived,
                percentageCommissionPayable: data.percentageCommissionPayable
            });

        const result: CompanyEntity =
            await transaction.save(companyEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CompanyEntity, {
                id: id
            });

        return result;
    }

    public createCompanyEntityByRepository(data: any): CompanyEntity {
        const companyEntity: CompanyEntity =
            this.repository.create({
                CNPJ: data.CNPJ,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration
            });

        return companyEntity;
    }

    public validateData(data: CompanyEntity): boolean {
        let isValid: boolean = true;

        if (!data.CNPJ ||
            !data.corporateName ||
            !data.stateRegistration) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisteredByCNPJ(CNPJ: string): Promise<boolean> {
        const companyEntity: CompanyEntity | undefined =
            await this.repository.findOne({
                select: ['CNPJ'],
                where: {
                    CNPJ: CNPJ
                }
            });

        const result: boolean = (companyEntity) ? true : false;

        return result;
    }

    public async alreadyRegisteredById(id: number): Promise<boolean> {
        const companyEntity: CompanyEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (companyEntity) ? true : false;

        return result;
    }

}