import { getRepository, Repository, DeleteResult } from 'typeorm';
import { AdministratorEntity } from '../entities/administrator.entity';

export class AdministratorService {

    private repository: Repository<AdministratorEntity>

    constructor() {
        this.repository = getRepository(AdministratorEntity);
    }

    public async index(): Promise<AdministratorEntity[]> {
        const administratorEntity: AdministratorEntity[] =
            await this.repository.find();

        return administratorEntity;
    }

    public async create(data: AdministratorEntity): Promise<AdministratorEntity> {
        const administratorEntity: AdministratorEntity =
            this.repository.create({
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

        const result: AdministratorEntity =
            await this.repository.save(administratorEntity);

        return result;
    }

    public async read(id: number): Promise<AdministratorEntity | undefined> {
        const administratorEntity: AdministratorEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return administratorEntity;
    }

    public async update(id: number, data: AdministratorEntity): Promise<AdministratorEntity> {
        const administratorEntity: AdministratorEntity =
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

        const result: AdministratorEntity =
            await this.repository.save(administratorEntity);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
                id: id
            });

        return result;
    }

    public async alreadyRegisterByCpf(cpf: string): Promise<boolean> {
        const administratorEntity: AdministratorEntity | undefined =
            await this.repository.findOne({
                select: ['cpf'],
                where: {
                    cpf: cpf
                }
            });

        const result: boolean = (administratorEntity) ? true : false;

        return result;
    }

    public validateData(data: AdministratorEntity): boolean {
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

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const administratorEntity: AdministratorEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (administratorEntity) ? true : false;

        return result;
    }

}