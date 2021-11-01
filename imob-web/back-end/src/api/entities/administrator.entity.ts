import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { AdministratorModel } from '../models/administrator.model';

@Entity({
    schema: 'persons',
    name: 'administrators'
})
export class AdministratorEntity implements AdministratorModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do administrador'
    })
    public id: number;

    @Column({
        name: 'name',
        type: 'text',
        nullable: false,
        comment: 'Nome do administrador'
    })
    public name: string;

    @Column({
        name: 'surname',
        type: 'text',
        nullable: false,
        comment: 'Sobrenome do administrador'
    })
    public surname: string;

    @Column({
        name: 'email',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'E-mail do administrador'
    })
    public email: string;

    @Column({
        name: 'birth_date',
        type: 'date',
        nullable: false,
        comment: 'Data de nascimento do administrador'
    })
    public birthDate: Date;

    @Column({
        name: 'is_administrator',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o registro é um administrador'
    })
    public isAdministrator: boolean;

    @Column({
        name: 'rg',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Número do RG do administrador'
    })
    public rg: string;

    @Column({
        name: 'cpf',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Número do CPF do administrador'
    })
    public cpf: string;

    @Column({
        name: 'landline',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Telefone fixo do administrador'
    })
    public landline: string;

    @Column({
        name: 'cell_phone',
        type: 'text',
        nullable: false,
        comment: 'Telefone celular do administrador'
    })
    public cellPhone: string;

    @Column({
        name: 'profession',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Profissão do administrador'
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

    constructor() { }

    @BeforeInsert()
    @BeforeUpdate()
    public setCreatedAt(): void {
        this.createdAt = new Date();
    }

    @BeforeInsert()
    @BeforeUpdate()
    public setUpdatedAt(): void {
        this.updatedAt = new Date();
    }

}