import { MigrationInterface, QueryRunner } from "typeorm";

export class createDatabase1632003673496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('imob_web', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase('imob_web');
    }

}
