import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { CityModel } from '../models/city.model';
import { StateEntity } from './state.entity';

@Entity({
    schema: 'public',
    name: 'cities'
})
export class CityEntity implements CityModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único da cidade'
    })
    public id: number;

    @Column({
        name: 'city',
        type: 'text',
        nullable: false,
        comment: 'Nome da cidade'
    })
    public city: string;

    @OneToOne(() => StateEntity)
    @JoinColumn({ name: 'state_id' })
    public state: StateEntity;

    constructor() { }

}