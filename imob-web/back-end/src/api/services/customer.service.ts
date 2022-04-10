import { getRepository, Repository, DeleteResult, EntityManager } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { Payload } from '../../../utils/interfaces/jwt.interfaces';

export class CustomerService {

    private repository: Repository<CustomerEntity>

    constructor() {
        this.repository = getRepository(CustomerEntity);
    }

    public async index(payload: Payload): Promise<CustomerEntity[]> {
        const customerEntity: CustomerEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'lead'
                ],
                where: {
                    company: payload.company.id
                }
            });

        return customerEntity;
    }

    public async create(data: CustomerEntity, transaction: EntityManager): Promise<CustomerEntity> {
        const customerEntity: CustomerEntity =
            this.repository.create({
                company: data.company,
                lead: data.lead,
                name: data.name.toLowerCase(),
                surname: data.surname.toLowerCase(),
                email: data.email.toLowerCase(),
                birthDate: data.birthDate,
                RG: data.RG,
                CPF: data.CPF,
                landline: data.landline,
                cellPhone: data.cellPhone,
                profession: data.profession,
                isCustomer: true
            });

        const result: CustomerEntity =
            await transaction.save(customerEntity);

        return result;
    }

    public async read(id: number, payload: Payload): Promise<CustomerEntity | undefined> {
        const customerEntity: CustomerEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company',
                    'lead'
                ],
                where: {
                    id: id,
                    company: payload.company.id
                }
            });

        return customerEntity;
    }

    public async update(id: number, data: CustomerEntity, transaction: EntityManager): Promise<CustomerEntity> {
        const customerEntity: CustomerEntity =
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

        const result: CustomerEntity =
            await transaction.save(customerEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(CustomerEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: CustomerEntity): boolean {
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
        const customerEntity: CustomerEntity | undefined =
            await this.repository.findOne({
                select: ['CPF'],
                where: {
                    CPF: CPF
                }
            });

        const result: boolean = (customerEntity) ? true : false;

        return result;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const customerEntity: CustomerEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (customerEntity) ? true : false;

        return result;
    }

}