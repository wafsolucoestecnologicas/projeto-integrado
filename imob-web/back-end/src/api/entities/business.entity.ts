import { Entity, Column, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn } from 'typeorm';
import { BusinessModel } from '../models/business.model';
import { CompanyEntity } from './company.entity';
import { AdministratorEntity } from './administrator.entity';
import { ManagerEntity } from './manager.entity';
import { AdvisorEntity } from './advisor.entity';
import { BrokerEntity } from './broker.entity';
import { SecretaryEntity } from './secretary.entity';
import { OwnerEntity } from './owner.entity';
import { CustomerEntity } from './customer.entity';
import { PropertyEntity } from './property.entity';

@Entity({
    schema: 'business',
    name: 'businesses'
})
export class BusinessEntity implements BusinessModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do negócio'
    })
    public id: number;

    @Column({
        name: 'status',
        type: 'smallint',
        nullable: false,
        comment: 'Status do negócio, onde: 0 - Prospecção, 1 - Visita, 2 - Proposta, 3 - Rejeitado e 4 - Fechado'
    })
    public status: number;

    @Column({
        name: 'date_visit',
        type: 'timestamp',
        default: null,
        nullable: true,
        comment: 'Data da visita ao imóvel referente ao negócio'
    })
    public dateVisit: Date;

    @Column({
        name: 'date_sale',
        type: 'timestamp',
        default: null,
        nullable: true,
        comment: 'Data da venda do imóvel referente ao negócio'
    })
    public dateSale: Date;

    @Column({
        name: 'visit_form',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do formulário de visita referente ao negócio'
    })
    public visitForm: string;

    @Column({
        name: 'property_registration',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo da matrícula do imóvel referente ao negócio'
    })
    public propertyRegistration: string;

    @Column({
        name: 'property_sale_contract',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do contrato de venda referente ao negócio'
    })
    public propertySaleContract: string;

    @Column({
        name: 'itbi',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do documento de quitação de ITBI referente ao negócio'
    })
    public ITBI: string;

    @Column({
        name: 'customer_rg',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do RG do cliente referente ao negócio'
    })
    public customerRG: string;

    @Column({
        name: 'customer_cpf',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do CPF do cliente referente ao negócio'
    })
    public customerCPF: string;

    @Column({
        name: 'customer_address_proof',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do comprovante de endereço do cliente referente ao negócio'
    })
    public customerAddressProof: string;

    @Column({
        name: 'customer_payslip',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do contra cheque do cliente referente ao negócio'
    })
    public customerPayslip: string;

    @Column({
        name: 'owner_rg',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do RG do proprietário referente ao negócio'
    })
    public ownerRG: string;

    @Column({
        name: 'owner_cpf',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do CPF do proprietário referente ao negócio'
    })
    public ownerCPF: string;

    @Column({
        name: 'owner_address_proof',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do comprovante de endereço do proprietário referente ao negócio'
    })
    public ownerAddressProof: string;

    @Column({
        name: 'owner_payslip',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Caminho relativo do contra cheque do proprietário referente ao negócio'
    })
    public ownerPayslip: string;

    @Column({
        name: 'created_by_administrator',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação da criação do negócio por um administrador'
    })
    public createdByAdministrator: boolean;

    @Column({
        name: 'created_by_manager',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação da criação do negócio por um gestor'
    })
    public createdByManager: boolean;

    @Column({
        name: 'created_by_secretary',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação da criação do negócio por uma secretária'
    })
    public createdBySecretary: boolean;

    @Column({
        name: 'redirected_manager_id',
        type: 'int',
        default: null,
        nullable: true,
        comment: 'Código sequencial único do gestor para o qual o negócio foi redirecionado'
    })
    public redirectedManagerId: number;

    @Column({
        name: 'redirected_advisor_id',
        type: 'int',
        default: null,
        nullable: true,
        comment: 'Código sequencial único do despachante para o qual o negócio foi redirecionado'
    })
    public redirectedAdvisorId: number;

    @Column({
        name: 'redirected_broker_id',
        type: 'int',
        default: null,
        nullable: true,
        comment: 'Código sequencial único da secretária para o qual o negócio foi redirecionado'
    })
    public redirectedBrokerId: number;

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

    @OneToOne(() => OwnerEntity)
    @JoinColumn({ name: 'owner_id' })
    public owner: OwnerEntity;

    @OneToOne(() => CustomerEntity)
    @JoinColumn({ name: 'customer_id' })
    public customer: CustomerEntity;

    @OneToOne(() => PropertyEntity)
    @JoinColumn({ name: 'property_id' })
    public property: PropertyEntity;

    constructor() { }

    @BeforeInsert()
    @BeforeUpdate()
    public convertDatesToTimestamp(): void {
        if (this.dateVisit) this.dateVisit = new Date(this.dateVisit);
        if (this.dateSale) this.dateSale = new Date(this.dateSale);
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