import { Entity, Column, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn, AfterLoad } from 'typeorm';
import { CommissionReceivableModel } from '../models/commission-receivable.model';
import { CompanyEntity } from './company.entity';
import { PropertyEntity } from './property.entity';

@Entity({
    schema: 'commission',
    name: 'commissions_receivable'
})
export class CommissionReceivableEntity implements CommissionReceivableModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único da comissão à receber'
    })
    public id: number;

    @Column({
        name: 'date',
        type: 'date',
        nullable: false,
        comment: 'Data da venda do imóvel que garante a comissão à receber'
    })
    public date: Date;

    @Column({
        name: 'value',
        type: 'numeric',
        nullable: false,
        comment: 'Valor da comissão à receber'
    })
    public value: number;

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

    @OneToOne(() => PropertyEntity)
    @JoinColumn({ name: 'property_id' })
    public property: PropertyEntity;

    constructor() { }

    @AfterLoad()
    public convertValuesToNumber(): void {
        if (this.value) this.value = Number(this.value);
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