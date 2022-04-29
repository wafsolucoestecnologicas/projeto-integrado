import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { ManagerEntity } from "../src/api/entities/manager.entity";
import { BrokerEntity } from "../src/api/entities/broker.entity";
import { PropertyEntity } from "../src/api/entities/property.entity";
import { OwnerEntity } from "../src/api/entities/owner.entity";
import { CustomerEntity } from "../src/api/entities/customer.entity";
import { LeadEntity } from "../src/api/entities/lead.entity";
import { BusinessEntity } from "../src/api/entities/business.entity";
import { BusinessService } from "../src/api/services/business.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de negócio", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let manager: ManagerEntity;
  let broker: BrokerEntity;
  let owner: OwnerEntity;
  let customer: CustomerEntity;
  let property: PropertyEntity;
  let lead: LeadEntity;
  let business: BusinessEntity;
  let service: BusinessService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new BusinessService();
  });

  beforeEach(() => {
    payload = new Payload();
    company = new CompanyEntity();
    manager = new ManagerEntity();
    broker = new BrokerEntity();
    owner = new OwnerEntity();
    customer = new CustomerEntity();
    property = new PropertyEntity();
    lead = new LeadEntity();
    business = new BusinessEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais negócios de uma imobiliária", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: BusinessEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo negócio", async () => {
    const expected = business;

    company.id = 1;
    manager.id = 1;
    broker.id = 2;
    owner.id = 1;
    customer.id = 1;
    property.id = 1;
    lead.id = 1;

    business.status = 0;
    business.dateVisit = new Date('2022-03-15');
    business.dateSale = new Date('2022-03-25');
    business.visitForm = '';
    business.propertyRegistration = '';
    business.propertySaleContract = '';
    business.ITBI = '';
    business.customerRG = '';
    business.customerCPF = '';
    business.customerAddressProof = '';
    business.customerPayslip = '';
    business.ownerRG = '';
    business.ownerCPF = '';
    business.ownerAddressProof = '';
    business.ownerPayslip = '';
    business.createdByAdministrator = false;
    business.createdByManager = true;
    business.createdBySecretary = false;
    business.redirectedManagerId = 1;
    business.redirectedAdvisorId = 0;
    business.redirectedBrokerId = 0;
    business.company = company;
    business.manager = manager;
    business.broker = broker;
    business.owner = owner;
    business.customer = customer;
    business.property = property;
    business.lead = lead;

    connection.transaction(async (transaction: EntityManager) => {
      const result: BusinessEntity = await service.create(business, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um negócio de uma imobiliária", async () => {
    const expected = property;
    const id = 1;

    company.id = 1;
    manager.id = 1;
    broker.id = 2;
    owner.id = 1;
    customer.id = 1;
    property.id = 1;
    lead.id = 1;

    business.status = 0;
    business.dateVisit = new Date('2022-03-15');
    business.dateSale = new Date('2022-03-25');
    business.visitForm = '';
    business.propertyRegistration = '';
    business.propertySaleContract = '';
    business.ITBI = '';
    business.customerRG = '';
    business.customerCPF = '';
    business.customerAddressProof = '';
    business.customerPayslip = '';
    business.ownerRG = '';
    business.ownerCPF = '';
    business.ownerAddressProof = '';
    business.ownerPayslip = '';
    business.createdByAdministrator = false;
    business.createdByManager = true;
    business.createdBySecretary = false;
    business.redirectedManagerId = 0;
    business.redirectedAdvisorId = 0;
    business.redirectedBrokerId = 1;
    business.company = company;
    business.manager = manager;
    business.broker = broker;
    business.owner = owner;
    business.customer = customer;
    business.property = property;
    business.lead = lead;
    business.createdAt = new Date('2022-03-28 08:45:46.928');
    business.updatedAt = new Date('2022-03-28 08:45:46.928');

    connection.transaction(async (transaction: EntityManager) => {
      const result: BusinessEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um negócio de uma imobiliária", async () => {
    const expected = property;
    const id = 1;

    company.id = 1;
    manager.id = 1;
    broker.id = 2;
    owner.id = 1;
    customer.id = 1;
    property.id = 1;
    lead.id = 1;

    business.status = 0;
    business.dateVisit = new Date('2022-03-15');
    business.dateSale = new Date('2022-03-25');
    business.visitForm = '';
    business.propertyRegistration = '';
    business.propertySaleContract = '';
    business.ITBI = '';
    business.customerRG = '';
    business.customerCPF = '';
    business.customerAddressProof = '';
    business.customerPayslip = '';
    business.ownerRG = '';
    business.ownerCPF = '';
    business.ownerAddressProof = '';
    business.ownerPayslip = '';
    business.createdByAdministrator = false;
    business.createdByManager = true;
    business.createdBySecretary = false;
    business.redirectedManagerId = 0;
    business.redirectedAdvisorId = 0;
    business.redirectedBrokerId = 1;
    business.company = company;
    business.manager = manager;
    business.broker = broker;
    business.owner = owner;
    business.customer = customer;
    business.property = property;
    business.lead = lead;

    connection.transaction(async (transaction: EntityManager) => {
      const result: BusinessEntity = await service.update(id, business, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um negócio de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um negócio", () => {
    const expected = true;
    const actual = service.validateData({
      status: 0,
      dateVisit: new Date('2022-03-15'),
      dateSale: new Date('2022-03-25'),
      visitForm: '',
      propertyRegistration: '',
      propertySaleContract: '',
      ITBI: '',
      customerRG: '',
      customerCPF: '',
      customerAddressProof: '',
      customerPayslip: '',
      ownerRG: '',
      ownerCPF: '',
      ownerAddressProof: '',
      ownerPayslip: '',
      createdByAdministrator: false,
      createdByManager: true,
      createdBySecretary: false,
      redirectedManagerId: 0,
      redirectedAdvisorId: 0,
      redirectedBrokerId: 1
    } as BusinessEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um negócio cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
