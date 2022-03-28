"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils/utils");
var company_entity_1 = require("../src/api/entities/company.entity");
var manager_entity_1 = require("../src/api/entities/manager.entity");
var manager_service_1 = require("../src/api/services/manager.service");
var payload_class_1 = require("../utils/classes/payload.class");
describe("Suíte de testes do módulo de gestor", function () {
    var connection;
    var payload;
    var company;
    var manager;
    var service;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utils_1.createTypeORMConnection)()];
                case 1:
                    connection = _a.sent();
                    service = new manager_service_1.ManagerService();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        payload = new payload_class_1.Payload();
        manager = new manager_entity_1.ManagerEntity();
        company = new company_entity_1.CompanyEntity();
    });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.close()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Buscando por um ou mais gestores de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = 1;
            company.id = 1;
            payload.company = company;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.index(payload)];
                        case 1:
                            result = _a.sent();
                            expect(result.length).toBeGreaterThanOrEqual(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    test("Criando um novo gestor", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = manager;
            company.id = 1;
            manager.name = "manuel";
            manager.surname = "renato";
            manager.email = "manuel.renato@gmail.com";
            manager.birthDate = new Date("1999-03-26");
            manager.RG = "424024007";
            manager.CPF = "44468770384";
            manager.landline = "";
            manager.cellPhone = "31987901406";
            manager.profession = "";
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.create(manager, transaction)];
                        case 1:
                            result = _a.sent();
                            expect(result).toBe(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    test("Buscando por um gestor de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = manager;
            id = 1;
            company.id = 1;
            payload.company = company;
            manager.id = 1;
            manager.name = "wellington";
            manager.surname = "felix";
            manager.email = "wellington.felix@gmail.com";
            manager.birthDate = new Date("1989-06-16");
            manager.isManager = true;
            manager.RG = "309887689";
            manager.CPF = "87274531972";
            manager.landline = "3133228455";
            manager.cellPhone = "31986857811";
            manager.profession = "Programador";
            manager.createdAt = new Date("2022-02-26 13:46:26.667");
            manager.updatedAt = new Date("2022-03-15 21:35:59.534");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.read(id, payload)];
                        case 1:
                            result = _a.sent();
                            expect(result).toBe(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    test("Atualizando um gestor de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = manager;
            id = 1;
            manager.name = "wellington";
            manager.surname = "felix";
            manager.email = "wellington.felix@gmail.com";
            manager.birthDate = new Date("1989-06-16");
            manager.isManager = true;
            manager.RG = "309887689";
            manager.CPF = "87274531972";
            manager.landline = "";
            manager.cellPhone = "31986857811";
            manager.profession = "";
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.update(id, manager, transaction)];
                        case 1:
                            result = _a.sent();
                            expect(result).toBe(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    test("Deletando um gestor de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = 1;
            id = 4;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.delete(id, transaction)];
                        case 1:
                            result = _a.sent();
                            expect(result.affected).toEqual(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    test("Validando dados de um gestor", function () {
        var expected = true;
        var actual = service.validateData({
            name: "nathan",
            surname: "oliver",
            email: "nathan.oliver@gmail.com",
            birthDate: new Date("1989-01-24"),
            RG: "153780228",
            CPF: "31185803807",
            cellPhone: "31998187516",
        });
        expect(actual).toBe(expected);
    });
    test("Verificando se existe um gestor cadastrado através do CPF", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, CPF;
        return __generator(this, function (_a) {
            expected = true;
            CPF = "87274531972";
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.alreadyRegisterByCPF(CPF)];
                        case 1:
                            result = _a.sent();
                            expect(result).toBe(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    test("Verificando se existe um gestor cadastrado através do ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = true;
            id = 1;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.alreadyRegisterById(id)];
                        case 1:
                            result = _a.sent();
                            expect(result).toBe(expected);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=manager.spec.js.map