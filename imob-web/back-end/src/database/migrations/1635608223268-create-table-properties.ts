import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProperties1635608223268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'business',
                name: 'properties',
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
                        isNullable: false
                    },
                    {
                        name: 'administrator_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'manager_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'advisor_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'broker_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'secretary_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'checked',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'bedrooms',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'bathrooms',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'suites',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'parking_lots',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'elevator',
                        type: 'boolean',
                        default: false,
                        isNullable: true
                    },
                    {
                        name: 'terrain_area',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'building_area',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'total_util_terrain_area',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'condominium',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'iptu',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'value',
                        type: 'smallint',
                        default: 0,
                        isNullable: true
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
                        name: 'fk_administrator_id',
                        columnNames: ['administrator_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.administrators',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_manager_id',
                        columnNames: ['manager_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.managers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_broker_id',
                        columnNames: ['broker_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.brokers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_secretary_id',
                        columnNames: ['secretary_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.secretaries',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('business.properties');
    }

}
