import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchemaPersons1634207117250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('persons', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('persons');
    }

}
