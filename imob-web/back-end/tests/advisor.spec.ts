import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { AdvisorEntity } from "../src/api/entities/advisor.entity";
import { AdvisorService } from "../src/api/services/advisor.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de despachante", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let advisor: AdvisorEntity;
  let service: AdvisorService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new AdvisorService();
  });

  beforeEach(() => {
    payload = new Payload();
    advisor = new AdvisorEntity();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais despachantes de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdvisorEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo despachante", async () => {
    const expected = advisor;

    company.id = 1;

    advisor.name = "bento";
    advisor.surname = "manual";
    advisor.email = "bento.manual@gmail.com";
    advisor.birthDate = new Date("1995-01-13");
    advisor.RG = "342335601";
    advisor.CPF = "68828770767";
    advisor.landline = "";
    advisor.cellPhone = "31989180405";
    advisor.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdvisorEntity = await service.create(advisor, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um despachante de uma imobiliária", async () => {
    const expected = advisor;
    const id = 2;

    company.id = 1;
    payload.company = company;

    advisor.id = 2;
    advisor.name = "joaquim";
    advisor.surname = "levi";
    advisor.email = "joaquim.levi@gmail.com";
    advisor.birthDate = new Date("2022-03-12");
    advisor.isAdvisor = true;
    advisor.RG = "287282892";
    advisor.CPF = "60796490988";
    advisor.landline = "";
    advisor.cellPhone = "31985781555";
    advisor.profession = "Despachante";
    advisor.createdAt = new Date("22022-03-12 15:13:07.407");
    advisor.updatedAt = new Date("2022-03-14 22:52:37.706");

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdvisorEntity | undefined = await service.read(id, payload);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um despachante de uma imobiliária", async () => {
    const expected = advisor;
    const id = 2;

    advisor.name = "joaquim";
    advisor.surname = "levi";
    advisor.email = "joaquim.levi@gmail.com";
    advisor.birthDate = new Date("1989-03-12");
    advisor.isAdvisor = true;
    advisor.RG = "287282892";
    advisor.CPF = "60796490988";
    advisor.landline = "";
    advisor.cellPhone = "31985781555";
    advisor.profession = "Despachante";

    connection.transaction(async (transaction: EntityManager) => {
      const result: AdvisorEntity = await service.update(id, advisor, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um despachante de uma imobiliária", async () => {
    const expected = 1;
    const id = 2;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um despachante", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as AdvisorEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um despachante cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "60796490988";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um despachante cadastrado através do ID", async () => {
    const expected = true;
    const id = 2;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
