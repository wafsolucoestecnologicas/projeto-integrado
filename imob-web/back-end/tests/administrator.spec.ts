import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { AdministratorEntity } from "../src/api/entities/administrator.entity";
import { AdministratorService } from "../src/api/services/administrator.service";

describe("Suíte de testes do módulo de administrador", () => {
  let connection: Connection;
  let administrator: AdministratorEntity;
  let service: AdministratorService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new AdministratorService();
  });

  beforeEach(() => {
    administrator = new AdministratorEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais administradores", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdministratorEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo administrador", async () => {
    const expected = administrator;

    administrator.name = "noah";
    administrator.surname = "guilherme";
    administrator.email = "noah.guilherme@gmail.com";
    administrator.birthDate = new Date("1993-01-14");
    administrator.RG = "254540284";
    administrator.CPF = "96014054294";
    administrator.landline = "";
    administrator.cellPhone = "31993557189";
    administrator.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdministratorEntity = await service.create(administrator, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um administrador de uma imobiliária", async () => {
    const expected = administrator;
    const id = 1;

    administrator.id = 1;
    administrator.name = "anderson";
    administrator.surname = "nelson";
    administrator.email = "anderson.nelson@gmail.com";
    administrator.birthDate = new Date("2022-03-27");
    administrator.isAdministrator = true;
    administrator.RG = "000000000";
    administrator.CPF = "00000000000";
    administrator.landline = "";
    administrator.cellPhone = "00000000000";
    administrator.profession = "";
    administrator.createdAt = new Date("2022-03-27 10:46:06.675");
    administrator.updatedAt = new Date("2022-03-27 10:46:06.675");

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdministratorEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um administrador de uma imobiliária", async () => {
    const expected = administrator;
    const id = 1;

    administrator.name = "anderson";
    administrator.surname = "nelson";
    administrator.email = "anderson.nelson@gmail.com";
    administrator.birthDate = new Date("2022-03-27");
    administrator.isAdministrator = true;
    administrator.RG = "000000000";
    administrator.CPF = "00000000000";
    administrator.landline = "";
    administrator.cellPhone = "00000000000";
    administrator.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdministratorEntity = await service.update(id, administrator, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um administrador de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um administrador", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as AdministratorEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um administrador cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "00000000000";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um administrador cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
