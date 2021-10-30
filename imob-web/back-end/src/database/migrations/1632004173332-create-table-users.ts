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
                        name: 'company_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'profile_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'person_id',
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
                        name: 'is_administrator',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'is_manager',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'is_advisor',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'is_broker',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'is_secretary',
                        type: 'boolean',
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
                        name: 'fk_company_id',
                        columnNames: ['company_id'],
                        referencedSchema: 'business',
                        referencedTableName: 'business.companies',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_profile_id',
                        columnNames: ['profile_id'],
                        referencedSchema: 'authentication',
                        referencedTableName: 'authentication.profiles',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_administrator_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.administrators',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_manager_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.managers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_advisor_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.advisors',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_broker_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.brokers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_secretary_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.secretaries',
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
