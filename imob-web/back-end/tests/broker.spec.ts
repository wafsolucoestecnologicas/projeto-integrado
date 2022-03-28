import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { BrokerEntity } from "../src/api/entities/broker.entity";
import { BrokerService } from "../src/api/services/broker.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de corretor", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let broker: BrokerEntity;
  let service: BrokerService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new BrokerService();
  });

  beforeEach(() => {
    payload = new Payload();
    broker = new BrokerEntity();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais corretores de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: BrokerEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo corretor", async () => {
    const expected = broker;

    company.id = 1;

    broker.name = "felipe";
    broker.surname = "sérgio";
    broker.email = "felipe.sergio@gmail.com";
    broker.birthDate = new Date("2001-01-21");
    broker.RG = "126351843";
    broker.CPF = "70625154428";
    broker.landline = "";
    broker.cellPhone = "31991345844";
    broker.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: BrokerEntity = await service.create(broker, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um corretor de uma imobiliária", async () => {
    const expected = broker;
    const id = 2;

    company.id = 1;
    payload.company = company;

    broker.id = 2;
    broker.name = "manuel";
    broker.surname = "luís";
    broker.email = "manuel.luis@gmail.com";
    broker.birthDate = new Date("1989-06-16");
    broker.isBroker = true;
    broker.RG = "491422647";
    broker.CPF = "20603720382";
    broker.landline = "3133228544";
    broker.cellPhone = "31986857888";
    broker.profession = "Corretor";
    broker.createdAt = new Date("2022-03-12 16:32:47.833");
    broker.updatedAt = new Date("2022-03-12 21:42:29.588");

    connection.transaction(async (transaction: EntityManager) => {
      const result: BrokerEntity | undefined = await service.read(id, payload);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um corretor de uma imobiliária", async () => {
    const expected = broker;
    const id = 1;

    broker.name = "manuel";
    broker.surname = "luís";
    broker.email = "manuel.luis@gmail.com";
    broker.birthDate = new Date("1989-06-16");
    broker.isBroker = true;
    broker.RG = "491422647";
    broker.CPF = "20603720382";
    broker.landline = "";
    broker.cellPhone = "31986857888";
    broker.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: BrokerEntity = await service.update(id, broker, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um corretor de uma imobiliária", async () => {
    const expected = 1;
    const id = 2;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um corretor", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as BrokerEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um corretor cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "20603720382";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um corretor cadastrado através do ID", async () => {
    const expected = true;
    const id = 2;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
