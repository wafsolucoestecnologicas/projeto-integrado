import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { SecretaryEntity } from '../entities/secretary.entity';
import { Payload } from '../../../utils/interfaces/jwt.interfaces';

export class SecretaryService {

    private repository: Repository<SecretaryEntity>

    constructor() {
        this.repository = getRepository(SecretaryEntity);
    }

    public async index(payload: Payload): Promise<SecretaryEntity[]> {
        const secretaryEntity: SecretaryEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ],
                where: {
                    company: payload.company.id
                }
            });

        return secretaryEntity;
    }

    public async create(data: SecretaryEntity, transaction: EntityManager): Promise<SecretaryEntity> {
        const secretaryEntity: SecretaryEntity =
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
                isSecretary: true
            });

        const result: SecretaryEntity =
            await transaction.save(secretaryEntity);

        return result;
    }

    public async read(id: number, payload: Payload): Promise<SecretaryEntity | undefined> {
        const secretaryEntity: SecretaryEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company'
                ],
                where: {
                    id: id,
                    company: payload.company.id
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
                RG: data.RG,
                CPF: data.CPF,
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
            !data.RG ||
            !data.CPF ||
            !data.cellPhone) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterByCPF(CPF: string): Promise<boolean> {
        const secretaryEntity: SecretaryEntity | undefined =
            await this.repository.findOne({
                select: ['CPF'],
                where: {
                    CPF: CPF
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