import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchemaCommission1634435138372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('commission', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('commission');
    }

}
