import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableAdvisors1635607863850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'persons',
                name: 'advisors',
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
                        name: 'birth_date',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'is_advisor',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'rg',
                        type: 'char(9)',
                        isNullable: false
                    },
                    {
                        name: 'cpf',
                        type: 'char(11)',
                        isNullable: false
                    },
                    {
                        name: 'landline',
                        type: 'char(10)',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'cell_phone',
                        type: 'char(11)',
                        isNullable: false
                    },
                    {
                        name: 'profession',
                        type: 'varchar(50)',
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
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('persons.advisors');
    }

}
