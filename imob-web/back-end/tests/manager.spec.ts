import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { ManagerEntity } from "../src/api/entities/manager.entity";
import { ManagerService } from "../src/api/services/manager.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de gestor", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let manager: ManagerEntity;
  let service: ManagerService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new ManagerService();
  });

  beforeEach(() => {
    payload = new Payload();
    manager = new ManagerEntity();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais gestores de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: ManagerEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo gestor", async () => {
    const expected = manager;

    company.id = 1;

    manager.name = "manuel";
    manager.surname = "renato";
    manager.email = "manuel.renato@gmail.com";
    manager.birthDate = new Date("1999-03-26");
    manager.RG = "424024007";
    manager.CPF = "44468770384";
    manager.landline = "";
    manager.cellPhone = "31987901406";
    manager.profession = "";
    manager.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: ManagerEntity = await service.create(manager, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um gestor de uma imobiliária", async () => {
    const expected = manager;
    const id = 1;

    company.id = 1;
    payload.company = company;

    manager.id = 1;
    manager.name = "wellington";
    manager.surname = "felix";
    manager.email = "wellington.felix@gmail.com";
    manager.birthDate = new Date("1989-06-16");
    manager.isManager = true;
    manager.RG = "309887689";
    manager.CPF = "87274531972";
    manager.landline = "3133228455";
    manager.cellPhone = "31986857811";
    manager.profession = "Programador";
    manager.createdAt = new Date("2022-02-26 13:46:26.667");
    manager.updatedAt = new Date("2022-03-15 21:35:59.534");

    connection.transaction(async (transaction: EntityManager) => {
      const result: ManagerEntity | undefined = await service.read(id, payload);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um gestor de uma imobiliária", async () => {
    const expected = manager;
    const id = 1;

    manager.name = "wellington";
    manager.surname = "felix";
    manager.email = "wellington.felix@gmail.com";
    manager.birthDate = new Date("1989-06-16");
    manager.isManager = true;
    manager.RG = "309887689";
    manager.CPF = "87274531972";
    manager.landline = "";
    manager.cellPhone = "31986857811";
    manager.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: ManagerEntity = await service.update(id, manager, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um gestor de uma imobiliária", async () => {
    const expected = 1;
    const id = 4;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um gestor", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as ManagerEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um gestor cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "87274531972";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um gestor cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
