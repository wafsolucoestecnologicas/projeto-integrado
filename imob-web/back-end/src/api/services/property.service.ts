import { DeleteResult, EntityManager, getRepository, Repository } from 'typeorm'
import { PropertyEntity } from '../entities/property.entity'

export class PropertyService {

    private repository: Repository<PropertyEntity>;

    constructor() {
        this.repository = getRepository(PropertyEntity);
    }

    public async index(): Promise<PropertyEntity[]> {
        const propertyEntity: PropertyEntity[] =
            await this.repository.find();

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

    public async read(id: number): Promise<PropertyEntity | undefined> {
        const propertyEntity: PropertyEntity | undefined =
            await this.repository.findOne({
                where: {
                    id: id
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

    /** @TODO Implementar método de pesquisa avançada de imóveis */

    /* public async advancedPropertySearch(): Promise<PropertyEntity[]> { } */
}