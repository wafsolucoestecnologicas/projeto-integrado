import { getRepository, Repository, DeleteResult } from 'typeorm';
import { AdvisorEntity } from '../entities/advisor.entity';

export class AdvisorService {

    private repository: Repository<AdvisorEntity>

    constructor() {
        this.repository = getRepository(AdvisorEntity);
    }

    public async index(): Promise<AdvisorEntity[]> {
        const advisorEntity: AdvisorEntity[] =
            await this.repository.find();

        return advisorEntity;
    }

    public async create(data: AdvisorEntity): Promise<AdvisorEntity> {
        const advisorEntity: AdvisorEntity =
            this.repository.create({
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                birthDate: data.birthDate,
                rg: data.rg,
                cpf: data.cpf,
                landline: data.landline,
                cellPhone: data.cellPhone,
                profession: data.profession,
                isAdvisor: true
            });

        const result: AdvisorEntity =
            await this.repository.save(advisorEntity);

        return result;
    }

    public async read(id: number): Promise<AdvisorEntity | undefined> {
        const advisorEntity: AdvisorEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return advisorEntity;
    }

    public async update(id: number, data: AdvisorEntity): Promise<AdvisorEntity> {
        const advisorEntity: AdvisorEntity =
            this.repository.create({
                id: id,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                birthDate: data.birthDate,
                rg: data.rg,
                cpf: data.cpf,
                landline: data.landline,
                cellPhone: data.cellPhone,
                profession: data.profession
            });

        const result: AdvisorEntity =
            await this.repository.save(advisorEntity);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
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
            !data.rg ||
            !data.cpf ||
            !data.cellPhone) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterByCpf(cpf: string): Promise<boolean> {
        const advisorEntity: AdvisorEntity | undefined =
            await this.repository.findOne({
                select: ['cpf'],
                where: {
                    cpf: cpf
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