import { Repository, getRepository, DeleteResult, EntityManager } from 'typeorm';
import { AddressEntity } from '../entities/address.entity';
import { ResponseViaCEPModel } from '../models/address.model';
import fetch, { Response } from 'node-fetch';

export class AddressService {

    private repository: Repository<AddressEntity>;

    constructor() {
        this.repository = getRepository(AddressEntity);
    }

    public async index(): Promise<AddressEntity[]> {
        const addressEntity: AddressEntity[] =
            await this.repository.find({
                relations: [
                    'neighborhood'
                ]
            });

        return addressEntity;
    }

    public async create(data: AddressEntity, transaction: EntityManager): Promise<AddressEntity> {
        const addressEntity: AddressEntity =
            this.repository.create({
                company: data.company,
                neighborhood: data.neighborhood,
                manager: data?.manager,
                advisor: data?.advisor,
                broker: data?.broker,
                secretary: data?.secretary,
                owner: data?.owner,
                customer: data?.customer,
                property: data?.property,
                street: data.street.toLowerCase(),
                complement: data.complement ? data.complement.toLowerCase() : '',
                number: data.number,
                CEP: data.CEP,
                isCompany: data.isCompany,
                isManager: data.isManager,
                isAdvisor: data.isAdvisor,
                isBroker: data.isBroker,
                isSecretary: data.isSecretary,
                isOwner: data.isOwner,
                isCustomer: data.isCustomer,
                isProperty: data.isProperty
            });

        const result: AddressEntity =
            await transaction.save(addressEntity);

        return result;
    }

    public async read(id: number): Promise<AddressEntity | undefined> {
        const addressEntity: AddressEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
                },
                relations: [
                    'neighborhood'
                ]
            });

        return addressEntity;
    }

    public async update(id: number, data: AddressEntity, transaction: EntityManager): Promise<AddressEntity> {
        const addressEntity: AddressEntity =
            this.repository.create({
                id: id,
                neighborhood: data.neighborhood,
                street: data.street.toLowerCase(),
                complement: data.complement ? data.complement.toLowerCase() : '',
                number: data.number,
                CEP: data.CEP,
                isCompany: data.isCompany,
                isManager: data.isManager,
                isAdvisor: data.isAdvisor,
                isBroker: data.isBroker,
                isSecretary: data.isSecretary,
                isOwner: data.isOwner,
                isCustomer: data.isCustomer,
                isProperty: data.isProperty
            });

        const result: AddressEntity =
            await transaction.save(addressEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(AddressEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: AddressEntity): boolean {
        let isValid: boolean = true;

        if (!data.street ||
            !data.number ||
            !data.CEP ||
            !data.hasOwnProperty('complement') ||
            !data.hasOwnProperty('isCompany') ||
            !data.hasOwnProperty('isManager') ||
            !data.hasOwnProperty('isAdvisor') ||
            !data.hasOwnProperty('isBroker') ||
            !data.hasOwnProperty('isSecretary') ||
            !data.hasOwnProperty('isOwner') ||
            !data.hasOwnProperty('isCustomer') ||
            !data.hasOwnProperty('isProperty')) {
            isValid = false;
        }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const addressEntity: AddressEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (addressEntity) ? true : false;

        return result;
    }

    public async fetchAddressInAPIViaCEP(CEP: string): Promise<ResponseViaCEPModel> {
        const address: ResponseViaCEPModel = {
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: '',
            ibge: '',
            gia: '',
            ddd: '',
            siafi: ''
        };

        if (CEP) {
            const response: Response =
                await fetch(`https://viacep.com.br/ws/${CEP}/json/`);

            if (response.status === 200) {
                const data: Promise<any> =
                    await response.json();
                const parsed: ResponseViaCEPModel =
                    JSON.parse(JSON.stringify(data));

                address.cep = parsed.cep;
                address.logradouro = parsed.logradouro ? parsed.logradouro.toLowerCase() : '';
                address.complemento = parsed.complemento ? parsed.complemento.toLowerCase() : '';
                address.bairro = parsed.bairro ? parsed.bairro.toLowerCase() : '';
                address.localidade = parsed.localidade ? parsed.localidade.toLowerCase() : '';
                address.uf = parsed.uf;
                address.ibge = parsed.ibge;
                address.gia = parsed.gia;
                address.ddd = parsed.ddd;
                address.siafi = parsed.siafi;
            }
        }

        return address;
    }

}