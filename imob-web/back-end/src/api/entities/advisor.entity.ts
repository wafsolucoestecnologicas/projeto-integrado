import { Entity, Column, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn } from 'typeorm';
import { AdvisorModel } from '../models/advisor.model';
import { CompanyEntity } from './company.entity';

@Entity({
    schema: 'persons',
    name: 'advisors'
})
export class AdvisorEntity implements AdvisorModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do despachante'
    })
    public id: number;

    @Column({
        name: 'name',
        type: 'text',
        nullable: false,
        comment: 'Nome do despachante'
    })
    public name: string;

    @Column({
        name: 'surname',
        type: 'text',
        nullable: false,
        comment: 'Sobrenome do despachante'
    })
    public surname: string;

    @Column({
        name: 'email',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'E-mail do despachante'
    })
    public email: string;

    @Column({
        name: 'birth_date',
        type: 'date',
        nullable: false,
        comment: 'Data de nascimento do despachante'
    })
    public birthDate: Date;

    @Column({
        name: 'is_advisor',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o registro é um despachante'
    })
    public isAdvisor: boolean;

    @Column({
        name: 'rg',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Número do RG do despachante'
    })
    public rg: string;

    @Column({
        name: 'cpf',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Número do CPF do despachante'
    })
    public cpf: string;

    @Column({
        name: 'landline',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Telefone fixo do despachante'
    })
    public landline: string;

    @Column({
        name: 'cell_phone',
        type: 'text',
        nullable: false,
        comment: 'Telefone celular do despachante'
    })
    public cellPhone: string;

    @Column({
        name: 'profession',
        type: 'text',
        default: null,
        nullable: true,
        comment: 'Profissão do despachante'
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