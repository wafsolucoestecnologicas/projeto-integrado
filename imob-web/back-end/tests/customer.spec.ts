import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { CustomerEntity } from "../src/api/entities/customer.entity";
import { CustomerService } from "../src/api/services/customer.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de cliente", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let customer: CustomerEntity;
  let service: CustomerService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new CustomerService();
  });

  beforeEach(() => {
    payload = new Payload();
    customer = new CustomerEntity();
    company = new CompanyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais clientes de uma imobiliária", async () => {
    const expected = 1;

    company.id = 1;
    payload.company = company;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CustomerEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo cliente", async () => {
    const expected = customer;

    company.id = 1;

    customer.name = "bryan";
    customer.surname = "igor";
    customer.email = "bryan.igor@gmail.com";
    customer.birthDate = new Date("1993-02-25");
    customer.RG = "253529529";
    customer.CPF = "76635518932";
    customer.landline = "";
    customer.cellPhone = "31981772214";
    customer.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: CustomerEntity = await service.create(customer, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um cliente de uma imobiliária", async () => {
    const expected = customer;
    const id = 1;

    company.id = 1;
    payload.company = company;

    customer.id = 1;
    customer.name = "igor";
    customer.surname = "otávio";
    customer.email = "igor.otávio@gmail.com";
    customer.birthDate = new Date("1981-06-04");
    customer.isCustomer = true;
    customer.RG = "175727067";
    customer.CPF = "19682430976";
    customer.landline = "";
    customer.cellPhone = "31986857714";
    customer.profession = "";
    customer.createdAt = new Date("2022-03-14 22:34:45.594");
    customer.updatedAt = new Date("2022-03-14 22:39:40.405");

    connection.transaction(async (transaction: EntityManager) => {
      const result: CustomerEntity | undefined = await service.read(id, payload);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um cliente de uma imobiliária", async () => {
    const expected = customer;
    const id = 1;

    customer.name = "igor";
    customer.surname = "otávio";
    customer.email = "igor.otávio@gmail.com";
    customer.birthDate = new Date("1981-06-04");
    customer.isCustomer = true;
    customer.RG = "175727067";
    customer.CPF = "19682430976";
    customer.landline = "";
    customer.cellPhone = "31986857714";
    customer.profession = "";

    connection.transaction(async (transaction: EntityManager) => {
      const result: CustomerEntity = await service.update(id, customer, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um cliente de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um cliente", () => {
    const expected = true;
    const actual = service.validateData({
      name: "nathan",
      surname: "oliver",
      email: "nathan.oliver@gmail.com",
      birthDate: new Date("1989-01-24"),
      RG: "153780228",
      CPF: "31185803807",
      cellPhone: "31998187516",
    } as CustomerEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um cliente cadastrado através do CPF", async () => {
    const expected = true;
    const CPF = "19682430976";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByCPF(CPF);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe um cliente cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
