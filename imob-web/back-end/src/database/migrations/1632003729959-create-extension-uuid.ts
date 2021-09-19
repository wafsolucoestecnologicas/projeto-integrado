import { MigrationInterface, QueryRunner } from "typeorm";

export class createExtensionUuid1632003729959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
