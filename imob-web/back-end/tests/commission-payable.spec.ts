import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { BrokerEntity } from "../src/api/entities/broker.entity";
import { PropertyEntity } from "../src/api/entities/property.entity";
import { CommissionPayableEntity } from "../src/api/entities/commission-payable.entity";
import { CommissionPayableService } from "../src/api/services/commission-payable.service";
import { Payload } from "../utils/classes/payload.class";


describe("Suíte de testes do módulo de comissões a pagar", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let broker: BrokerEntity;
  let property: PropertyEntity;
  let payable: CommissionPayableEntity;
  let service: CommissionPayableService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new CommissionPayableService();
  });

  beforeEach(() => {
    payload = new Payload();
    company = new CompanyEntity();
    broker = new BrokerEntity();
    property = new PropertyEntity();
    payable = new CommissionPayableEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por uma ou mais comissões a pagar de uma imobiliária", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionPayableEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando uma nova comissão a pagar", async () => {
    const expected = payable;

    company.id = 1;
    broker.id = 2;
    property.id = 1;

    payable.date = new Date('2022-03-15');
    payable.valueClosedDeals = 1500;
    payable.valuePropertyCaptured = 0;
    payable.company = company;
    payable.broker = broker;
    payable.property = property;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionPayableEntity = await service.create(payable, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por uma comissão a pagar de uma imobiliária", async () => {
    const expected = payable;
    const id = 4;

    company.id = 1;
    broker.id = 2;
    property.id = 1;

    payable.date = new Date('2021-12-02');
    payable.valueClosedDeals = 0;
    payable.valuePropertyCaptured = 250;
    payable.company = company;
    payable.broker = broker;
    payable.property = property;
    payable.createdAt = new Date('2022-03-27 22:50:51.019');
    payable.updatedAt = new Date('2022-03-27 22:50:51.019');

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionPayableEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando uma comissão a pagar de uma imobiliária", async () => {
    const expected = payable;
    const id = 4;

    payable.date = new Date('2021-12-02');
    payable.valueClosedDeals = 0;
    payable.valuePropertyCaptured = 250;
    payable.company = company;
    payable.broker = broker;
    payable.property = property;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionPayableEntity = await service.update(id, payable, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando uma comissão a pagar de uma imobiliária", async () => {
    const expected = 1;
    const id = 4;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de uma comissão a pagar", () => {
    const expected = true;
    const actual = service.validateData({
        date: new Date('2021-12-02'),
        valueClosedDeals: 0,
        valuePropertyCaptured: 250
    } as CommissionPayableEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe uma comissão a pagar cadastrada através do ID", async () => {
    const expected = true;
    const id = 4;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
