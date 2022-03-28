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
var broker_entity_1 = require("../src/api/entities/broker.entity");
var property_entity_1 = require("../src/api/entities/property.entity");
var owner_entity_1 = require("../src/api/entities/owner.entity");
var customer_entity_1 = require("../src/api/entities/customer.entity");
var lead_entity_1 = require("../src/api/entities/lead.entity");
var business_entity_1 = require("../src/api/entities/business.entity");
var business_service_1 = require("../src/api/services/business.service");
describe("Suíte de testes do módulo de negócio", function () {
    var connection;
    var company;
    var manager;
    var broker;
    var owner;
    var customer;
    var property;
    var lead;
    var business;
    var service;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utils_1.createTypeORMConnection)()];
                case 1:
                    connection = _a.sent();
                    service = new business_service_1.BusinessService();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        company = new company_entity_1.CompanyEntity();
        manager = new manager_entity_1.ManagerEntity();
        broker = new broker_entity_1.BrokerEntity();
        owner = new owner_entity_1.OwnerEntity();
        customer = new customer_entity_1.CustomerEntity();
        property = new property_entity_1.PropertyEntity();
        lead = new lead_entity_1.LeadEntity();
        business = new business_entity_1.BusinessEntity();
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
    test("Buscando por um ou mais negócios de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
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
    test("Criando um novo negócio", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected;
        return __generator(this, function (_a) {
            expected = business;
            company.id = 1;
            manager.id = 1;
            broker.id = 2;
            owner.id = 1;
            customer.id = 1;
            property.id = 1;
            lead.id = 1;
            business.status = 0;
            business.dateVisit = new Date('2022-03-15');
            business.dateSale = new Date('2022-03-25');
            business.visitForm = '';
            business.propertyRegistration = '';
            business.propertySaleContract = '';
            business.ITBI = '';
            business.customerRG = '';
            business.customerCPF = '';
            business.customerAddressProof = '';
            business.customerPayslip = '';
            business.ownerRG = '';
            business.ownerCPF = '';
            business.ownerAddressProof = '';
            business.ownerPayslip = '';
            business.createdByAdministrator = false;
            business.createdByManager = true;
            business.createdBySecretary = false;
            business.redirectedManagerId = 1;
            business.redirectedAdvisorId = 0;
            business.redirectedBrokerId = 0;
            business.company = company;
            business.manager = manager;
            business.broker = broker;
            business.owner = owner;
            business.customer = customer;
            business.property = property;
            business.lead = lead;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.create(business, transaction)];
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
    test("Buscando por um negócio de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = property;
            id = 1;
            company.id = 1;
            manager.id = 1;
            broker.id = 2;
            owner.id = 1;
            customer.id = 1;
            property.id = 1;
            lead.id = 1;
            business.status = 0;
            business.dateVisit = new Date('2022-03-15');
            business.dateSale = new Date('2022-03-25');
            business.visitForm = '';
            business.propertyRegistration = '';
            business.propertySaleContract = '';
            business.ITBI = '';
            business.customerRG = '';
            business.customerCPF = '';
            business.customerAddressProof = '';
            business.customerPayslip = '';
            business.ownerRG = '';
            business.ownerCPF = '';
            business.ownerAddressProof = '';
            business.ownerPayslip = '';
            business.createdByAdministrator = false;
            business.createdByManager = true;
            business.createdBySecretary = false;
            business.redirectedManagerId = 0;
            business.redirectedAdvisorId = 0;
            business.redirectedBrokerId = 1;
            business.company = company;
            business.manager = manager;
            business.broker = broker;
            business.owner = owner;
            business.customer = customer;
            business.property = property;
            business.lead = lead;
            business.createdAt = new Date('2022-03-28 08:45:46.928');
            business.updatedAt = new Date('2022-03-28 08:45:46.928');
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
    test("Atualizando um negócio de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expected, id;
        return __generator(this, function (_a) {
            expected = property;
            id = 1;
            company.id = 1;
            manager.id = 1;
            broker.id = 2;
            owner.id = 1;
            customer.id = 1;
            property.id = 1;
            lead.id = 1;
            business.status = 0;
            business.dateVisit = new Date('2022-03-15');
            business.dateSale = new Date('2022-03-25');
            business.visitForm = '';
            business.propertyRegistration = '';
            business.propertySaleContract = '';
            business.ITBI = '';
            business.customerRG = '';
            business.customerCPF = '';
            business.customerAddressProof = '';
            business.customerPayslip = '';
            business.ownerRG = '';
            business.ownerCPF = '';
            business.ownerAddressProof = '';
            business.ownerPayslip = '';
            business.createdByAdministrator = false;
            business.createdByManager = true;
            business.createdBySecretary = false;
            business.redirectedManagerId = 0;
            business.redirectedAdvisorId = 0;
            business.redirectedBrokerId = 1;
            business.company = company;
            business.manager = manager;
            business.broker = broker;
            business.owner = owner;
            business.customer = customer;
            business.property = property;
            business.lead = lead;
            connection.transaction(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, service.update(id, business, transaction)];
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
    test("Deletando um negócio de uma imobiliária", function () { return __awaiter(void 0, void 0, void 0, function () {
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
    test("Validando dados de um negócio", function () {
        var expected = true;
        var actual = service.validateData({
            status: 0,
            dateVisit: new Date('2022-03-15'),
            dateSale: new Date('2022-03-25'),
            visitForm: '',
            propertyRegistration: '',
            propertySaleContract: '',
            ITBI: '',
            customerRG: '',
            customerCPF: '',
            customerAddressProof: '',
            customerPayslip: '',
            ownerRG: '',
            ownerCPF: '',
            ownerAddressProof: '',
            ownerPayslip: '',
            createdByAdministrator: false,
            createdByManager: true,
            createdBySecretary: false,
            redirectedManagerId: 0,
            redirectedAdvisorId: 0,
            redirectedBrokerId: 1
        });
        expect(actual).toBe(expected);
    });
    test("Verificando se existe um negócio cadastrado através do ID", function () { return __awaiter(void 0, void 0, void 0, function () {
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
//# sourceMappingURL=business.spec.js.map