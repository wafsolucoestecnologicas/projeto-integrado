import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableBusinesses1635608350277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'business',
                name: 'businesses',
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
                        name: 'owner_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'customer_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'lead_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'property_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'status',
                        type: 'smallint',
                        isNullable: false
                    },
                    {
                        name: 'date_visit',
                        type: 'timestamp',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'date_sale',
                        type: 'timestamp',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'visit_form',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'property_registration',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'property_sale_contract',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'itbi',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'customer_rg',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'customer_cpf',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'customer_address_proof',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'customer_payslip',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'owner_rg',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'owner_cpf',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'owner_address_proof',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'owner_payslip',
                        type: 'varchar(200)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'created_by_administrator',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'created_by_manager',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'created_by_secretary',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'redirected_manager_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'redirected_advisor_id',
                        type: 'integer',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'redirected_broker_id',
                        type: 'integer',
                        default: null,
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
                        name: 'fk_advisor_id',
                        columnNames: ['advisor_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.advisors',
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
                    },
                    {
                        name: 'fk_owner_id',
                        columnNames: ['owner_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.owners',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_customer_id',
                        columnNames: ['customer_id'],
                        referencedSchema: 'persons',
                        referencedTableName: 'persons.customers',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_lead_id',
                        columnNames: ['lead_id'],
                        referencedSchema: 'business',
                        referencedTableName: 'business.leads',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: 'fk_property_id',
                        columnNames: ['property_id'],
                        referencedSchema: 'business',
                        referencedTableName: 'business.properties',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('business.businesses');
    }

}
