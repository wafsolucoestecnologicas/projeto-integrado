import { MigrationInterface, QueryRunner } from "typeorm";

export class insertTableProfiles1632907113360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'administrator', true, '{"create": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "read": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "update": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "delete": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"]}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'manager', false, '{"create": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "read": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "update": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "delete": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses"]}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'advisor', false, '{"create": [], "read": ["managers", "owners", "customers", "properties", "leads", "businesses"], "update": ["businesses"], "delete": []}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'broker', false, '{"create": ["owners", "customers", "properties"], "read": ["managers", "secretaries", "owners", "customers", "properties", "leads", "businesses"], "update": ["owners", "customers", "properties", "businesses"], "delete": []}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'secretary', false, '{"create": ["owners", "customers", "properties", "leads", "businesses"], "read": ["brokers", "owners", "customers", "properties", "leads", "businesses"], "update": ["owners", "customers", "properties", "leads", "businesses"], "delete": ["owners", "customers", "properties", "leads"]}', NOW(), NOW())`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('TRUNCATE TABLE authentication.profiles');
    }

}
