import { Entity, Column, JoinColumn, OneToOne, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

import { ProfileModel } from './profile.model';
import { CompanyModel } from './company.model';

@Entity({
    schema: 'authentication',
    name: 'users'
})
export class UserModel {

    @Column({
        name: 'id',
        type: 'int',
        primary: true,
        generated: 'increment',
        unique: true,
        nullable: false,
        comment: 'Código sequencial únido do usuário'
    })
    public id: number;

    @Column({
        name: 'profile_id',
        type: 'int',
        nullable: false,
        comment: 'Código sequencial único do perfil do usuário'
    })
    public profileId: number;

    @Column({
        name: 'company_id',
        type: 'int',
        nullable: false,
        comment: 'Código sequencial único da imobiliária do usuário'
    })
    public companyId: number;

    @Column({
        name: 'uuid',
        type: 'uuid',
        primary: false,
        generated: 'uuid',
        unique: true,
        nullable: false,
        comment: 'Código universal único do usuário'
    })
    public uuid: string;

    @Column({
        name: 'name',
        type: 'text',
        unique: false,
        nullable: false,
        comment: 'Nome do usuário'
    })
    public name: string;

    @Column({
        name: 'surname',
        type: 'text',
        unique: false,
        nullable: false,
        comment: 'Sobrenome do usuário'
    })
    public surname: string;

    @Column({
        name: 'email',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'E-mail do usuário'
    })
    public email: string;

    @Column({
        name: 'password',
        type: 'text',
        unique: true,
        nullable: false,
        comment: 'Senha do usuário'
    })
    public password: string;

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

    @OneToOne(() => ProfileModel)
    @JoinColumn()
    public profile: ProfileModel;

    @OneToOne(() => CompanyModel)
    @JoinColumn()
    public company: CompanyModel;

    constructor() { }

    @BeforeInsert()
    @BeforeUpdate()
    public encryptPassword(): void {
        this.password = bcrypt.hashSync(this.password, 8);
    }

}