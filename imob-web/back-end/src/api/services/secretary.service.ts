import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { SecretaryEntity } from '../entities/secretary.entity';

export class SecretaryService {

    private repository: Repository<SecretaryEntity>

    constructor() {
        this.repository = getRepository(SecretaryEntity);
    }

    public async index(): Promise<SecretaryEntity[]> {
        const secretaryEntity: SecretaryEntity[] =
            await this.repository.find();

        return secretaryEntity;
    }

    public async create(data: SecretaryEntity, transaction: EntityManager): Promise<SecretaryEntity> {
        const secretaryEntity: SecretaryEntity =
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
                isSecretary: true
            });

        const result: SecretaryEntity =
            await transaction.save(secretaryEntity);

        return result;
    }

    public async read(id: number): Promise<SecretaryEntity | undefined> {
        const secretaryEntity: SecretaryEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return secretaryEntity;
    }

    public async update(id: number, data: SecretaryEntity, transaction: EntityManager): Promise<SecretaryEntity> {
        const secretaryEntity: SecretaryEntity =
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

        const result: SecretaryEntity =
            await transaction.save(secretaryEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(SecretaryEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: SecretaryEntity): boolean {
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
        const secretaryEntity: SecretaryEntity | undefined =
            await this.repository.findOne({
                select: ['cpf'],
                where: {
                    cpf: cpf
                }
            });

        const result: boolean = (secretaryEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const secretaryEntity: SecretaryEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (secretaryEntity) ? true : false;

        return result;
    }

}