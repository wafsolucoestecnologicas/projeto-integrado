import { Entity, Column, OneToOne, JoinColumn, AfterLoad } from 'typeorm';
import { NeighborhoodModel } from '../models/neighborhood.model';
import { CityEntity } from './city.entity';

@Entity({
    schema: 'public',
    name: 'neighborhoods'
})
export class NeighborhoodEntity implements NeighborhoodModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do bairro'
    })
    public id: number;

    @Column({
        name: 'neighborhood',
        type: 'text',
        nullable: false,
        comment: 'Nome do bairro'
    })
    public neighborhood: string;

    @OneToOne(() => CityEntity)
    @JoinColumn({ name: 'city_id' })
    public city: CityEntity;

    constructor() { }

    @AfterLoad()
    public convertNeighborhoodToUpperCase(): void {
        if (this.neighborhood) this.neighborhood = this.neighborhood.toUpperCase();
    }

}