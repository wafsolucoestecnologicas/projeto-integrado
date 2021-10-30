import { Repository, getRepository, DeleteResult } from 'typeorm';
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

    public async create(data: CompanyEntity): Promise<CompanyEntity> {
        const companyEntity: CompanyEntity =
            this.repository.create({
                cnpj: data.cnpj,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration,
                percentageCommissionReceived: data.percentageCommissionReceived,
                percentageCommissionPayable: data.percentageCommissionPayable
            });

        const result: CompanyEntity =
            await this.repository.save(companyEntity)

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

    public async udpate(id: number, data: CompanyEntity): Promise<CompanyEntity> {
        const companyEntity: CompanyEntity =
            this.repository.create({
                id: id,
                cnpj: data.cnpj,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration,
                percentageCommissionReceived: data.percentageCommissionReceived,
                percentageCommissionPayable: data.percentageCommissionPayable
            });

        const result: CompanyEntity =
            await this.repository.save(companyEntity);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
                id: id
            });

        return result;
    }

    public createCompanyEntityByRepository(data: any): CompanyEntity {
        const companyEntity: CompanyEntity =
            this.repository.create({
                cnpj: data.cnpj,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration
            });

        return companyEntity;
    }

    public validateData(data: CompanyEntity): boolean {
        let isValid: boolean = true;

        if (!data.cnpj ||
            !data.corporateName ||
            !data.stateRegistration) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisteredByCnpj(cnpj: string): Promise<boolean> {
        const companyEntity: CompanyEntity | undefined =
            await this.repository.findOne({
                select: ['cnpj'],
                where: {
                    cnpj: cnpj
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