import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableNeighborhoods1634505226522 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'public',
                name: 'neighborhoods',
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
                        name: 'city_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_city_id',
                        columnNames: ['city_id'],
                        referencedSchema: 'public',
                        referencedTableName: 'public.cities',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('public.neighborhoods');
    }

}
