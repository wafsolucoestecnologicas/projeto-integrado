import { MigrationInterface, QueryRunner } from 'typeorm';

export class createInsertTableProfiles1635608772072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'administrator', true, '{"create": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "read": ["administrators", "users", "profiles", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "update": ["administrators", "users", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "delete": ["administrators", "users", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "amount": ["leads", "businesses"], "search": ["leads", "businesses", "adresses"], "transfer": ["businesses"], "reject": ["businesses"], "close": ["businesses"], "upload": ["properties", "businesses"], "download": ["properties", "businesses"], "receivable": ["commissions-receivable"], "payable": ["commissions-payable"]}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'manager', false, '{"create": ["companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "read": ["users", "profiles", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "update": ["users", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "delete": ["users","companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-receivable", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "amount": ["leads", "businesses"], "search": ["leads", "businesses", "adresses"], "transfer": ["businesses"], "reject": ["businesses"], "close": ["businesses"], "upload": ["properties", "businesses"], "download": ["properties", "businesses"], "receivable": ["commissions-receivable"], "payable": ["commissions-payable"]}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'advisor', false, '{"create": ["commissions-receivable", "adresses", "neighborhoods", "cities", "states"], "read": ["profiles", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "adresses", "neighborhoods", "cities", "states"], "update": ["businesses", "adresses", "neighborhoods", "cities", "states"], "delete": ["adresses", "neighborhoods", "cities", "states"], "amount": ["leads", "businesses"], "search": ["leads", "businesses", "adresses"], "transfer": [], "reject": ["businesses"], "close": ["businesses"], "upload": ["properties", "businesses"], "download": ["properties", "businesses"], "receivable": [], "payable": []}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'broker', false, '{"create": ["owners", "customers", "properties", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "read": ["profiles", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "commissions-payable", "adresses", "neighborhoods", "cities", "states"], "update": ["owners", "customers", "properties", "businesses", "adresses", "neighborhoods", "cities", "states"], "delete": ["adresses", "neighborhoods", "cities", "states"], "amount": ["leads", "businesses"], "search": ["leads", "businesses", "adresses"], "transfer": ["businesses"], "reject": [], "close": [], "upload": ["properties", "businesses"], "download": ["properties", "businesses"], "receivable": [], "payable": ["commissions-payable"]}', NOW(), NOW())`);
        await queryRunner.query(`INSERT INTO authentication.profiles VALUES (DEFAULT, 'secretary', false, '{"create": ["owners", "customers", "properties", "leads", "businesses", "adresses", "neighborhoods", "cities", "states"], "read": ["profiles", "companies", "managers", "advisors", "brokers", "secretaries", "owners", "customers", "properties", "leads", "businesses", "adresses", "neighborhoods", "cities", "states"], "update": ["owners", "customers", "properties", "leads", "businesses", "adresses", "neighborhoods", "cities", "states"], "delete": ["owners", "customers", "properties", "leads", "adresses", "neighborhoods", "cities", "states"], "amount": ["leads", "businesses"], "search": ["leads", "businesses", "adresses"], "transfer": ["businesses"], "reject": [], "close": [], "receivable": [], "payable": []}', NOW(), NOW())`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('TRUNCATE TABLE authentication.profiles');
    }

}
