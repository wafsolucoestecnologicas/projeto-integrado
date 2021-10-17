import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity({
    schema: 'business',
    name: 'companies'
})
export class CompanyModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único da imobiliária'
    })
    public id: number;
    
    @Column({
        name: 'cnpj',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'CNPJ da imobiliária'
    })
    public cnpj: string;

    @Column({
        name: 'corporate_name',
        type: 'text',
        nullable: false,
        comment: 'Razão social da imobiliária'
    })
    public corporateName: string;

    @Column({
        name: 'state_registration',
        type: 'text',
        nullable: false,
        comment: 'Inscrição estadual da imobiliária'
    })
    public stateRegistration: string;

    @Column({
        name: 'percentage_commission_received',
        type: 'numeric',
        nullable: true,
        comment: 'Percentual de comissão à receber pelas vendas de imóveis da imobiliária'
    })
    public percentageCommissionReceived: number;

    @Column({
        name: 'percentage_commission_payable',
        type: 'numeric',
        nullable: true,
        comment: 'Percentual de comissão à pagar aos corretores pelas vendas e captação de imóveis da imobiliária'
    })
    public percentageCommissionPayable: number;

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