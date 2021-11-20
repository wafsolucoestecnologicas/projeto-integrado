import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { OwnerEntity } from '../entities/owner.entity';

export class OwnerService {

    private repository: Repository<OwnerEntity>

    constructor() {
        this.repository = getRepository(OwnerEntity);
    }

    public async index(): Promise<OwnerEntity[]> {
        const ownerEntity: OwnerEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ],
            });

        return ownerEntity;
    }

    public async create(data: OwnerEntity, transaction: EntityManager): Promise<OwnerEntity> {
        const ownerEntity: OwnerEntity =
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
                checked: false,
                isOwner: true
            });

        const result: OwnerEntity =
            await transaction.save(ownerEntity);

        return result;
    }

    public async read(id: number): Promise<OwnerEntity | undefined> {
        const ownerEntity: OwnerEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company'
                ],
                where: {
                    id: id
                }
            });

        return ownerEntity;
    }

    public async update(id: number, data: OwnerEntity, transaction: EntityManager): Promise<OwnerEntity> {
        const ownerEntity: OwnerEntity =
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
                profession: data.profession,
                checked: data.checked
            });

        const result: OwnerEntity =
            await transaction.save(ownerEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(OwnerEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: OwnerEntity): boolean {
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
        const ownerEntity: OwnerEntity | undefined =
            await this.repository.findOne({
                select: ['CPF'],
                where: {
                    CPF: CPF
                }
            });

        const result: boolean = (ownerEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const ownerEntity: OwnerEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (ownerEntity) ? true : false;

        return result;
    }

}