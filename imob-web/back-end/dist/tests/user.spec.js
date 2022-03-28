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
var profile_entity_1 = require("../src/api/entities/profile.entity");
var company_entity_1 = require("../src/api/entities/company.entity");
var user_entity_1 = require("../src/api/entities/user.entity");
var user_service_1 = require("../src/api/services/user.service");
var payload_class_1 = require("../utils/classes/payload.class");
describe("Suíte de testes do módulo de usuário", function () {
    var connection;
    var payload;
    var profile;
    var company;
    var user;
    var service;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utils_1.createTypeORMConnection)()];
                case 1:
                    connection = _a.sent();
                    service = new user_service_1.UserService();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        payload = new payload_class_1.Payload();
        profile = new profile_entity_1.ProfileEntity();
        company = new company_entity_1.CompanyEntity();
        user = new user_entity_1.UserEntity();
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
    test("Buscando por um ou mais usuários de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
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
    test("Criando um novo usuário em uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = user;
            profile.id = 2;
            company.id = 0;
            user.name = "vitor";
            user.surname = "nathan";
            user.email = "vitor.nathan@gmail.com";
            user.password = "12345678";
            user.profile = profile;
            user.company = company;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.create(user, transaction)];
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
    test("Buscando por um usuário de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 2;
            company.id = 1;
            payload.company = company;
            user.name = "palloma";
            user.surname = "miranda";
            user.email = "palloma.miranda@gmail.com";
            user.isAdministrator = false;
            user.isManager = true;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-02-26 18:29:29.917");
            user.updatedAt = new Date("2022-02-26 18:29:29.917");
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
    test("Atualizando um usuário de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 14;
            company.id = 1;
            user.name = "luana";
            user.surname = "cristina";
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.update(id, user, transaction)];
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
    test("Deletando um usuário de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = 1;
            id = 14;
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
    test("Buscando um usuário de uma imobiliária por e-mail", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, email;
        return __generator(this, function (_a) {
            expected = user;
            email = "lorena.teresinha@gmail.com";
            company.id = 1;
            user.name = "lorena";
            user.surname = "teresinha";
            user.email = "lorena.teresinha@gmail.com";
            user.isAdministrator = false;
            user.isManager = false;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = true;
            user.createdAt = new Date("2022-03-12 21:56:00.956");
            user.updatedAt = new Date("2022-03-12 21:56:00.956");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.findByEmail(email)];
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
    test("Buscando um usuário de uma imobiliária que seja administrador", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 15;
            user.id = 15;
            user.name = "anderson";
            user.surname = "nelson";
            user.email = "anderson.nelson@gmail.com";
            user.isAdministrator = true;
            user.isManager = false;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-03-27 10:46:06.74");
            user.updatedAt = new Date("2022-03-27 10:46:06.74");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.findByAdministrator(id)];
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
    test("Buscando um usuário de uma imobiliária que seja gestor", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 7;
            user.id = 7;
            user.name = "jose";
            user.surname = "vitor";
            user.email = "jose.vitor@gmail.com";
            user.isAdministrator = false;
            user.isManager = true;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-03-06 11:43:11.707");
            user.updatedAt = new Date("2022-03-06 11:43:11.707");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.findByManager(id)];
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
    test("Buscando um usuário de uma imobiliária que seja despachante", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 12;
            user.id = 12;
            user.name = "joaquem";
            user.surname = "levi";
            user.email = "joaquim.levi@gmail.com";
            user.isAdministrator = false;
            user.isManager = false;
            user.isAdvisor = true;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-03-12 15:13:07.464");
            user.updatedAt = new Date("2022-03-12 15:13:07.464");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.findByAdvisor(id)];
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
    test("Buscando um usuário de uma imobiliária que seja corretor", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 13;
            user.id = 13;
            user.name = "manual";
            user.surname = "luis";
            user.email = "manual.luis@gmail.com";
            user.isAdministrator = false;
            user.isManager = false;
            user.isAdvisor = false;
            user.isBroker = true;
            user.isSecretary = false;
            user.createdAt = new Date("2022-03-12 16:32:47.88");
            user.updatedAt = new Date("2022-03-12 16:32:47.88");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.findByBroker(id)];
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
    test("Buscando um usuário de uma imobiliária que seja secretária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = user;
            id = 15;
            user.id = 15;
            user.name = "anderson";
            user.surname = "nelson";
            user.email = "anderson.nelson@gmail.com";
            user.isAdministrator = false;
            user.isManager = false;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = true;
            user.createdAt = new Date("2022-03-27 10:46:06.74");
            user.updatedAt = new Date("2022-03-27 10:46:06.74");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.findBySecretary(id)];
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
    test("Verificando se a senha de um usuário é válida", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, password;
        return __generator(this, function (_a) {
            expected = true;
            password = "12345678";
            user.id = 1;
            user.name = "wellington";
            user.surname = "felix";
            user.email = "wellington.felix@gmail.com";
            user.password = "12345678";
            user.isAdministrator = false;
            user.isManager = true;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-02-26 13:46:26.736");
            user.updatedAt = new Date("2022-02-26 13:46:26.736");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.validatePassword(user, password)];
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
    test("Verificando se existe um usuário através do e-mail", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, email;
        return __generator(this, function (_a) {
            expected = true;
            email = "wellington.felix@gmail.com";
            user.id = 1;
            user.name = "wellington";
            user.surname = "felix";
            user.email = "wellington.felix@gmail.com";
            user.isAdministrator = false;
            user.isManager = true;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-02-26 13:46:26.736");
            user.updatedAt = new Date("2022-02-26 13:46:26.736");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.alreadyRegisteredByEmail(email)];
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
    test("Verificando se existe um usuário através do ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = true;
            id = 1;
            user.id = 1;
            user.name = "wellington";
            user.surname = "felix";
            user.email = "wellington.felix@gmail.com";
            user.isAdministrator = false;
            user.isManager = true;
            user.isAdvisor = false;
            user.isBroker = false;
            user.isSecretary = false;
            user.createdAt = new Date("2022-02-26 13:46:26.736");
            user.updatedAt = new Date("2022-02-26 13:46:26.736");
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.alreadyRegisteredById(id)];
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
//# sourceMappingURL=user.spec.js.map