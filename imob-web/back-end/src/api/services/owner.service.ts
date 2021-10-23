import { getRepository, Repository, DeleteResult } from 'typeorm';
import { OwnerEntity } from '../entities/owner.entity';

export class OwnerService {

    private repository: Repository<OwnerEntity>

    constructor() {
        this.repository = getRepository(OwnerEntity);
    }

    public async index(): Promise<OwnerEntity[]> {
        const ownerEntity: OwnerEntity[] =
            await this.repository.find();

        return ownerEntity;
    }

    public async create(data: OwnerEntity): Promise<OwnerEntity> {
        const ownerEntity: OwnerEntity =
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
                checked: false,
                isOwner: true
            });

        const result: OwnerEntity =
            await this.repository.save(ownerEntity);

        return result;
    }

    public async read(id: number): Promise<OwnerEntity | undefined> {
        const ownerEntity: OwnerEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return ownerEntity;
    }

    public async update(id: number, data: OwnerEntity): Promise<OwnerEntity> {
        const ownerEntity: OwnerEntity =
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
                profession: data.profession,
                checked: data.checked
            });

        const result: OwnerEntity =
            await this.repository.save(ownerEntity);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
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
            !data.rg ||
            !data.cpf ||
            !data.cellPhone) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterByCpf(cpf: string): Promise<boolean> {
        const ownerEntity: OwnerEntity | undefined =
            await this.repository.findOne({
                select: ['cpf'],
                where: {
                    cpf: cpf
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