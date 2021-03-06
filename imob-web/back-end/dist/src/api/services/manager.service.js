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
exports.ManagerService = void 0;
var typeorm_1 = require("typeorm");
var manager_entity_1 = require("../entities/manager.entity");
var ManagerService = /** @class */ (function () {
    function ManagerService() {
        this.repository = (0, typeorm_1.getRepository)(manager_entity_1.ManagerEntity);
    }
    ManagerService.prototype.index = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var managerEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: [
                                'company'
                            ],
                            where: {
                                company: payload.company.id
                            }
                        })];
                    case 1:
                        managerEntity = _a.sent();
                        return [2 /*return*/, managerEntity];
                }
            });
        });
    };
    ManagerService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var managerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        managerEntity = this.repository.create({
                            company: data.company,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            birthDate: data.birthDate,
                            RG: data.RG,
                            CPF: data.CPF,
                            landline: data.landline,
                            cellPhone: data.cellPhone,
                            profession: data.profession,
                            isManager: true
                        });
                        return [4 /*yield*/, transaction.save(managerEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ManagerService.prototype.read = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var managerEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            relations: [
                                'company'
                            ],
                            where: {
                                id: id,
                                company: payload.company.id
                            }
                        })];
                    case 1:
                        managerEntity = _a.sent();
                        return [2 /*return*/, managerEntity];
                }
            });
        });
    };
    ManagerService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var managerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        managerEntity = this.repository.create({
                            id: id,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            birthDate: data.birthDate,
                            RG: data.RG,
                            CPF: data.CPF,
                            landline: data.landline,
                            cellPhone: data.cellPhone,
                            profession: data.profession
                        });
                        return [4 /*yield*/, transaction.save(managerEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ManagerService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(manager_entity_1.ManagerEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ManagerService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.name ||
            !data.surname ||
            !data.email ||
            !data.birthDate ||
            !data.RG ||
            !data.CPF ||
            !data.cellPhone) {
            isValid = false;
        }
        return isValid;
    };
    ManagerService.prototype.alreadyRegisterByCPF = function (CPF) {
        return __awaiter(this, void 0, void 0, function () {
            var managerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['CPF'],
                            where: {
                                CPF: CPF
                            }
                        })];
                    case 1:
                        managerEntity = _a.sent();
                        result = (managerEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ManagerService.prototype.alreadyRegisterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var managerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        managerEntity = _a.sent();
                        result = (managerEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ManagerService;
}());
exports.ManagerService = ManagerService;
//# sourceMappingURL=manager.service.js.map