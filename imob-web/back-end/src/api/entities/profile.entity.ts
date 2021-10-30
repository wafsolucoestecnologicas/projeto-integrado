import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { ProfileModel } from '../models/profile.model';

@Entity({
    schema: 'authentication',
    name: 'profiles'
})
export class ProfileEntity implements ProfileModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial único do perfil do usuário'
    })
    public id: number;
    
    @Column({
        name: 'user_type',
        type: 'text',
        nullable: false,
        comment: 'Tipo de usuário, onde: 1 - Administrador, 2 - Gestor, 3 - Despachante, 4 - Corretor, 5 - Secretária'
    })
    public userType: string;

    @Column({
        name: 'is_admin',
        type: 'bool',
        nullable: false,
        comment: 'Confirmação se o perfil do usuário é de administrador'
    })
    public isAdmin: boolean;

    @Column({
        name: 'permissions',
        type: 'json',
        nullable: false,
        comment: 'Permissões do perfil do usuário no sistema'
    })
    public permissions: JSON;

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