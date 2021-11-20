import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { AdvisorEntity } from '../entities/advisor.entity';

export class AdvisorService {

    private repository: Repository<AdvisorEntity>

    constructor() {
        this.repository = getRepository(AdvisorEntity);
    }

    public async index(): Promise<AdvisorEntity[]> {
        const advisorEntity: AdvisorEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ]
            });

        return advisorEntity;
    }

    public async create(data: AdvisorEntity, transaction: EntityManager): Promise<AdvisorEntity> {
        const advisorEntity: AdvisorEntity =
            this.repository.create({
                company: data.company,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                birthDate: data.birthDate,
                RG: data.RG,
                CPF: data.CPF,
                landline: data.landline,
                cellPhone: data.cellPhone,
                profession: data.profession,
                isAdvisor: true
            });

        const result: AdvisorEntity =
            await transaction.save(advisorEntity);

        return result;
    }

    public async read(id: number): Promise<AdvisorEntity | undefined> {
        const advisorEntity: AdvisorEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company'
                ],
                where: {
                    id: id
                }
            });

        return advisorEntity;
    }

    public async update(id: number, data: AdvisorEntity, transaction: EntityManager): Promise<AdvisorEntity> {
        const advisorEntity: AdvisorEntity =
            this.repository.create({
                id: id,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                birthDate: data.birthDate,
                RG: data.RG,
                CPF: data.CPF,
                landline: data.landline,
                cellPhone: data.cellPhone,
                profession: data.profession
            });

        const result: AdvisorEntity =
            await transaction.save(advisorEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(AdvisorEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: AdvisorEntity): boolean {
        let isValid: boolean = true;

        if (!data.name ||
            !data.surname ||
            !data.email ||
            !data.birthDate ||
            !data.RG ||
            !data.CPF ||
            !data.cellPhone) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterByCPF(CPF: string): Promise<boolean> {
        const advisorEntity: AdvisorEntity | undefined =
            await this.repository.findOne({
                select: ['CPF'],
                where: {
                    CPF: CPF
                }
            });

        const result: boolean = (advisorEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const advisorEntity: AdvisorEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (advisorEntity) ? true : false;

        return result;
    }

}