import { CompanyEntity } from "../../src/api/entities/company.entity";
import { AdministratorEntity } from "../../src/api/entities/administrator.entity";
import { ManagerEntity } from "../../src/api/entities/manager.entity";
import { AdvisorEntity } from "../../src/api/entities/advisor.entity";
import { BrokerEntity } from "../../src/api/entities/broker.entity";
import { SecretaryEntity } from "../../src/api/entities/secretary.entity";

export class Payload {

    public id: number;
    public uuid: string;
    public company: CompanyEntity;
    public name: string;
    public surname: string;
    public email: string;
    public isAdmin: boolean;
    public permissions: JSON;
    public administrator?: AdministratorEntity;
    public manager?: ManagerEntity;
    public advisor?: AdvisorEntity;
    public broker?: BrokerEntity;
    public secretary?: SecretaryEntity;
    public iat?: number;
    public exp?: number;

    constructor() {}

}