import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { Payload } from '../../../utils/interfaces/jwt.interfaces';
import { PropertyEntity } from '../entities/property.entity'

export class PropertyService {

    private repository: Repository<PropertyEntity>;

    constructor() {
        this.repository = getRepository(PropertyEntity);
    }

    public async sale(CNPJ: string): Promise<PropertyEntity[]> {
        const propertyEntity: PropertyEntity[] =
            await this.repository.find({
                relations: [
                    'company'
                ],
                where: {
                    company: {
                        CNPJ: CNPJ
                    }
                }
            });

        return propertyEntity;
    }

    public async index(payload: Payload): Promise<PropertyEntity[]> {
        const propertyEntity: PropertyEntity[] =
            await this.repository.find({
                relations: [
                    'company',
                    'owner',
                    'administrator',
                    'manager',
                    'advisor',
                    'broker',
                    'secretary'
                ],
                where: {
                    company: payload.company.id
                }
            });

        return propertyEntity;
    }

    public async create(data: PropertyEntity, transaction: EntityManager): Promise<PropertyEntity> {
        const propertyEntity: PropertyEntity =
            this.repository.create({
                company: data.company,
                owner: data.owner,
                administrator: data?.administrator,
                manager: data?.manager,
                advisor: data?.advisor,
                broker: data?.broker,
                secretary: data?.secretary,
                description: data.description ? data.description.toLowerCase() : '',
                photos: data.photos,
                checked: data.checked,
                elevator: data.elevator,
                bedrooms: data.bedrooms,
                bathrooms: data.bathrooms,
                suites: data.suites,
                parkingLots: data.parkingLots,
                terrainArea: data.terrainArea,
                buildingArea: data.buildingArea,
                totalUtilTerrainArea: data.totalUtilTerrainArea,
                condominium: Number(data.condominium),
                IPTU: Number(data.IPTU),
                value: Number(data.value)
            });

        const result: PropertyEntity =
            await transaction.save(propertyEntity);

        return result;
    }

    public async read(id: number, payload: Payload): Promise<PropertyEntity | undefined> {
        const propertyEntity: PropertyEntity | undefined =
            await this.repository.findOne({
                relations: [
                    'company',
                    'owner',
                    'administrator',
                    'manager',
                    'advisor',
                    'broker',
                    'secretary'
                ],
                where: {
                    id: id,
                    company: payload.company.id
                }
            });

        return propertyEntity;
    }

    public async update(id: number, data: PropertyEntity, transaction: EntityManager): Promise<PropertyEntity> {
        const propertyEntity: PropertyEntity =
            this.repository.create({
                owner: data.owner,
                id: id,
                description: data.description.toLowerCase(),
                photos: data.photos,
                checked: data.checked,
                elevator: data.elevator,
                bedrooms: data.bedrooms,
                bathrooms: data.bathrooms,
                suites: data.suites,
                parkingLots: data.parkingLots,
                terrainArea: data.terrainArea,
                buildingArea: data.buildingArea,
                totalUtilTerrainArea: data.totalUtilTerrainArea,
                condominium: data.condominium,
                IPTU: data.IPTU,
                value: data.value
            });

        const result: PropertyEntity =
            await transaction.save(propertyEntity);

        return result;
    }

    public async delete(id: number, transaction: EntityManager): Promise<DeleteResult> {
        const result: DeleteResult =
            await transaction.delete(PropertyEntity, {
                id: id
            });

        return result;
    }

    public validateData(data: PropertyEntity): boolean {
        let isValid: boolean = true;

        if (!data.hasOwnProperty('description') ||
            !data.hasOwnProperty('photos') ||
            !data.hasOwnProperty('checked') ||
            !data.hasOwnProperty('elevator') ||
            !data.hasOwnProperty('bedrooms') ||
            !data.hasOwnProperty('bathrooms') ||
            !data.hasOwnProperty('suites') ||
            !data.hasOwnProperty('parkingLots') ||
            !data.hasOwnProperty('terrainArea') ||
            !data.hasOwnProperty('buildingArea') ||
            !data.hasOwnProperty('totalUtilTerrainArea') ||
            !data.hasOwnProperty('condominium') ||
            !data.hasOwnProperty('IPTU') ||
            !data.hasOwnProperty('value')) {
                isValid = false;
            }

        return isValid;
    }

    public async alreadyRegisterById(id: number): Promise<boolean> {
        const propertyEntity: PropertyEntity | undefined =
            await this.repository.findOne({
                select: ['id'],
                where: {
                    id: id
                }
            });

        const result: boolean = (propertyEntity) ? true : false;

        return result;
    }

    /** @TODO Implementar m??todo de pesquisa avan??ada de im??veis */

    /* public async advancedPropertySearch(): Promise<PropertyEntity[]> { } */
}