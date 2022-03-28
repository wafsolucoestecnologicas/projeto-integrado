import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { OwnerEntity } from "../src/api/entities/owner.entity";
import { OwnerService } from "../src/api/services/owner.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de proprietário", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let owner: OwnerEntity;
  let service: OwnerService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new OwnerService();
  });

  beforeEach(() => {
    payload = new Payload();
    owner = new OwnerEntity();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais proprietários de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: OwnerEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo proprietário", async () => {
    const expected = owner;

    company.id = 1;

    owner.name = "antonio";
    owner.surname = "ricardo";
    owner.email = "antonio.ricardo@gmail.com";
    owner.birthDate = new Date("1992-01-23");
    owner.RG = "481950072";
    owner.CPF = "11990527957";
    owner.landline = "";
    owner.cellPhone = "31983244670";
    owner.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: OwnerEntity = await service.create(owner, transaction);

      expect(result).toEqual(expected);
    });
  });

  test("Buscando por um proprietário de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    company.id = 1;
    payload.company = company;

    owner.id = 1;
    owner.name = "juan";
    owner.surname = "andre";
    owner.email = "ruan.andre@gmail.com";
    owner.birthDate = new Date("1988-03-15");
    owner.isOwner = true;
    owner.checked = true;
    owner.RG = "363514855";
    owner.CPF = "09703277497";
    owner.landline = "3133885544";
    owner.cellPhone = "31986857777";
    owner.profession = "arquiteto";
    owner.createdAt = new Date("2022-03-14 19:55:44.89");
    owner.updatedAt = new Date("2022-03-14 21:18:55.817");

    connection.transaction(async (transaction: EntityManager) => {
      const result: OwnerEntity | undefined = await service.read(id, payload);

      expect(result).toEqual(expected);
    });
  });

  test("Atualizando um proprietário de uma imobiliária", async () => {
    const expected = owner;
    const id = 1;

    owner.name = "juan";
    owner.surname = "andre";
    owner.email = "ruan.andre@gmail.com";
    owner.birthDate = new Date("1988-03-15");
    owner.isOwner = true;
    owner.checked = true;
    owner.RG = "363514855";
    owner.CPF = "09703277497";
    owner.landline = "";
    owner.cellPhone = "31986857777";
    owner.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: OwnerEntity = await service.update(id, owner, transaction);

      expect(result).toEqual(expected);
    });
  });

  test("Deletando um proprietário de uma imobiliária", async () => {
    const expected = { user: 1, owner: 1 };
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result).toEqual(expected);
    });
  });

  test("Validando dados de um proprietário", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as OwnerEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um proprietário cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "87880376305";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um proprietário cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
