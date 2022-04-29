import { Connection, EntityManager, DeleteResult } from "typeorm";

import { createTypeORMConnection } from "../utils/utils";
import { CompanyEntity } from "../src/api/entities/company.entity";
import { ManagerEntity } from "../src/api/entities/manager.entity";
import { SecretaryEntity } from "../src/api/entities/secretary.entity";
import { LeadEntity } from "../src/api/entities/lead.entity";
import { LeadService } from "../src/api/services/lead.service";
import { Payload } from "../utils/classes/payload.class";

describe("Suíte de testes do módulo de lead", () => {
  let connection: Connection;
  let payload: Payload;
  let company: CompanyEntity;
  let manager: ManagerEntity;
  let secretary: SecretaryEntity;
  let lead: LeadEntity;
  let service: LeadService;

  beforeAll(async () => {
    connection = await createTypeORMConnection();
    service = new LeadService();
  });

  beforeEach(() => {
    payload = new Payload();
    company = new CompanyEntity();
    manager = new ManagerEntity();
    secretary = new SecretaryEntity();
    lead = new LeadEntity();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Buscando por uma ou mais leads de uma imobiliária", async () => {
    const expected = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: LeadEntity[] = await service.index(payload);

      expect(result.length).toBeGreaterThanOrEqual(expected);
    });
  });

  test("Criando uma nova lead", async () => {
    const expected = lead;

    company.id = 1;
    secretary.id = 6;

    lead.name = "luan";
    lead.surname = "enrico";
    lead.email = "luan.enrico@gmail.com";
    lead.source = 1;
    lead.landline = "";
    lead.cellPhone = "31988050945";
    lead.comments = "";
    lead.createdByAdministrator = false;
    lead.createdByManager = false;
    lead.createdBySecretary = true;
    lead.company = company;
    lead.secretary = secretary;

    connection.transaction(async (transaction: EntityManager) => {
      const result: LeadEntity = await service.create(lead, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Buscando por uma lead de uma imobiliária", async () => {
    const expected = lead;
    const id = 1;

    company.id = 1;
    manager.id = 1;

    lead.id = 1;
    lead.name = "túlio";
    lead.surname = "menezes";
    lead.email = "tulio.menezes@gmail.com";
    lead.source = 0;
    lead.landline = "";
    lead.cellPhone = "31996214031";
    lead.comments = "";
    lead.createdByAdministrator = false;
    lead.createdByManager = true;
    lead.createdBySecretary = false;
    lead.company = company;
    lead.manager = manager;
    lead.createdAt = new Date("2022-03-27 22:11:35.976");
    lead.updatedAt = new Date("2022-03-27 22:11:35.976");

    connection.transaction(async (transaction: EntityManager) => {
      const result: LeadEntity | undefined = await service.read(id);

      expect(result).toBe(expected);
    });
  });

  test("Atualizando uma lead de uma imobiliária", async () => {
    const expected = lead;
    const id = 1;

    lead.name = "túlio";
    lead.surname = "menezes";
    lead.email = "tulio.menezes@gmail.com";
    lead.source = 0;
    lead.landline = "";
    lead.cellPhone = "31996214031";
    lead.comments = "";
    lead.createdByAdministrator = false;
    lead.createdByManager = true;
    lead.createdBySecretary = false;
    lead.company = company;
    lead.manager = manager;
    lead.createdAt = new Date("2022-03-27 22:11:35.976");
    lead.updatedAt = new Date("2022-03-27 22:11:35.976");

    connection.transaction(async (transaction: EntityManager) => {
      const result: LeadEntity = await service.update(id, lead, transaction);

      expect(result).toBe(expected);
    });
  });

  test("Deletando uma lead de uma imobiliária", async () => {
    const expected = 1;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: DeleteResult = await service.delete(id, transaction);

      expect(result.affected).toEqual(expected);
    });
  });

  test("Validando dados de uma lead", () => {
    const expected = true;
    const actual = service.validateData({
      name: "túlio",
      surname: "menezes",
      email: "tulio.menezes@gmail.com",
      source: 0,
      landline: "",
      cellPhone: "31996214031",
      comments: "",
      createdByAdministrator: false,
      createdByManager: true,
      createdBySecretary: false,
    } as LeadEntity);

    expect(actual).toBe(expected);
  });

  test("Verificando se existe uma lead cadastrado através do e-mail", async () => {
    const expected = true;
    const email = "tulio.menezes@gmail.com";

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterByEmail(email);

      expect(result).toBe(expected);
    });
  });

  test("Verificando se existe uma lead cadastrado através do ID", async () => {
    const expected = true;
    const id = 1;

    connection.transaction(async (transaction: EntityManager) => {
      const result: boolean = await service.alreadyRegisterById(id);

      expect(result).toBe(expected);
    });
  });
});
