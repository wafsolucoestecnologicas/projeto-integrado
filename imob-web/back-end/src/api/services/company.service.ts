import { Repository, getRepository, DeleteResult } from 'typeorm';
import { CompanyModel } from '../models/company.model';

export class CompanyService {

    private repository: Repository<CompanyModel>;

    constructor() {
        this.repository = getRepository(CompanyModel);
    }

    public async index(): Promise<CompanyModel[]> {
        const companyModel: CompanyModel[] =
            await this.repository.find({
                order: {
                    id: 'ASC'
                }
            });

        return companyModel;
    }

    public async create(data: CompanyModel): Promise<CompanyModel> {
        const companyModel: CompanyModel =
            this.repository.create({
                cnpj: data.cnpj,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration
            });

        const result: CompanyModel =
            await this.repository.save(companyModel)

        return result;
    }

    public async read(id: number): Promise<CompanyModel | undefined> {
        const companyModel: CompanyModel | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return companyModel;
    }

    public async udpate(id: number, data: CompanyModel): Promise<CompanyModel> {
        const companyModel: CompanyModel =
            await this.repository.create({
                id: id,
                cnpj: data.cnpj,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration
            });

        const result: CompanyModel =
            await this.repository.save(companyModel);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
                id: id
            });

        return result;
    }

    public createCompanyModelByRepository(data: any): CompanyModel {
        const companyModel: CompanyModel =
            this.repository.create({
                cnpj: data.cnpj,
                corporateName: data.corporateName,
                stateRegistration: data.stateRegistration
            });

        return companyModel;
    }

    public validateData(data: CompanyModel): boolean {
        let isValid: boolean = true;

        if (!data.cnpj || !data.corporateName || !data.stateRegistration) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisteredByCnpj(cnpj: string): Promise<boolean> {
        const companyModel: CompanyModel | undefined =
            await this.repository.findOne({
                select: ['cnpj'],
                where: {
                    cnpj: cnpj
                }
            });

        const result: boolean = (companyModel) ? true : false;

        return result;
    }

    public async alreadyRegisteredById(id: number): Promise<boolean> {
        const companyModel: CompanyModel | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (companyModel) ? true : false;

        return result;
    }

}