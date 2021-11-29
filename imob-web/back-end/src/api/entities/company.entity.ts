import { Entity, Column, AfterLoad, BeforeInsert, BeforeUpdate } from 'typeorm';
import { CompanyModel } from '../models/company.model';

@Entity({
    schema: 'business',
    name: 'companies'
})
export class CompanyEntity implements CompanyModel {

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
        nullable: false,
        comment: 'CNPJ da imobiliária'
    })
    public CNPJ: string;

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
    public percentageCommissionReceivable: number;

    @Column({
        name: 'percentage_commission_payable_for_closed_deals',
        type: 'numeric',
        nullable: true,
        comment: 'Percentual de comissão à pagar aos corretores pelas vendas de imóveis da imobiliária'
    })
    public percentageCommissionPayableForClosedDeals: number;

    @Column({
        name: 'percentage_commission_payable_for_property_captured',
        type: 'numeric',
        nullable: true,
        comment: 'Percentual de comissão à pagar aos corretores pelas captações de imóveis realizadas na imobiliária'
    })
    public percentageCommissionPayableForPropertyCaptured: number;

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

    @AfterLoad()
    public convertValuesToNumber(): void {
        if (this.percentageCommissionReceivable)
            this.percentageCommissionReceivable = Number(this.percentageCommissionReceivable);
        if (this.percentageCommissionPayableForClosedDeals)
            this.percentageCommissionPayableForClosedDeals = Number(this.percentageCommissionPayableForClosedDeals);
        if (this.percentageCommissionPayableForPropertyCaptured)
            this.percentageCommissionPayableForPropertyCaptured = Number(this.percentageCommissionPayableForPropertyCaptured);
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