import { Entity, Column, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn } from 'typeorm';
import { SecretaryModel } from '../models/secretary.model';
import { CompanyEntity } from './company.entity';

@Entity({
    schema: 'persons',
    name: 'secretaries'
})
export class SecretaryEntity implements SecretaryModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único da secretária'
    })
    public id: number;

    @Column({
        name: 'name',
        type: 'text',
        nullable: false,
        comment: 'Nome da secretária'
    })
    public name: string;

    @Column({
        name: 'surname',
        type: 'text',
        nullable: false,
        comment: 'Sobrenome da secretária'
    })
    public surname: string;

    @Column({
        name: 'email',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'E-mail da secretária'
    })
    public email: string;

    @Column({
        name: 'birth_date',
        type: 'date',
        nullable: false,
        comment: 'Data de nascimento da secretária'
    })
    public birthDate: Date;

    @Column({
        name: 'is_secretary',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o registro é uma secretária'
    })
    public isSecretary: boolean;

    @Column({
        name: 'rg',
        type: 'text',
        nullable: false,
        comment: 'Número do RG da secretária'
    })
    public rg: string;

    @Column({
        name: 'cpf',
        type: 'text',
        nullable: false,
        comment: 'Número do CPF da secretária'
    })
    public cpf: string;

    @Column({
        name: 'landline',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Telefone fixo da secretária'
    })
    public landline: string;

    @Column({
        name: 'cell_phone',
        type: 'text',
        nullable: false,
        comment: 'Telefone celular da secretária'
    })
    public cellPhone: string;

    @Column({
        name: 'profession',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Profissão da secretária'
    })
    public profession: string;

    @Column({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        comment: 'Data de criação do registro'
    })
    public createdAt: Date;

    @Column({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        comment: 'Data de atualização do registro'
    })
    public updatedAt: Date;

    @OneToOne(() => CompanyEntity)
    @JoinColumn({ name: 'company_id' })
    public company: CompanyEntity;

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