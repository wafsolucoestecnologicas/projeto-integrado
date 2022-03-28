import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { SecretaryEntity } from "../src/api/entities/secretary.entity";
import { SecretaryService } from "../src/api/services/secretary.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de secretária", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let secretary: SecretaryEntity;
  let service: SecretaryService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new SecretaryService();
  });

  beforeEach(() => {
    payload = new Payload();
    secretary = new SecretaryEntity();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por uma ou mais secretárias de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: SecretaryEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando uma nova secretária", async () => {
    const expected = secretary;

    company.id = 1;

    secretary.name = "vitória";
    secretary.surname = "priscila";
    secretary.email = "vitória.priscila@gmail.com";
    secretary.birthDate = new Date("1991-03-22");
    secretary.RG = "473001251";
    secretary.CPF = "24362096264";
    secretary.landline = "";
    secretary.cellPhone = "31388359081";
    secretary.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: SecretaryEntity = await service.create(secretary, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um secretária de uma imobiliária", async () => {
    const expected = secretary;
    const id = 6;

    company.id = 1;
    payload.company = company;

    secretary.id = 6;
    secretary.name = "lorena";
    secretary.surname = "teresinha";
    secretary.email = "lorena.teresinha@gmail.com";
    secretary.birthDate = new Date("1989-06-16");
    secretary.isSecretary = true;
    secretary.RG = "189554824";
    secretary.CPF = "85718872090";
    secretary.landline = "3133228544";
    secretary.cellPhone = "31986857777";
    secretary.profession = "Secretária";
    secretary.createdAt = new Date("2022-03-12 21:56:00.919");
    secretary.updatedAt = new Date("2022-03-12 22:06:40.84");

    connection.transaction(async (transaction: EntityManager) => {
      const result: SecretaryEntity | undefined = await service.read(id, payload);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um secretária de uma imobiliária", async () => {
    const expected = secretary;
    const id = 6;

    secretary.name = "lorena";
    secretary.surname = "teresinha";
    secretary.email = "lorena.teresinha@gmail.com";
    secretary.birthDate = new Date("1989-06-16");
    secretary.isSecretary = true;
    secretary.RG = "189554824";
    secretary.CPF = "85718872090";
    secretary.landline = "";
    secretary.cellPhone = "31986857777";
    secretary.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: SecretaryEntity = await service.update(id, secretary, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um secretária de uma imobiliária", async () => {
    const expected = 1;
    const id = 6;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um secretária", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as SecretaryEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um secretária cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "85718872090";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um secretária cadastrado através do ID", async () => {
    const expected = true;
    const id = 6;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
