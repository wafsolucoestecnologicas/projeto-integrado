import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableAdministrators1635607762029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'persons',
                name: 'administrators',
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
                        name: 'is_administrator',
                        type: 'boolean',
                        default: true,
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
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('persons.administrators');
    }

}
