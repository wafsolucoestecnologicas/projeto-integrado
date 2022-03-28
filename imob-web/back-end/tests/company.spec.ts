import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { CompanyService } from "../src/api/services/company.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de imobiliária", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let service: CompanyService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new CompanyService();
  });

  beforeEach(() => {
    payload = new Payload();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por uma ou mais imobiliárias", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CompanyEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um nova imobiliária", async () => {
    const expected = company;

    company.CNPJ = "75536670000126";
    company.corporateName = "WAF Soluções Tecnologicas";
    company.stateRegistration = "0467483802980";
    company.percentageCommissionReceivable = 5.5;
    company.percentageCommissionPayableForClosedDeals = 10.3;
    company.percentageCommissionPayableForPropertyCaptured = 2.0;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CompanyEntity = await service.create(company, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por uma imobiliária", async () => {
    const expected = company;
    const id = 1;

    company.id = 1;
    company.CNPJ = "72850186000189";
    company.corporateName = "Canaan Imóveis Ltda";
    company.stateRegistration = "1229064222103";
    company.percentageCommissionReceivable = 5.0;
    company.percentageCommissionPayableForClosedDeals = 0.75;
    company.percentageCommissionPayableForPropertyCaptured = 0.25;
    company.createdAt = new Date("2022-02-26 13:46:26.613");
    company.updatedAt = new Date("2022-03-10 14:47:08.891");

    connection.transaction(async (transaction: EntityManager) => {
      const result: CompanyEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando uma imobiliária", async () => {
    const expected = company;
    const id = 1;

    company.percentageCommissionReceivable = 5.0;
    company.percentageCommissionPayableForClosedDeals = 0.75;
    company.percentageCommissionPayableForPropertyCaptured = 0.25;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CompanyEntity = await service.update(id, company, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Criando imobiliária através de um repositório", () => {
    const actual = service.createCompanyEntityByRepository({
      CNPJ: "53556773000115",
      corporateName: "Carla e Raimundo Financeira ME",
      stateRegistration: "170778882221",
    } as CompanyEntity);

    expect(actual).toBeInstanceOf(CompanyEntity);
  });

  test("Validando dados de uma imobiliária", () => {
    const expected = true;
    const actual = service.validateData({
      CNPJ: "53556773000115",
      corporateName: "Carla e Raimundo Financeira ME",
      stateRegistration: "170778882221",
    } as CompanyEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe uma imobiliária cadastrada através do CNPJ", async () => {
    const expected = true;
    const CNPJ = "72850186000189";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisteredByCNPJ(CNPJ);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe uma imobiliária cadastrada através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisteredById(id);

      expect(result).toBe(expected);
    });
  });
});
