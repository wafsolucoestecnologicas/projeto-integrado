import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDatabaseImobWeb1635605772779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('imob_web', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase('imob_web');
    }

}
