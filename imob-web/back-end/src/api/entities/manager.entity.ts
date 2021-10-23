import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { ManagerModel } from '../models/manager.model';

@Entity({
    schema: 'persons',
    name: 'managers'
})
export class ManagerEntity implements ManagerModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do gestor'
    })
    public id: number;

    @Column({
        name: 'name',
        type: 'text',
        nullable: false,
        comment: 'Nome do gestor'
    })
    public name: string;

    @Column({
        name: 'surname',
        type: 'text',
        nullable: false,
        comment: 'Sobrenome do gestor'
    })
    public surname: string;

    @Column({
        name: 'email',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'E-mail do gestor'
    })
    public email: string;

    @Column({
        name: 'birth_date',
        type: 'date',
        nullable: false,
        comment: 'Data de nascimento do gestor'
    })
    public birthDate: Date;

    @Column({
        name: 'is_manager',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o registro é um gestor'
    })
    public isManager: boolean;

    @Column({
        name: 'rg',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Número do RG do gestor'
    })
    public rg: string;

    @Column({
        name: 'cpf',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Número do CPF do gestor'
    })
    public cpf: string;

    @Column({
        name: 'landline',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Telefone fixo do gestor'
    })
    public landline: string;

    @Column({
        name: 'cell_phone',
        type: 'text',
        nullable: false,
        comment: 'Telefone celular do gestor'
    })
    public cellPhone: string;

    @Column({
        name: 'profession',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Profissão do gestor'
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