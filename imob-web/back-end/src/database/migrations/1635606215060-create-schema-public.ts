import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSchemaPublic1635606215060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('public', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('public');
    }

}
