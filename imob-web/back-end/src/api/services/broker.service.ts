import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { BrokerEntity } from '../entities/broker.entity';

export class BrokerService {

    private repository: Repository<BrokerEntity>

    constructor() {
        this.repository = getRepository(BrokerEntity);
    }

    public async index(): Promise<BrokerEntity[]> {
        const brokerEntity: BrokerEntity[] =
            await this.repository.find();

        return brokerEntity;
    }

    public async create(data: BrokerEntity, transaction: EntityManager): Promise<BrokerEntity> {
        const brokerEntity: BrokerEntity =
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
                isBroker: true
            });

        const result: BrokerEntity =
            await transaction.save(brokerEntity);

        return result;
    }

    public async read(id: number): Promise<BrokerEntity | undefined> {
        const brokerEntity: BrokerEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return brokerEntity;
    }

    public async update(id: number, data: BrokerEntity, transaction: EntityManager): Promise<BrokerEntity> {
        const brokerEntity: BrokerEntity =
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

        const result: BrokerEntity =
            await transaction.save(brokerEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(BrokerEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: BrokerEntity): boolean {
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
        const brokerEntity: BrokerEntity | undefined =
            await this.repository.findOne({
                select: ['cpf'],
                where: {
                    cpf: cpf
                }
            });

        const result: boolean = (brokerEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const brokerEntity: BrokerEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (brokerEntity) ? true : false;

        return result;
    }

}