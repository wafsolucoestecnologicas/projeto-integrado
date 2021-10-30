import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableStates1635608537001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'public',
                name: 'states',
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
                        name: 'state',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('public.states');
    }

}
