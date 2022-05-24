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
exports.UserController = void 0;
var typeorm_1 = require("typeorm");
var user_service_1 = require("../services/user.service");
var company_service_1 = require("../services/company.service");
var profile_service_1 = require("../services/profile.service");
var administrator_service_1 = require("../services/administrator.service");
var manager_service_1 = require("../services/manager.service");
var advisor_service_1 = require("../services/advisor.service");
var broker_service_1 = require("../services/broker.service");
var secretary_service_1 = require("../services/secretary.service");
var profile_model_1 = require("../models/profile.model");
var utils_1 = require("../../../utils/utils");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, userEntity, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userService = new user_service_1.UserService();
                        return [4 /*yield*/, userService.index(request.payload)];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(userEntity)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_1.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var userService, result, result_1, companyEntity, companyService, profileService, profileEntity, _a, administratorService, administratorEntity, managerService, managerEntity, advisorService, advisorEntity, brokerService, brokerEntity, secretaryService, secretaryEntity, userEntity, error_2;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 26, , 27]);
                                        userService = new user_service_1.UserService();
                                        result = userService.validateData(request.body);
                                        if (!result) return [3 /*break*/, 24];
                                        return [4 /*yield*/, userService.alreadyRegisteredByEmail(request.body.email)];
                                    case 1:
                                        result_1 = _b.sent();
                                        if (!!result_1) return [3 /*break*/, 22];
                                        companyEntity = void 0;
                                        if (!(!request.body.company.id || request.body.profile.id === 1)) return [3 /*break*/, 3];
                                        companyService = new company_service_1.CompanyService();
                                        return [4 /*yield*/, companyService.create({
                                                CNPJ: '00000000000000',
                                                corporateName: 'Empresa Cadastrada Automaticamente',
                                                stateRegistration: '0000000000000',
                                                percentageCommissionReceivable: 0,
                                                percentageCommissionPayableForClosedDeals: 0,
                                                percentageCommissionPayableForPropertyCaptured: 0
                                            }, transaction)];
                                    case 2:
                                        companyEntity =
                                            _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        companyEntity = request.body.company;
                                        _b.label = 4;
                                    case 4:
                                        if (!(request.body.company.id || companyEntity)) return [3 /*break*/, 20];
                                        profileService = new profile_service_1.ProfileService();
                                        return [4 /*yield*/, profileService.read(Number(request.body.profile.id))];
                                    case 5:
                                        profileEntity = _b.sent();
                                        if (!profileEntity) return [3 /*break*/, 18];
                                        request.body.company = (!request.body.company.id) ? companyEntity : request.body.company;
                                        request.body.profile = profileEntity;
                                        _a = profileEntity.id;
                                        switch (_a) {
                                            case profile_model_1.ProfileEnum.ADMINISTRATOR: return [3 /*break*/, 6];
                                            case profile_model_1.ProfileEnum.MANAGER: return [3 /*break*/, 8];
                                            case profile_model_1.ProfileEnum.ADVISOR: return [3 /*break*/, 10];
                                            case profile_model_1.ProfileEnum.BROKER: return [3 /*break*/, 12];
                                            case profile_model_1.ProfileEnum.SECRETARY: return [3 /*break*/, 14];
                                        }
                                        return [3 /*break*/, 16];
                                    case 6:
                                        administratorService = new administrator_service_1.AdministratorService();
                                        return [4 /*yield*/, administratorService.create({
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                RG: '000000000',
                                                CPF: '00000000000',
                                                cellPhone: '00000000000'
                                            }, transaction)];
                                    case 7:
                                        administratorEntity = _b.sent();
                                        request.body.administrator = administratorEntity;
                                        return [3 /*break*/, 16];
                                    case 8:
                                        managerService = new manager_service_1.ManagerService();
                                        return [4 /*yield*/, managerService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                RG: '000000000',
                                                CPF: '00000000000',
                                                cellPhone: '00000000000'
                                            }, transaction)];
                                    case 9:
                                        managerEntity = _b.sent();
                                        request.body.manager = managerEntity;
                                        return [3 /*break*/, 16];
                                    case 10:
                                        advisorService = new advisor_service_1.AdvisorService();
                                        return [4 /*yield*/, advisorService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                RG: '000000000',
                                                CPF: '00000000000',
                                                cellPhone: '00000000000'
                                            }, transaction)];
                                    case 11:
                                        advisorEntity = _b.sent();
                                        request.body.advisor = advisorEntity;
                                        return [3 /*break*/, 16];
                                    case 12:
                                        brokerService = new broker_service_1.BrokerService();
                                        return [4 /*yield*/, brokerService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                RG: '000000000',
                                                CPF: '00000000000',
                                                cellPhone: '00000000000'
                                            }, transaction)];
                                    case 13:
                                        brokerEntity = _b.sent();
                                        request.body.broker = brokerEntity;
                                        return [3 /*break*/, 16];
                                    case 14:
                                        secretaryService = new secretary_service_1.SecretaryService();
                                        return [4 /*yield*/, secretaryService.create({
                                                company: companyEntity,
                                                name: request.body.name,
                                                surname: request.body.surname,
                                                email: request.body.email,
                                                birthDate: new Date(),
                                                RG: '000000000',
                                                CPF: '00000000000',
                                                cellPhone: '00000000000'
                                            }, transaction)];
                                    case 15:
                                        secretaryEntity = _b.sent();
                                        request.body.secretary = secretaryEntity;
                                        return [3 /*break*/, 16];
                                    case 16: return [4 /*yield*/, userService.create(request.body, transaction)];
                                    case 17:
                                        userEntity = _b.sent();
                                        if (userEntity)
                                            userEntity.password = '';
                                        return [2 /*return*/, response.status(201).json(userEntity)];
                                    case 18: return [2 /*return*/, response.status(500).json({ message: "" + utils_1.returnMessages[6] })];
                                    case 19: return [3 /*break*/, 21];
                                    case 20: return [2 /*return*/, response.status(500).json({ message: "" + utils_1.returnMessages[5] })];
                                    case 21: return [3 /*break*/, 23];
                                    case 22: return [2 /*return*/, response.status(409).json({ message: utils_1.statusMessages[409] + " " + utils_1.returnMessages[4] })];
                                    case 23: return [3 /*break*/, 25];
                                    case 24: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                                    case 25: return [3 /*break*/, 27];
                                    case 26:
                                        error_2 = _b.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_2.message })];
                                    case 27: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, userEntity, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        userService = new user_service_1.UserService();
                        if (!Number(request.params.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, userService.read(Number(request.params.id), request.payload)];
                    case 1:
                        userEntity = _a.sent();
                        if (userEntity)
                            userEntity.password = '';
                        return [2 /*return*/, response.status(200).json(userEntity)];
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
    UserController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var userService, result, result_2, userEntity, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 9, , 10]);
                                        userService = new user_service_1.UserService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, userService.alreadyRegisteredById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 5];
                                        result_2 = userService.validateData(request.body);
                                        if (!result_2) return [3 /*break*/, 3];
                                        return [4 /*yield*/, userService.update(Number(request.params.id), request.body, transaction)];
                                    case 2:
                                        userEntity = _a.sent();
                                        if (userEntity)
                                            userEntity.password = '';
                                        return [2 /*return*/, response.status(200).json(userEntity)];
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
    UserController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var userService, userEntity, personId, userDeleteResult, personDeleteResult, _a, administratorService, managerService, advisorService, brokerService, secretaryService, error_5;
                            var _b, _c, _d, _e, _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        _g.trys.push([0, 18, , 19]);
                                        userService = new user_service_1.UserService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 16];
                                        return [4 /*yield*/, userService.read(Number(request.params.id), request.payload)];
                                    case 1:
                                        userEntity = _g.sent();
                                        if (!userEntity) return [3 /*break*/, 14];
                                        personId = ((_b = userEntity.administrator) === null || _b === void 0 ? void 0 : _b.id) ||
                                            ((_c = userEntity.manager) === null || _c === void 0 ? void 0 : _c.id) ||
                                            ((_d = userEntity.advisor) === null || _d === void 0 ? void 0 : _d.id) ||
                                            ((_e = userEntity.broker) === null || _e === void 0 ? void 0 : _e.id) ||
                                            ((_f = userEntity.secretary) === null || _f === void 0 ? void 0 : _f.id) ||
                                            0;
                                        return [4 /*yield*/, userService.delete(Number(request.params.id), transaction)];
                                    case 2:
                                        userDeleteResult = _g.sent();
                                        personDeleteResult = new typeorm_1.DeleteResult();
                                        _a = userEntity.profile.id;
                                        switch (_a) {
                                            case profile_model_1.ProfileEnum.ADMINISTRATOR: return [3 /*break*/, 3];
                                            case profile_model_1.ProfileEnum.MANAGER: return [3 /*break*/, 5];
                                            case profile_model_1.ProfileEnum.ADVISOR: return [3 /*break*/, 7];
                                            case profile_model_1.ProfileEnum.BROKER: return [3 /*break*/, 9];
                                            case profile_model_1.ProfileEnum.SECRETARY: return [3 /*break*/, 11];
                                        }
                                        return [3 /*break*/, 13];
                                    case 3:
                                        administratorService = new administrator_service_1.AdministratorService();
                                        return [4 /*yield*/, administratorService.delete(personId, transaction)];
                                    case 4:
                                        personDeleteResult =
                                            _g.sent();
                                        return [3 /*break*/, 13];
                                    case 5:
                                        managerService = new manager_service_1.ManagerService();
                                        return [4 /*yield*/, managerService.delete(personId, transaction)];
                                    case 6:
                                        personDeleteResult =
                                            _g.sent();
                                        return [3 /*break*/, 13];
                                    case 7:
                                        advisorService = new advisor_service_1.AdvisorService();
                                        return [4 /*yield*/, advisorService.delete(personId, transaction)];
                                    case 8:
                                        personDeleteResult =
                                            _g.sent();
                                        return [3 /*break*/, 13];
                                    case 9:
                                        brokerService = new broker_service_1.BrokerService();
                                        return [4 /*yield*/, brokerService.delete(personId, transaction)];
                                    case 10:
                                        personDeleteResult =
                                            _g.sent();
                                        return [3 /*break*/, 13];
                                    case 11:
                                        secretaryService = new secretary_service_1.SecretaryService();
                                        return [4 /*yield*/, secretaryService.delete(personId, transaction)];
                                    case 12:
                                        personDeleteResult =
                                            _g.sent();
                                        return [3 /*break*/, 13];
                                    case 13: return [2 /*return*/, response.status(200).json({
                                            user: userDeleteResult.affected,
                                            person: personDeleteResult.affected
                                        })];
                                    case 14: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 15: return [3 /*break*/, 17];
                                    case 16: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 17: return [3 /*break*/, 19];
                                    case 18:
                                        error_5 = _g.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_5.message })];
                                    case 19: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map