import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchemaBusiness1632003815828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('business', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('business');
    }

}
