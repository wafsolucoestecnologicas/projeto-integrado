import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableCommissionsReceiveble1635608413140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'commission',
                name: 'commissions_receiveble',
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
                        name: 'property_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'value',
                        type: 'numeric(21, 2)',
                        isNullable: false,
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
        await queryRunner.dropTable('commission.commissions_receive');
    }

}
