import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { ProfileEntity } from "../src/api/entities/profile.entity";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { UserEntity } from "../src/api/entities/user.entity";
import { UserService } from "../src/api/services/user.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de usuário", () => {
  let connection: Connection;
  let payload: Payload;
  let profile: ProfileEntity;
  let company: CompanyEntity;
  let user: UserEntity;
  let service: UserService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new UserService();
  });

  beforeEach(() => {
    payload = new Payload();
    profile = new ProfileEntity();
    company = new CompanyEntity();
    user = new UserEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais usuários de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo usuário em uma imobiliária", async () => {
    const expected = user;

    profile.id = 2;
    company.id = 0;

    user.name = "vitor";
    user.surname = "nathan";
    user.email = "vitor.nathan@gmail.com";
    user.password = "12345678";
    user.profile = profile;
    user.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity = await service.create(user, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um usuário de uma imobiliária", async () => {
    const expected = user;
    const id = 2;

    company.id = 1;
    payload.company = company;

    user.name = "palloma";
    user.surname = "miranda";
    user.email = "palloma.miranda@gmail.com";
    user.isAdministrator = false;
    user.isManager = true;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-02-26 18:29:29.917");
    user.updatedAt = new Date("2022-02-26 18:29:29.917");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.read(id, payload);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um usuário de uma imobiliária", async () => {
    const expected = user;
    const id = 14;

    company.id = 1;
    user.name = "luana";
    user.surname = "cristina";

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity = await service.update(id, user, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um usuário de uma imobiliária", async () => {
    const expected = 1;
    const id = 14;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Buscando um usuário de uma imobiliária por e-mail", async () => {
    const expected = user;
    const email = "lorena.teresinha@gmail.com";

    company.id = 1;
    user.name = "lorena";
    user.surname = "teresinha";
    user.email = "lorena.teresinha@gmail.com";
    user.isAdministrator = false;
    user.isManager = false;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = true;
    user.createdAt = new Date("2022-03-12 21:56:00.956");
    user.updatedAt = new Date("2022-03-12 21:56:00.956");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.findByEmail(email);

      expect(result).toBe(expected);
    });
  });

  test("Buscando um usuário de uma imobiliária que seja administrador", async () => {
    const expected = user;
    const id = 15;

    user.id = 15;
    user.name = "anderson";
    user.surname = "nelson";
    user.email = "anderson.nelson@gmail.com";
    user.isAdministrator = true;
    user.isManager = false;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-03-27 10:46:06.74");
    user.updatedAt = new Date("2022-03-27 10:46:06.74");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.findByAdministrator(id);

      expect(result).toBe(expected);
    });
  });

  test("Buscando um usuário de uma imobiliária que seja gestor", async () => {
    const expected = user;
    const id = 7;

    user.id = 7;
    user.name = "jose";
    user.surname = "vitor";
    user.email = "jose.vitor@gmail.com";
    user.isAdministrator = false;
    user.isManager = true;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-03-06 11:43:11.707");
    user.updatedAt = new Date("2022-03-06 11:43:11.707");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.findByManager(id);

      expect(result).toBe(expected);
    });
  });

  test("Buscando um usuário de uma imobiliária que seja despachante", async () => {
    const expected = user;
    const id = 12;

    user.id = 12;
    user.name = "joaquem";
    user.surname = "levi";
    user.email = "joaquim.levi@gmail.com";
    user.isAdministrator = false;
    user.isManager = false;
    user.isAdvisor = true;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-03-12 15:13:07.464");
    user.updatedAt = new Date("2022-03-12 15:13:07.464");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.findByAdvisor(id);

      expect(result).toBe(expected);
    });
  });

  test("Buscando um usuário de uma imobiliária que seja corretor", async () => {
    const expected = user;
    const id = 13;

    user.id = 13;
    user.name = "manual";
    user.surname = "luis";
    user.email = "manual.luis@gmail.com";
    user.isAdministrator = false;
    user.isManager = false;
    user.isAdvisor = false;
    user.isBroker = true;
    user.isSecretary = false;
    user.createdAt = new Date("2022-03-12 16:32:47.88");
    user.updatedAt = new Date("2022-03-12 16:32:47.88");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.findByBroker(id);

      expect(result).toBe(expected);
    });
  });

  test("Buscando um usuário de uma imobiliária que seja secretária", async () => {
    const expected = user;
    const id = 15;

    user.id = 15;
    user.name = "anderson";
    user.surname = "nelson";
    user.email = "anderson.nelson@gmail.com";
    user.isAdministrator = false;
    user.isManager = false;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = true;
    user.createdAt = new Date("2022-03-27 10:46:06.74");
    user.updatedAt = new Date("2022-03-27 10:46:06.74");

    connection.transaction(async (transaction: EntityManager) => {
      const result: UserEntity | undefined = await service.findBySecretary(id);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se a senha de um usuário é válida", async () => {
    const expected = true;
    const password = "12345678";

    user.id = 1;
    user.name = "wellington";
    user.surname = "felix";
    user.email = "wellington.felix@gmail.com";
    user.password = "12345678";
    user.isAdministrator = false;
    user.isManager = true;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-02-26 13:46:26.736");
    user.updatedAt = new Date("2022-02-26 13:46:26.736");

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.validatePassword(user, password);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um usuário através do e-mail", async () => {
    const expected = true;
    const email = "wellington.felix@gmail.com";

    user.id = 1;
    user.name = "wellington";
    user.surname = "felix";
    user.email = "wellington.felix@gmail.com";
    user.isAdministrator = false;
    user.isManager = true;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-02-26 13:46:26.736");
    user.updatedAt = new Date("2022-02-26 13:46:26.736");

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisteredByEmail(email);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um usuário através do ID", async () => {
    const expected = true;
    const id = 1;

    user.id = 1;
    user.name = "wellington";
    user.surname = "felix";
    user.email = "wellington.felix@gmail.com";
    user.isAdministrator = false;
    user.isManager = true;
    user.isAdvisor = false;
    user.isBroker = false;
    user.isSecretary = false;
    user.createdAt = new Date("2022-02-26 13:46:26.736");
    user.updatedAt = new Date("2022-02-26 13:46:26.736");

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisteredById(id);

      expect(result).toBe(expected);
    });
  });
});
