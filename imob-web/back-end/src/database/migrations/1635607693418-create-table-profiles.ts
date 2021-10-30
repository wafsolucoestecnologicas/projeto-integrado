import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProfiles1635607693418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'authentication',
                name: 'profiles',
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
                        name: 'user_type',
                        type: 'varchar(15)',
                        isNullable: false
                    },
                    {
                        name: 'is_admin',
                        type: 'boolean',
                        isNullable: false,
                        default: false
                    },
                    {
                        name: 'permissions',
                        type: 'json',
                        isNullable: false
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
        await queryRunner.dropTable('authentication.profiles');
    }

}
