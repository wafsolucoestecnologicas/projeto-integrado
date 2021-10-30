import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSchemaCommission1635606059619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('commission', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('commission');
    }

}
