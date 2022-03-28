import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { PropertyEntity } from "../src/api/entities/property.entity";
import { CommissionReceivableEntity } from "../src/api/entities/commission-receivable.entity";
import { CommissionReceivableService } from "../src/api/services/commission-receivable.service";


describe("Suíte de testes do módulo de comissões a receber", () => {
  let connection: Connection;
  let company: CompanyEntity;
  let property: PropertyEntity;
  let receivable: CommissionReceivableEntity;
  let service: CommissionReceivableService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new CommissionReceivableService();
  });

  beforeEach(() => {
    company = new CompanyEntity();
    property = new PropertyEntity();
    receivable = new CommissionReceivableEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por uma ou mais comissões a receber de uma imobiliária", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionReceivableEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando uma nova comissão a receber", async () => {
    const expected = receivable;

    company.id = 1;
    property.id = 1;

    receivable.date = new Date('2022-03-15');
    receivable.value = 5000;
    receivable.company = company;
    receivable.property = property;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionReceivableEntity = await service.create(receivable, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por uma comissão a receber de uma imobiliária", async () => {
    const expected = receivable;
    const id = 2;

    company.id = 1;
    property.id = 1;

    receivable.date = new Date('2021-12-04');
    receivable.value = 1500;
    receivable.company = company;
    receivable.property = property;
    receivable.createdAt = new Date('2022-03-27 22:28:32.816');
    receivable.updatedAt = new Date('2022-03-27 22:28:32.816');

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionReceivableEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando uma comissão a receber de uma imobiliária", async () => {
    const expected = receivable;
    const id = 2;

    receivable.date = new Date('2021-12-04');
    receivable.value = 1500;
    receivable.company = company;
    receivable.property = property;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CommissionReceivableEntity = await service.update(id, receivable, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando uma comissão receber de uma imobiliária", async () => {
    const expected = 1;
    const id = 2;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de uma comissão a receber", () => {
    const expected = true;
    const actual = service.validateData({
        date: new Date('2021-12-04'),
        value: 1500
    } as CommissionReceivableEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe uma comissão a receber cadastrado através do ID", async () => {
    const expected = true;
    const id = 2;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
