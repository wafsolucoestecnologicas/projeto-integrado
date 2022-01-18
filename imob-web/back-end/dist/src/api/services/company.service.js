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
exports.CompanyService = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("../entities/company.entity");
var CompanyService = /** @class */ (function () {
    function CompanyService() {
        this.repository = (0, typeorm_1.getRepository)(company_entity_1.CompanyEntity);
    }
    CompanyService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var companyEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1:
                        companyEntity = _a.sent();
                        return [2 /*return*/, companyEntity];
                }
            });
        });
    };
    CompanyService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var companyEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        companyEntity = this.repository.create({
                            CNPJ: data.CNPJ,
                            corporateName: data.corporateName,
                            stateRegistration: data.stateRegistration,
                            percentageCommissionReceivable: data.percentageCommissionReceivable,
                            percentageCommissionPayableForClosedDeals: data.percentageCommissionPayableForClosedDeals,
                            percentageCommissionPayableForPropertyCaptured: data.percentageCommissionPayableForPropertyCaptured
                        });
                        return [4 /*yield*/, transaction.save(companyEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CompanyService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var companyEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        companyEntity = _a.sent();
                        return [2 /*return*/, companyEntity];
                }
            });
        });
    };
    CompanyService.prototype.udpate = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var companyEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        companyEntity = this.repository.create({
                            id: id,
                            CNPJ: data.CNPJ,
                            corporateName: data.corporateName,
                            stateRegistration: data.stateRegistration,
                            percentageCommissionReceivable: data.percentageCommissionReceivable,
                            percentageCommissionPayableForClosedDeals: data.percentageCommissionPayableForClosedDeals,
                            percentageCommissionPayableForPropertyCaptured: data.percentageCommissionPayableForPropertyCaptured
                        });
                        return [4 /*yield*/, transaction.save(companyEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CompanyService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(company_entity_1.CompanyEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CompanyService.prototype.createCompanyEntityByRepository = function (data) {
        var companyEntity = this.repository.create({
            CNPJ: data.CNPJ,
            corporateName: data.corporateName,
            stateRegistration: data.stateRegistration
        });
        return companyEntity;
    };
    CompanyService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.CNPJ ||
            !data.corporateName ||
            !data.stateRegistration) {
            isValid = false;
        }
        return isValid;
    };
    CompanyService.prototype.alreadyRegisteredByCNPJ = function (CNPJ) {
        return __awaiter(this, void 0, void 0, function () {
            var companyEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['CNPJ'],
                            where: {
                                CNPJ: CNPJ
                            }
                        })];
                    case 1:
                        companyEntity = _a.sent();
                        result = (companyEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CompanyService.prototype.alreadyRegisteredById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var companyEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        companyEntity = _a.sent();
                        result = (companyEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map