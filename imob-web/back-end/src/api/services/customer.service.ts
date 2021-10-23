import { getRepository, Repository, DeleteResult } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

export class CustomerService {

    private repository: Repository<CustomerEntity>

    constructor() {
        this.repository = getRepository(CustomerEntity);
    }

    public async index(): Promise<CustomerEntity[]> {
        const customerEntity: CustomerEntity[] =
            await this.repository.find();

        return customerEntity;
    }

    public async create(data: CustomerEntity): Promise<CustomerEntity> {
        const customerEntity: CustomerEntity =
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
                isCustomer: true
            });

        const result: CustomerEntity =
            await this.repository.save(customerEntity);

        return result;
    }

    public async read(id: number): Promise<CustomerEntity | undefined> {
        const customerEntity: CustomerEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                }
            });

        return customerEntity;
    }

    public async update(id: number, data: CustomerEntity): Promise<CustomerEntity> {
        const customerEntity: CustomerEntity =
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

        const result: CustomerEntity =
            await this.repository.save(customerEntity);

        return result;
    }

    public async delete(id: number): Promise<DeleteResult> {
        const result: DeleteResult =
            await this.repository.delete({
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
            !data.rg ||
            !data.cpf ||
            !data.cellPhone) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterByCpf(cpf: string): Promise<boolean> {
        const customerEntity: CustomerEntity | undefined =
            await this.repository.findOne({
                select: ['cpf'],
                where: {
                    cpf: cpf
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