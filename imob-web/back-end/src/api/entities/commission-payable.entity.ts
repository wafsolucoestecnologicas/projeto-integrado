import { Entity, Column, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn } from 'typeorm';
import { CommissionPayableModel } from '../models/commission-payable.model';
import { CompanyEntity } from './company.entity';
import { BrokerEntity } from './broker.entity';
import { PropertyEntity } from './property.entity';

@Entity({
    schema: 'commission',
    name: 'commissions_payable'
})
export class CommissionPayable implements CommissionPayableModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único da comissão à pagar'
    })
    public id: number;

    @Column({
        name: 'date',
        type: 'date',
        nullable: false,
        comment: 'Data da venda do imóvel que garante a comissão à pagar'
    })
    public date: Date;

    @Column({
        name: 'value_closed_deals',
        type: 'numeric',
        nullable: false,
        comment: 'Valor da comissão à pagar por negócios fechados'
    })
    public valueClosedDeals: number;

    @Column({
        name: 'value_property_acquisition',
        type: 'numeric',
        nullable: false,
        comment: 'Valor da comissão à pagar por imóveis captados'
    })
    public valuePropertyCaptured: number;

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

    @OneToOne(() => BrokerEntity)
    @JoinColumn({ name: 'broker_id' })
    public broker: BrokerEntity;

    @OneToOne(() => PropertyEntity)
    @JoinColumn({ name: 'property_id' })
    public property: PropertyEntity;

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