import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { StateEntity } from "../src/api/entities/state.entity";
import { StateService } from "../src/api/services/state.service";

describe("Suíte de testes do módulo de estado", () => {
  let connection: Connection;
  let state: StateEntity;
  let service: StateService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new StateService();
  });

  beforeEach(() => {
    state = new StateEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando todos os estados", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: StateEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando um novo estado", async () => {
    const expected = state;

    state.state = "bahia";
    state.UF = "BA";

    connection.transaction(async (transaction: EntityManager) => {
      const result: StateEntity = await service.create(state, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por um estado", async () => {
    const expected = state;
    const id = 12;

    state.id = 12;
    state.state = "minas gerais";
    state.UF = "MG";

    connection.transaction(async (transaction: EntityManager) => {
      const result: StateEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando um estado", async () => {
    const expected = state;
    const id = 12;

    state.id = 12;
    state.state = "minas gerais";
    state.UF = "MG";

    connection.transaction(async (transaction: EntityManager) => {
      const result: StateEntity = await service.update(id, state, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando um estado", async () => {
    const expected = 1;
    const id = 12;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Buscando um estado através da sigla", async () => {
    const expected = state;
    const UF = "MG";

    state.id = 12;
    state.state = "minas gerais";
    state.UF = "MG";

    connection.transaction(async (transaction: EntityManager) => {
      const result: StateEntity | undefined = await service.findByUF(UF);

      expect(result).toBe(expected);
    });
  });
});
