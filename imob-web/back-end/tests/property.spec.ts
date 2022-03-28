import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { ManagerEntity } from "../src/api/entities/manager.entity";
import { SecretaryEntity } from "../src/api/entities/secretary.entity";
import { PropertyEntity } from "../src/api/entities/property.entity";
import { PropertyService } from "../src/api/services/property.service";

describe("Suíte de testes do módulo de imóvel", () => {
  let connection: Connection;
  let company: CompanyEntity;
  let manager: ManagerEntity;
  let secretary: SecretaryEntity;
  let property: PropertyEntity;
  let service: PropertyService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new PropertyService();
  });

  beforeEach(() => {
    company = new CompanyEntity();
    manager = new ManagerEntity();
    secretary = new SecretaryEntity();
    property = new PropertyEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por um ou mais imóveles de uma imobiliária", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: PropertyEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo imóvel", async () => {
    const expected = property;

    company.id = 1;
    secretary.id = 6;

    property.description = "casa de 2 andares";
    property.photos = JSON.parse(JSON.stringify(""));
    property.checked = false;
    property.elevator = false;
    property.bedrooms = 2;
    property.bathrooms = 5;
    property.suites = 0;
    property.parkingLots = 2;
    property.terrainArea = 1000;
    property.buildingArea = 800;
    property.totalUtilTerrainArea = 1000;
    property.condominium = 0;
    property.IPTU = 250;
    property.value = 35000000;
    property.company = company;
    property.secretary = secretary;

    connection.transaction(async (transaction: EntityManager) => {
      const result: PropertyEntity = await service.create(property, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um imóvel de uma imobiliária", async () => {
    const expected = property;
    const id = 1;

    company.id = 1;
    manager.id = 1;

    property.id = 1;
    property.description = "casa de 2 andares, total de 14 cômodos";
    property.photos = JSON.parse(JSON.stringify(""));
    property.checked = false;
    property.elevator = false;
    property.bedrooms = 2;
    property.bathrooms = 5;
    property.suites = 0;
    property.parkingLots = 2;
    property.terrainArea = 1000;
    property.buildingArea = 800;
    property.totalUtilTerrainArea = 1000;
    property.condominium = 0;
    property.IPTU = 0;
    property.value = 45000000;
    property.company = company;
    property.manager = manager;

    connection.transaction(async (transaction: EntityManager) => {
      const result: PropertyEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um imóvel de uma imobiliária", async () => {
    const expected = property;
    const id = 1;

    company.id = 1;
    manager.id = 1;

    property.description = "casa de 2 andares, total de 14 cômodos";
    property.photos = JSON.parse(JSON.stringify(""));
    property.checked = false;
    property.elevator = false;
    property.bedrooms = 2;
    property.bathrooms = 5;
    property.suites = 0;
    property.parkingLots = 2;
    property.terrainArea = 1000;
    property.buildingArea = 800;
    property.totalUtilTerrainArea = 1000;
    property.condominium = 0;
    property.IPTU = 0;
    property.value = 45000000;
    property.company = company;
    property.manager = manager;

    connection.transaction(async (transaction: EntityManager) => {
      const result: PropertyEntity = await service.update(id, property, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um imóvel de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um imóvel", () => {
    const expected = true;
    const actual = service.validateData({
      description: "casa de 2 andares, total de 14 cômodos",
      photos: JSON.parse(JSON.stringify("")),
      checked: false,
      elevator: false,
      bedrooms: 2,
      bathrooms: 5,
      suites: 0,
      parkingLots: 2,
      terrainArea: 1000,
      buildingArea: 800,
      totalUtilTerrainArea: 1000,
      condominium: 0,
      IPTU: 0,
      value: 45000000
    } as PropertyEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um imóvel cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
