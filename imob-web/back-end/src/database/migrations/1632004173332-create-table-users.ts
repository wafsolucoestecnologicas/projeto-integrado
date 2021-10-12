import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableUsers1632004173332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'authentication',
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        isUnique: true,
                        generationStrategy: 'increment',
                        isNullable: false
                    },
                    {
                        name: 'profile_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'company_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'uuid',
                        type: 'uuid',
                        isGenerated: true,
                        isUnique: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                        isNullable: false
                    },
                    {
                        name: 'name',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'surname',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar(50)',
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'varchar(100)',
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_profile_id',
                        columnNames: ['profile_id'],
                        referencedTableName: 'authentication.profiles',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_company_id',
                        columnNames: ['company_id'],
                        referencedTableName: 'business.companies',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('authentication.users');
    }

}
