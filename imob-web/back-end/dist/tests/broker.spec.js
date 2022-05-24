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
var broker_entity_1 = require("../src/api/entities/broker.entity");
var broker_service_1 = require("../src/api/services/broker.service");
var payload_class_1 = require("../utils/classes/payload.class");
describe("Suíte de testes do módulo de corretor", function () {
    var connection;
    var payload;
    var company;
    var broker;
    var service;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utils_1.createTypeORMConnection)()];
                case 1:
                    connection = _a.sent();
                    service = new broker_service_1.BrokerService();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        payload = new payload_class_1.Payload();
        broker = new broker_entity_1.BrokerEntity();
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
    test("Buscando por um ou mais corretores de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
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
    test("Criando um novo corretor", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = broker;
            company.id = 1;
            broker.name = "felipe";
            broker.surname = "sérgio";
            broker.email = "felipe.sergio@gmail.com";
            broker.birthDate = new Date("2001-01-21");
            broker.RG = "126351843";
            broker.CPF = "70625154428";
            broker.landline = "";
            broker.cellPhone = "31991345844";
            broker.profession = "";
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.create(broker, transaction)];
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
    test("Buscando por um corretor de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = broker;
            id = 2;
            company.id = 1;
            payload.company = company;
            broker.id = 2;
            broker.name = "manuel";
            broker.surname = "luís";
            broker.email = "manuel.luis@gmail.com";
            broker.birthDate = new Date("1989-06-16");
            broker.isBroker = true;
            broker.RG = "491422647";
            broker.CPF = "20603720382";
            broker.landline = "3133228544";
            broker.cellPhone = "31986857888";
            broker.profession = "Corretor";
            broker.createdAt = new Date("2022-03-12 16:32:47.833");
            broker.updatedAt = new Date("2022-03-12 21:42:29.588");
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
    test("Atualizando um corretor de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = broker;
            id = 1;
            broker.name = "manuel";
            broker.surname = "luís";
            broker.email = "manuel.luis@gmail.com";
            broker.birthDate = new Date("1989-06-16");
            broker.isBroker = true;
            broker.RG = "491422647";
            broker.CPF = "20603720382";
            broker.landline = "";
            broker.cellPhone = "31986857888";
            broker.profession = "";
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.update(id, broker, transaction)];
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
    test("Deletando um corretor de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = 1;
            id = 2;
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
    test("Validando dados de um corretor", function () {
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
    test("Verificando se existe um corretor cadastrado através do CPF", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, CPF;
        return __generator(this, function (_a) {
            expected = true;
            CPF = "20603720382";
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
    test("Verificando se existe um corretor cadastrado através do ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = true;
            id = 2;
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
//# sourceMappingURL=broker.spec.js.map