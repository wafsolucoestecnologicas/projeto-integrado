import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CityEntity } from "../src/api/entities/city.entity";
import { NeighborhoodEntity } from "../src/api/entities/neighborhood.entity";
import { NeighborhoodService } from "../src/api/services/neighborhood.service";

describe("Suíte de testes do módulo de bairro", () => {
  let connection: Connection;
  let city: CityEntity;
  let neighborhood: NeighborhoodEntity;
  let service: NeighborhoodService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new NeighborhoodService();
  });

  beforeEach(() => {
    neighborhood = new NeighborhoodEntity();
    city = new CityEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando todos os bairros", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: NeighborhoodEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo bairro", async () => {
    const expected = neighborhood;

    city.id = 1;

    neighborhood.city = city;
    neighborhood.neighborhood = "Itaipú";

    connection.transaction(async (transaction: EntityManager) => {
      const result: NeighborhoodEntity = await service.create(neighborhood, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por uma bairro", async () => {
    const expected = neighborhood;
    const id = 1;

    city.id = 1;

    neighborhood.id = 1;
    neighborhood.city = city;
    neighborhood.neighborhood = "Itaipú";

    connection.transaction(async (transaction: EntityManager) => {
      const result: NeighborhoodEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um bairro", async () => {
    const expected = neighborhood;
    const id = 1;

    city.id = 1;

    neighborhood.id = 1;
    neighborhood.city = city;
    neighborhood.neighborhood = "Itaipú";

    connection.transaction(async (transaction: EntityManager) => {
      const result: NeighborhoodEntity = await service.update(id, neighborhood, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um bairro de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de um bairro", () => {
    const expected = true;
    const actual = service.validateData({
      neighborhood: "Belo Horizonte",
    } as NeighborhoodEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe um bairro cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
