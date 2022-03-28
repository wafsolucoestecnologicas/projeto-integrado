import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { NeighborhoodEntity } from "../src/api/entities/neighborhood.entity";
import { ManagerEntity } from "../src/api/entities/manager.entity";
import { AddressEntity } from "../src/api/entities/address.entity";
import { AddressService } from "../src/api/services/address.service";
import { ResponseViaCEPModel } from "../src/api/models/address.model";

describe("Suíte de testes do módulo de endereço", () => {
  let connection: Connection;
  let company: CompanyEntity;
  let neighborhood: NeighborhoodEntity;
  let manager: ManagerEntity;
  let address: AddressEntity;
  let service: AddressService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new AddressService();
  });

  beforeEach(() => {
    company = new CompanyEntity();
    neighborhood = new NeighborhoodEntity();
    manager = new ManagerEntity();
    address = new AddressEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando todos os endereços", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: AddressEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo endereço", async () => {
    const expected = address;

    company.id = 1;
    neighborhood.id = 1;
    manager.id = 1;

    address.street = "Avenida Ibirapuera";
    address.complement = "";
    address.number = "480";
    address.CEP = "30692080";
    address.isCompany = false;
    address.isManager = true;
    address.isAdvisor = false;
    address.isBroker = false;
    address.isSecretary = false;
    address.isOwner = false;
    address.isCustomer = false;
    address.isProperty = false;
    address.company = company;
    address.neighborhood = neighborhood;
    address.manager = manager;

    connection.transaction(async (transaction: EntityManager) => {
      const result: AddressEntity = await service.create(address, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um endereço", async () => {
    const expected = neighborhood;
    const id = 1;

    company.id = 1;
    neighborhood.id = 1;
    manager.id = 1;

    address.id = 1;
    address.street = "Avenida Ibirapuera";
    address.complement = "";
    address.number = "480";
    address.CEP = "30692080";
    address.isCompany = false;
    address.isManager = true;
    address.isAdvisor = false;
    address.isBroker = false;
    address.isSecretary = false;
    address.isOwner = false;
    address.isCustomer = false;
    address.isProperty = false;
    address.company = company;
    address.neighborhood = neighborhood;
    address.manager = manager;

    connection.transaction(async (transaction: EntityManager) => {
      const result: AddressEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um endereço", async () => {
    const expected = neighborhood;
    const id = 1;

    neighborhood.id = 1;

    address.id = 1;
    address.street = "Avenida Ibirapuera";
    address.complement = "";
    address.number = "110";
    address.CEP = "30692080";
    address.isCompany = false;
    address.isManager = true;
    address.isAdvisor = false;
    address.isBroker = false;
    address.isSecretary = false;
    address.isOwner = false;
    address.isCustomer = false;
    address.isProperty = false;
    address.neighborhood = neighborhood;

    connection.transaction(async (transaction: EntityManager) => {
      const result: AddressEntity = await service.update(id, address, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um endereço", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um endereço", () => {
    const expected = true;
    const actual = service.validateData({
      street: "Avenida Ibirapuera",
      complement: "",
      number: "110",
      CEP: "30692080",
      isCompany: false,
      isManager: true,
      isAdvisor: false,
      isBroker: false,
      isSecretary: false,
      isOwner: false,
      isCustomer: false,
      isProperty: false,
    } as AddressEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um endereço cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });

  /*test("Buscando um endereço na API ViaCEP através do CEP", async () => {
    const expected = {
      cep: "30692-500",
      logradouro: "rua vinhedo",
      complemento: "",
      bairro: "itaipu (barreiro)",
      localidade: "belo horizonte",
      uf: "MG",
      ibge: "3106200",
      gia: "",
      ddd: "31",
      siafi: "4123",
    };
    const CEP = "30692500";

    const result: ResponseViaCEPModel = await service.fetchAddressInAPIViaCEP(
      CEP
    );

    expect(result).toEqual(expected);
  });*/
});
