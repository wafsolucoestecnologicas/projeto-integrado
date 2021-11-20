import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { ManagerEntity } from '../entities/manager.entity';

export class ManagerService {

    private repository: Repository<ManagerEntity>

    constructor() {
        this.repository = getRepository(ManagerEntity);
    }

    public async index(): Promise<ManagerEntity[]> {
        const managerEntity: ManagerEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ]
            });

        return managerEntity;
    }

    public async create(data: ManagerEntity, transaction: EntityManager): Promise<ManagerEntity> {
        const managerEntity: ManagerEntity =
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
                isManager: true
            });

        const result: ManagerEntity =
            await transaction.save(managerEntity);

        return result;
    }

    public async read(id: number): Promise<ManagerEntity | undefined> {
        const managerEntity: ManagerEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company'
                ],
                where: {
                    id: id
                }
            });

        return managerEntity;
    }

    public async update(id: number, data: ManagerEntity, transaction: EntityManager): Promise<ManagerEntity> {
        const managerEntity: ManagerEntity =
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

        const result: ManagerEntity =
            await transaction.save(managerEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(ManagerEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: ManagerEntity): boolean {
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
        const managerEntity: ManagerEntity | undefined =
            await this.repository.findOne({
                select: ['CPF'],
                where: {
                    CPF: CPF
                }
            });

        const result: boolean = (managerEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const managerEntity: ManagerEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (managerEntity) ? true : false;

        return result;
    }

}