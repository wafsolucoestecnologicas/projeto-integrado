import { Connection, EntityManager } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { ProfileEntity } from "../src/api/entities/profile.entity";
import { ProfileService } from "../src/api/services/profile.service";

describe("Suíte de testes do módulo de perfil", () => {
  let connection: Connection;
  let profile: ProfileEntity;
  let service: ProfileService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new ProfileService();
  });

  beforeEach(() => {
    profile = new ProfileEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando todos os perfis", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: ProfileEntity[] = await service.index();

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Buscando por um perfil", async () => {
    const expected = profile;
    const id = 2;

    profile.id = 2;
    profile.userType = "manager";
    profile.isAdmin = false;
    profile.permissions = JSON.parse(
      JSON.stringify({
        create: [
          "companies",
          "managers",
          "advisors",
          "brokers",
          "secretaries",
          "owners",
          "customers",
          "properties",
          "leads",
          "businesses",
          "commissions-receivable",
          "commissions-payable",
          "adresses",
          "neighborhoods",
          "cities",
          "states",
        ],
        read: [
          "users",
          "profiles",
          "companies",
          "managers",
          "advisors",
          "brokers",
          "secretaries",
          "owners",
          "customers",
          "properties",
          "leads",
          "businesses",
          "commissions-receivable",
          "commissions-payable",
          "adresses",
          "neighborhoods",
          "cities",
          "states",
        ],
        update: [
          "users",
          "companies",
          "managers",
          "advisors",
          "brokers",
          "secretaries",
          "owners",
          "customers",
          "properties",
          "leads",
          "businesses",
          "commissions-receivable",
          "commissions-payable",
          "adresses",
          "neighborhoods",
          "cities",
          "states",
        ],
        delete: [
          "users",
          "companies",
          "managers",
          "advisors",
          "brokers",
          "secretaries",
          "owners",
          "customers",
          "properties",
          "leads",
          "businesses",
          "commissions-receivable",
          "commissions-payable",
          "adresses",
          "neighborhoods",
          "cities",
          "states",
        ],
        amount: ["leads", "businesses"],
        search: ["leads", "businesses", "adresses"],
        transfer: ["businesses"],
        reject: ["businesses"],
        close: ["businesses"],
        receivable: ["commissions-receivable"],
        payable: ["commissions-payable"],
      })
    );
    profile.createdAt = new Date("2022-02-25 14:47:21.670264");
    profile.updatedAt = new Date("2022-02-25 14:47:21.670264");

    connection.transaction(async (transaction: EntityManager) => {
      const result: ProfileEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });
});
