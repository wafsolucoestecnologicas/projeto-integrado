import { Entity, Column, BeforeInsert, BeforeUpdate, JoinColumn, OneToOne } from 'typeorm';
import { LeadModel } from '../models/lead.model';
import { CompanyEntity } from './company.entity';
import { AdministratorEntity } from './administrator.entity';
import { ManagerEntity } from './manager.entity';
import { SecretaryEntity } from './secretary.entity';

@Entity({
    schema: 'business',
    name: 'leads'
})
export class LeadEntity implements LeadModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único da lead'
    })
    public id: number;

    @Column({
        name: 'name',
        type: 'text',
        nullable: false,
        comment: 'Nome do contato na lead'
    })
    public name: string;

    @Column({
        name: 'surname',
        type: 'text',
        nullable: false,
        comment: 'Sobrenome do contato na lead'
    })
    public surname: string;

    @Column({
        name: 'email',
        type: 'int',
        unique: true,
        nullable: false,
        comment: 'E-mail do contato na lead'
    })
    public email: string;

    @Column({
        name: 'source',
        type: 'smallint',
        nullable: false,
        comment: 'Origem do contato na lead, onde: 0 - Imobiliária, 1 - Telefone, 2 - Anúncios, 3 - Internet e 4 - Whatsapp'
    })
    public source: number;

    @Column({
        name: 'landline',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Telefone fixo do contato na lead'
    })
    public landline: string;

    @Column({
        name: 'cell_phone',
        type: 'text',
        nullable: false,
        comment: 'Telefone celular do contato na lead'
    })
    public cellPhone: string;

    @Column({
        name: 'comments',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Observações do contato na lead'
    })
    public comments: string;

    @Column({
        name: 'created_by_administrator',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação da criação da lead por um administrador'
    })
    public createdByAdministrator: boolean;

    @Column({
        name: 'created_by_manager',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação da criação da lead por um gestor'
    })
    public createdByManager: boolean;

    @Column({
        name: 'created_by_secretary',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação da criação da lead por uma secretária'
    })
    public createdBySecretary: boolean;

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

    @OneToOne(() => SecretaryEntity)
    @JoinColumn({ name: 'secretary_id' })
    public secretary?: SecretaryEntity;

    constructor() { }

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