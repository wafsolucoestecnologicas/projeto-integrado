import { Entity, Column, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn, AfterLoad } from 'typeorm';
import { PropertyModel } from '../models/property.model';
import { CompanyEntity } from './company.entity';
import { OwnerEntity } from './owner.entity';
import { AdministratorEntity } from './administrator.entity';
import { ManagerEntity } from './manager.entity';
import { AdvisorEntity } from './advisor.entity';
import { BrokerEntity } from './broker.entity';
import { SecretaryEntity } from './secretary.entity';

@Entity({
    schema: 'business',
    name: 'properties'
})
export class PropertyEntity implements PropertyModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do imóvel'
    })
    public id: number;

    @Column({
        name: 'description',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Descrição do imóvel'
    })
    public description: string;

    @Column({
        name: 'photos',
        type: 'json',
        default: null,
        nullable: true,
        comment: 'Caminho relativo das fotos do imóvel'
    })
    public photos: JSON;

    @Column({
        name: 'checked',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o cadastro do imóvel foi checado por uma secretária'
    })
    public checked: boolean;

    @Column({
        name: 'elevator',
        type: 'bool',
        default: null,
        nullable: true,
        comment: 'Confirmação se o imóvel possui elevador'
    })
    public elevator: boolean;

    @Column({
        name: 'bedrooms',
        type: 'smallint',
        default: 0,
        nullable: true,
        comment: 'Quantidade de quartos do imóvel'
    })
    public bedrooms: number;

    @Column({
        name: 'bathrooms',
        type: 'smallint',
        default: 0,
        nullable: true,
        comment: 'Quantidade de banheiros do imóvel'
    })
    public bathrooms: number;

    @Column({
        name: 'suites',
        type: 'smallint',
        default: 0,
        nullable: true,
        comment: 'Quantidade de suítes do imóvel'
    })
    public suites: number;

    @Column({
        name: 'parking_lots',
        type: 'smallint',
        default: 0,
        nullable: true,
        comment: 'Quantidade de vagas de estacionamento do imóvel'
    })
    public parkingLots: number;

    @Column({
        name: 'terrain_area',
        type: 'numeric',
        default: 0,
        nullable: true,
        comment: 'Quantidade de metros quadrados de área do lote do imóvel'
    })
    public terrainArea: number;

    @Column({
        name: 'building_area',
        type: 'numeric',
        default: 0,
        nullable: true,
        comment: 'Quantidade de metros quadrados de área construída do imóvel'
    })
    public buildingArea: number;

    @Column({
        name: 'total_util_terrain_area',
        type: 'numeric',
        default: 0,
        nullable: true,
        comment: 'Quantidade de metros quadrados de área útil total do imóvel'
    })
    public totalUtilTerrainArea: number;

    @Column({
        name: 'condominium',
        type: 'numeric',
        default: 0,
        nullable: true,
        comment: 'Valor do condomínio do imóvel'
    })
    public condominium: number;

    @Column({
        name: 'iptu',
        type: 'numeric',
        default: 0,
        nullable: true,
        comment: 'Valor do IPTU do imóvel'
    })
    public IPTU: number;

    @Column({
        name: 'value',
        type: 'numeric',
        default: 0,
        nullable: true,
        comment: 'Valor de venda do imóvel'
    })
    public value: number;

    @Column({
        name: 'created_at',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
        comment: 'Data de criação do registro',
    })
    public createdAt: Date;

    @Column({
        name: 'updated_at',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        comment: 'Data de atualização do registro',
    })
    public updatedAt: Date;

    @OneToOne(() => CompanyEntity)
    @JoinColumn({ name: 'company_id' })
    public company: CompanyEntity;

    @OneToOne(() => OwnerEntity)
    @JoinColumn({ name: 'owner_id' })
    public owner: OwnerEntity;

    @OneToOne(() => AdministratorEntity)
    @JoinColumn({ name: 'administrator_id' })
    public administrator?: AdministratorEntity;

    @OneToOne(() => ManagerEntity)
    @JoinColumn({ name: 'manager_id' })
    public manager?: ManagerEntity;

    @OneToOne(() => AdvisorEntity)
    @JoinColumn({ name: 'advisor_id' })
    public advisor?: AdvisorEntity;

    @OneToOne(() => BrokerEntity)
    @JoinColumn({ name: 'broker_id' })
    public broker?: BrokerEntity;

    @OneToOne(() => SecretaryEntity)
    @JoinColumn({ name: 'secretary_id' })
    public secretary?: SecretaryEntity;

    constructor() { }

    @AfterLoad()
    public convertValuesToNumber(): void {
        if (this.terrainArea) this.terrainArea = Number(this.terrainArea);
        if (this.buildingArea) this.buildingArea = Number(this.buildingArea);
        if (this.totalUtilTerrainArea) this.totalUtilTerrainArea = Number(this.totalUtilTerrainArea);
        if (this.condominium) this.condominium = Number(this.condominium);
        if (this.IPTU) this.IPTU = Number(this.IPTU);
        if (this.value) this.value = Number(this.value);
    }

    @BeforeInsert()
    public setCreatedAt(): void {
        this.createdAt = new Date();
    }

    @BeforeInsert()
    @BeforeUpdate()
    public setUpdatedAt(): void {
        this.updatedAt = new Date();
    }

}