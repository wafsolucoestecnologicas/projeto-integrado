import { Entity, Column, AfterLoad } from 'typeorm';
import { StateModel } from '../models/state.model';

@Entity({
    schema: 'public',
    name: 'states'
})
export class StateEntity implements StateModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do estado'
    })
    public id: number;

    @Column({
        name: 'state',
        type: 'text',
        nullable: false,
        comment: 'Nome do estado'
    })
    public state: string;

    @Column({
        name: 'uf',
        type: 'text',
        nullable: false,
        comment: 'Sigla do estado'
    })
    public UF: string;

    constructor() { }

    @AfterLoad()
    public convertStateToUpperCase(): void {
        if (this.state) this.state = this.state.toUpperCase();
    }

}