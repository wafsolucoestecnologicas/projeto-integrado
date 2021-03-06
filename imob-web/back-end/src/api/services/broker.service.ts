import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { BrokerEntity } from '../entities/broker.entity';
import { Payload } from '../../../utils/interfaces/jwt.interfaces';

export class BrokerService {

    private repository: Repository<BrokerEntity>

    constructor() {
        this.repository = getRepository(BrokerEntity);
    }

    public async index(payload: Payload): Promise<BrokerEntity[]> {
        const brokerEntity: BrokerEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ],
                where: {
                    company: payload.company.id
                }
            });

        return brokerEntity;
    }

    public async create(data: BrokerEntity, transaction: EntityManager): Promise<BrokerEntity> {
        const brokerEntity: BrokerEntity =
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
                isBroker: true
            });

        const result: BrokerEntity =
            await transaction.save(brokerEntity);

        return result;
    }

    public async read(id: number, payload: Payload): Promise<BrokerEntity | undefined> {
        const brokerEntity: BrokerEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company'
                ],
                where: {
                    id: id,
                    company: payload.company.id
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
                RG: data.RG,
                CPF: data.CPF,
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
            !data.RG ||
            !data.CPF ||
            !data.cellPhone) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterByCPF(CPF: string): Promise<boolean> {
        const brokerEntity: BrokerEntity | undefined =
            await this.repository.findOne({
                select: ['CPF'],
                where: {
                    CPF: CPF
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