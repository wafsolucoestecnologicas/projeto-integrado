import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableAddresses1634505236212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'public',
                name: 'addresses',
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
                        name: 'person_id',
                        type: 'integer',
                        default: null,
                        isNullable: true,
                    },
                    {
                        name: 'property_id',
                        type: 'integer',
                        default: null,
                        isNullable: true,
                    },
                    {
                        name: 'neighborhood_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'cep',
                        type: 'char(8)',
                        isNullable: false,
                    },
                    {
                        name: 'street',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                    {
                        name: 'complement',
                        type: 'varchar(50)',
                        isNullable: false,
                    },
                    {
                        name: 'number',
                        type: 'varchar(30)',
                        isNullable: false,
                    },
                    {
                        name: 'is_company',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_manager',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_advisor',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_broker',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_secretary',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_customer',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_owner',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'is_property',
                        type: 'boolean',
                        isNullable: false,
                    },
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
                    },
                    {
                        name: 'fk_customer_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.customers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_owner_id',
                        columnNames: ['person_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.owners',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_property_id',
                        columnNames: ['property_id'],
                        referencedSchema: 'business',
                        referencedTableName: 'business.properties',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_neighborhood_id',
                        columnNames: ['neighborhood_id'],
                        referencedSchema: 'public',
                        referencedTableName: 'public.neighborhoods',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('public.addresses');
    }

}