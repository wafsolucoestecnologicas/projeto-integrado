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
exports.BusinessController = void 0;
var typeorm_1 = require("typeorm");
var business_service_1 = require("../services/business.service");
var administrator_service_1 = require("../services/administrator.service");
var manager_service_1 = require("../services/manager.service");
var advisor_service_1 = require("../services/advisor.service");
var broker_service_1 = require("../services/broker.service");
var secretary_service_1 = require("../services/secretary.service");
var owner_service_1 = require("../services/owner.service");
var customer_service_1 = require("../services/customer.service");
var property_service_1 = require("../services/property.service");
var lead_service_1 = require("../services/lead.service");
var utils_1 = require("../../../utils/utils");
var BusinessController = /** @class */ (function () {
    function BusinessController() {
    }
    BusinessController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var businessService, businessEntity, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        businessService = new business_service_1.BusinessService();
                        return [4 /*yield*/, businessService.index(request.payload)];
                    case 1:
                        businessEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(businessEntity)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_1.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BusinessController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, administratorService, managerService, advisorService, brokerService, secretaryService, ownerService, customerService, propertyService, leadService, administratorEntity, managerEntity, advisorEntity, brokerEntity, secretaryEntity, ownerEntity, customerEntity, propertyEntity, leadEntity, businessEntity, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 31, , 32]);
                                        businessService = new business_service_1.BusinessService();
                                        result = businessService.validateData(request.body);
                                        if (!result) return [3 /*break*/, 29];
                                        administratorService = new administrator_service_1.AdministratorService();
                                        managerService = new manager_service_1.ManagerService();
                                        advisorService = new advisor_service_1.AdvisorService();
                                        brokerService = new broker_service_1.BrokerService();
                                        secretaryService = new secretary_service_1.SecretaryService();
                                        ownerService = new owner_service_1.OwnerService();
                                        customerService = new customer_service_1.CustomerService();
                                        propertyService = new property_service_1.PropertyService();
                                        leadService = new lead_service_1.LeadService();
                                        request.body.company = request.payload.company;
                                        request.body.dateVisit = (request.body.dateVisit) ? request.body.dateVisit : null;
                                        request.body.dateSale = (request.body.dateSale) ? request.body.dateSale : null;
                                        if (!(request.body.administrator && request.body.administrator.id)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, administratorService.read(request.body.administrador.id)];
                                    case 1:
                                        administratorEntity = _a.sent();
                                        if (administratorEntity) {
                                            request.body.administrador = administratorEntity;
                                        }
                                        else {
                                            request.body.administrator = null;
                                        }
                                        return [3 /*break*/, 3];
                                    case 2:
                                        request.body.administrator = null;
                                        _a.label = 3;
                                    case 3:
                                        if (!(request.body.manager && request.body.manager.id)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, managerService.read(request.body.manager.id, request.payload)];
                                    case 4:
                                        managerEntity = _a.sent();
                                        if (managerEntity) {
                                            request.body.manager = managerEntity;
                                        }
                                        else {
                                            request.body.manager = null;
                                        }
                                        return [3 /*break*/, 6];
                                    case 5:
                                        request.body.manager = null;
                                        _a.label = 6;
                                    case 6:
                                        if (!(request.body.advisor && request.body.advisor.id)) return [3 /*break*/, 8];
                                        return [4 /*yield*/, advisorService.read(request.body.advisor.id, request.payload)];
                                    case 7:
                                        advisorEntity = _a.sent();
                                        if (advisorEntity) {
                                            request.body.advisor = advisorEntity;
                                        }
                                        else {
                                            request.body.advisor = null;
                                        }
                                        return [3 /*break*/, 9];
                                    case 8:
                                        request.body.advisor = null;
                                        _a.label = 9;
                                    case 9:
                                        if (!(request.body.broker && request.body.broker.id)) return [3 /*break*/, 11];
                                        return [4 /*yield*/, brokerService.read(request.body.broker.id, request.payload)];
                                    case 10:
                                        brokerEntity = _a.sent();
                                        if (brokerEntity) {
                                            request.body.broker = brokerEntity;
                                        }
                                        else {
                                            request.body.broker = null;
                                        }
                                        return [3 /*break*/, 12];
                                    case 11:
                                        request.body.broker = null;
                                        _a.label = 12;
                                    case 12:
                                        if (!(request.body.secretary && request.body.secretary.id)) return [3 /*break*/, 14];
                                        return [4 /*yield*/, secretaryService.read(request.body.secretary.id, request.payload)];
                                    case 13:
                                        secretaryEntity = _a.sent();
                                        if (secretaryEntity) {
                                            request.body.secretary = secretaryEntity;
                                        }
                                        else {
                                            request.body.secretary = null;
                                        }
                                        return [3 /*break*/, 15];
                                    case 14:
                                        request.body.secretary = null;
                                        _a.label = 15;
                                    case 15:
                                        if (!(request.body.owner && request.body.owner.id)) return [3 /*break*/, 17];
                                        return [4 /*yield*/, ownerService.read(request.body.owner.id, request.payload)];
                                    case 16:
                                        ownerEntity = _a.sent();
                                        if (ownerEntity) {
                                            request.body.owner = ownerEntity;
                                        }
                                        else {
                                            request.body.owner = null;
                                        }
                                        return [3 /*break*/, 18];
                                    case 17:
                                        request.body.owner = null;
                                        _a.label = 18;
                                    case 18:
                                        if (!(request.body.customer && request.body.customer.id)) return [3 /*break*/, 20];
                                        return [4 /*yield*/, customerService.read(request.body.customer.id, request.payload)];
                                    case 19:
                                        customerEntity = _a.sent();
                                        if (customerEntity) {
                                            request.body.customer = customerEntity;
                                        }
                                        else {
                                            request.body.customer = null;
                                        }
                                        return [3 /*break*/, 21];
                                    case 20:
                                        request.body.customer = null;
                                        _a.label = 21;
                                    case 21:
                                        if (!(request.body.property && request.body.property.id)) return [3 /*break*/, 23];
                                        return [4 /*yield*/, propertyService.read(request.body.property.id, request.payload)];
                                    case 22:
                                        propertyEntity = _a.sent();
                                        if (propertyEntity) {
                                            request.body.property = propertyEntity;
                                        }
                                        else {
                                            request.body.property = null;
                                        }
                                        return [3 /*break*/, 24];
                                    case 23:
                                        request.body.property = null;
                                        _a.label = 24;
                                    case 24:
                                        if (!(request.body.lead && request.body.lead.id)) return [3 /*break*/, 26];
                                        return [4 /*yield*/, leadService.read(request.body.lead.id)];
                                    case 25:
                                        leadEntity = _a.sent();
                                        if (leadEntity) {
                                            request.body.lead = leadEntity;
                                        }
                                        else {
                                            request.body.lead = null;
                                        }
                                        return [3 /*break*/, 27];
                                    case 26:
                                        request.body.lead = null;
                                        _a.label = 27;
                                    case 27: return [4 /*yield*/, businessService.create(request.body, transaction)];
                                    case 28:
                                        businessEntity = _a.sent();
                                        return [2 /*return*/, response.status(201).json(businessEntity)];
                                    case 29: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                                    case 30: return [3 /*break*/, 32];
                                    case 31:
                                        error_2 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_2.message })];
                                    case 32: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var businessService, businessEntity, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        businessService = new business_service_1.BusinessService();
                        if (!Number(request.params.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, businessService.read(Number(request.params.id))];
                    case 1:
                        businessEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(businessEntity)];
                    case 2: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_3.message })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BusinessController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, result_1, businessEntity, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 9, , 10]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, businessService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 5];
                                        result_1 = businessService.validateData(request.body);
                                        if (!result_1) return [3 /*break*/, 3];
                                        return [4 /*yield*/, businessService.update(Number(request.params.id), request.body, transaction)];
                                    case 2:
                                        businessEntity = _a.sent();
                                        return [2 /*return*/, response.status(200).json(businessEntity)];
                                    case 3: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 8: return [3 /*break*/, 10];
                                    case 9:
                                        error_4 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_4.message })];
                                    case 10: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, deleteResult, error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, businessService.delete(Number(request.params.id), transaction)];
                                    case 1:
                                        deleteResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ business: deleteResult.affected })];
                                    case 2: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 3: return [3 /*break*/, 5];
                                    case 4:
                                        error_5 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_5.message })];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.transferBusinessToManager = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, updateResult, error_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 7, , 8]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, businessService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, businessService.transferBusinessToManager(Number(request.params.id), request.body.manager, transaction)];
                                    case 2:
                                        updateResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ business: updateResult.affected })];
                                    case 3: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        error_6 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_6.message })];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.transferBusinessToAdvisor = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, updateResult, error_7;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 7, , 8]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, businessService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, businessService.transferBusinessToAdvisor(Number(request.params.id), request.body.advisor, transaction)];
                                    case 2:
                                        updateResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ business: updateResult.affected })];
                                    case 3: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        error_7 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_7.message })];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.transferBusinessToBroker = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, updateResult, error_8;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 7, , 8]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, businessService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, businessService.transferBusinessToBroker(Number(request.params.id), request.body.broker, transaction)];
                                    case 2:
                                        updateResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ business: updateResult.affected })];
                                    case 3: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        error_8 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_8.message })];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.rejectBusiness = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, updateResult, error_9;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 7, , 8]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, businessService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, businessService.rejectBusiness(Number(request.params.id), transaction)];
                                    case 2:
                                        updateResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ business: updateResult.affected })];
                                    case 3: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        error_9 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_9.message })];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.closeBusiness = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var businessService, result, updateResult, error_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 7, , 8]);
                                        businessService = new business_service_1.BusinessService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, businessService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 3];
                                        return [4 /*yield*/, businessService.closeBusiness(Number(request.params.id), transaction)];
                                    case 2:
                                        updateResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ business: updateResult.affected })];
                                    case 3: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        error_10 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_10.message })];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BusinessController.prototype.amount = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var businessService, result, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        businessService = new business_service_1.BusinessService();
                        if (!request.query.month) return [3 /*break*/, 2];
                        return [4 /*yield*/, businessService.calculateTotalAmountBusinesses(String(request.query.month), request.payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.status(200).json(result)];
                    case 2: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_11 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_11.message })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BusinessController.prototype.upload = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, CNPJ, filename, path;
            return __generator(this, function (_b) {
                try {
                    id = request.query.id;
                    CNPJ = request.payload.company.CNPJ;
                    filename = (_a = request.file) === null || _a === void 0 ? void 0 : _a.originalname;
                    path = "public/uploads/businesses/" + CNPJ + "/" + id + "/" + filename;
                    return [2 /*return*/, response.status(200).json({ path: path })];
                }
                catch (error) {
                    return [2 /*return*/, response.status(500).json({ message: error.message })];
                }
                return [2 /*return*/];
            });
        });
    };
    BusinessController.prototype.download = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                try {
                    path = request.query.path;
                    return [2 /*return*/, response.status(200).download("" + path)];
                }
                catch (error) {
                    return [2 /*return*/, response.status(500).json({ message: error.message })];
                }
                return [2 /*return*/];
            });
        });
    };
    return BusinessController;
}());
exports.BusinessController = BusinessController;
//# sourceMappingURL=business.controller.js.map