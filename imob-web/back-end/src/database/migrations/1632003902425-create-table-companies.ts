import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableCompanies1632003902425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'business',
                name: 'companies',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar(14)',
                        isNullable: false
                    },
                    {
                        name: 'corporate_name',
                        type: 'varchar(256)',
                        isNullable: false
                    },
                    {
                        name: 'state_registration',
                        type: 'varchar(30)',
                        isNullable: false
                    },
                    {
                        name: 'percentage_commission_received',
                        type: 'numeric(21, 2)',
                        default: 0,
                        isNullable: true
                    },
                    {
                        name: 'percentage_commission_payable',
                        type: 'numeric(21, 2)',
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
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('business.companies');
    }

}
