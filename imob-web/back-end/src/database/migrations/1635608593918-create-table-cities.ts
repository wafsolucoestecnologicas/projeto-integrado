import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableCities1635608593918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'public',
                name: 'cities',
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
                        name: 'state_id',
                        type: 'integer',
                        isNullable: false
                    },
                    {
                        name: 'city',
                        type: 'varchar(100)',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_state_id',
                        columnNames: ['state_id'],
                        referencedSchema: 'public',
                        referencedTableName: 'public.states',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('public.cities');
    }

}
