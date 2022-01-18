import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { AddressModel } from '../models/address.model';
import { CompanyEntity } from './company.entity';
import { NeighborhoodEntity } from './neighborhood.entity';
import { ManagerEntity } from './manager.entity';
import { AdvisorEntity } from './advisor.entity';
import { BrokerEntity } from './broker.entity';
import { SecretaryEntity } from './secretary.entity';
import { OwnerEntity } from './owner.entity';
import { CustomerEntity } from './customer.entity';
import { PropertyEntity } from './property.entity';

@Entity({
    schema: 'public',
    name: 'adresses'
})
export class AddressEntity implements AddressModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do endereço'
    })
    public id: number;

    @Column({
        name: 'street',
        type: 'text',
        nullable: false,
        comment: 'Nome da rua do endereço'
    })
    public street: string;

    @Column({
        name: 'complement',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Complemento do endereço'
    })
    public complement: string;

    @Column({
        name: 'number',
        type: 'text',
        nullable: false,
        comment: 'Número do endereço'
    })
    public number: string;

    @Column({
        name: 'cep',
        type: 'text',
        nullable: false,
        comment: 'CEP do endereço'
    })
    public CEP: string;

    @Column({
        name: 'is_company',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de uma imobiliária'
    })
    public isCompany: boolean;

    @Column({
        name: 'is_manager',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de um gestor'
    })
    public isManager: boolean;

    @Column({
        name: 'is_advisor',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de um despachante'
    })
    public isAdvisor: boolean;

    @Column({
        name: 'is_broker',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de um corretor'
    })
    public isBroker: boolean;

    @Column({
        name: 'is_secretary',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de uma secretária'
    })
    public isSecretary: boolean;

    @Column({
        name: 'is_owner',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de um proprietário'
    })
    public isOwner: boolean;

    @Column({
        name: 'is_customer',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de um cliente'
    })
    public isCustomer: boolean;

    @Column({
        name: 'is_property',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o endereço é de um imóvel'
    })
    public isProperty: boolean;

    @OneToOne(() => CompanyEntity)
    @JoinColumn({ name: 'company_id' })
    public company: CompanyEntity;

    @OneToOne(() => NeighborhoodEntity)
    @JoinColumn({ name: 'neighborhood_id' })
    public neighborhood: NeighborhoodEntity;

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

    @OneToOne(() => OwnerEntity)
    @JoinColumn({ name: 'owner_id' })
    public owner?: OwnerEntity;

    @OneToOne(() => CustomerEntity)
    @JoinColumn({ name: 'customer_id' })
    public customer?: CustomerEntity;

    @OneToOne(() => PropertyEntity)
    @JoinColumn({ name: 'property_id' })
    public property?: PropertyEntity;

    constructor() { }
    
}