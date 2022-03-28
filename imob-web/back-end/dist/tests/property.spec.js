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
var secretary_entity_1 = require("../src/api/entities/secretary.entity");
var property_entity_1 = require("../src/api/entities/property.entity");
var property_service_1 = require("../src/api/services/property.service");
describe("Suíte de testes do módulo de imóvel", function () {
    var connection;
    var company;
    var manager;
    var secretary;
    var property;
    var service;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utils_1.createTypeORMConnection)()];
                case 1:
                    connection = _a.sent();
                    service = new property_service_1.PropertyService();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        company = new company_entity_1.CompanyEntity();
        manager = new manager_entity_1.ManagerEntity();
        secretary = new secretary_entity_1.SecretaryEntity();
        property = new property_entity_1.PropertyEntity();
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
    test("Buscando por um ou mais imóveles de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = 1;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.index()];
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
    test("Criando um novo imóvel", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = property;
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
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.create(property, transaction)];
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
    test("Buscando por um imóvel de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = property;
            id = 1;
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
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.read(id)];
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
    test("Atualizando um imóvel de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = property;
            id = 1;
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
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.update(id, property, transaction)];
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
    test("Deletando um imóvel de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = 1;
            id = 1;
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
    test("Validando dados de um imóvel", function () {
        var expected = true;
        var actual = service.validateData({
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
        });
        expect(actual).toBe(expected);
    });
    test("Verificando se existe um imóvel cadastrado através do ID", function () { return __awaiter(void 0, void 0, void 0, function () {
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
//# sourceMappingURL=property.spec.js.map