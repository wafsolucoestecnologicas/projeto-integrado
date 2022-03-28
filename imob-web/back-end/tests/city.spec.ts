import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { StateEntity } from "../src/api/entities/state.entity";
import { CityEntity } from "../src/api/entities/city.entity";
import { CityService } from "../src/api/services/city.service";

describe("Suíte de testes do módulo de cidade", () => {
  let connection: Connection;
  let state: StateEntity;
  let city: CityEntity;
  let service: CityService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new CityService();
  });

  beforeEach(() => {
    city = new CityEntity();
    state = new StateEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando todas as cidades", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: CityEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando uma nova cidade", async () => {
    const expected = city;

    state.id = 12;

    city.state = state;
    city.city = "Belo Horizonte";

    connection.transaction(async (transaction: EntityManager) => {
      const result: CityEntity = await service.create(city, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por uma cidade", async () => {
    const expected = city;
    const id = 1;

    state.id = 12;

    city.id = 1;
    city.state = state;
    city.city = "Belo Horizonte";

    connection.transaction(async (transaction: EntityManager) => {
      const result: CityEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando uma cidade", async () => {
    const expected = city;
    const id = 1;

    state.id = 12;

    city.id = 1;
    city.state = state;
    city.city = "Belo Horizonte";

    connection.transaction(async (transaction: EntityManager) => {
      const result: CityEntity = await service.update(id, city, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um cidade de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de uma cidade", () => {
    const expected = true;
    const actual = service.validateData({
      city: "Belo Horizonte",
    } as CityEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe uma cidade cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
