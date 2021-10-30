import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSchemaAuthentication1635605967130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('authentication', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('authentication');
    }

}
