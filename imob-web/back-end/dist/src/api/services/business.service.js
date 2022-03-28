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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessService = void 0;
var typeorm_1 = require("typeorm");
var business_entity_1 = require("../entities/business.entity");
var moment_1 = __importDefault(require("moment"));
var BusinessService = /** @class */ (function () {
    function BusinessService() {
        this.repository = (0, typeorm_1.getRepository)(business_entity_1.BusinessEntity);
    }
    BusinessService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var businessEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: [
                                'company',
                                'owner',
                                'customer',
                                'property',
                                'lead'
                            ]
                        })];
                    case 1:
                        businessEntity = _a.sent();
                        return [2 /*return*/, businessEntity];
                }
            });
        });
    };
    BusinessService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var businessEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        businessEntity = this.repository.create({
                            company: data.company,
                            administrator: data === null || data === void 0 ? void 0 : data.administrator,
                            manager: data === null || data === void 0 ? void 0 : data.manager,
                            advisor: data === null || data === void 0 ? void 0 : data.advisor,
                            broker: data === null || data === void 0 ? void 0 : data.broker,
                            secretary: data === null || data === void 0 ? void 0 : data.secretary,
                            owner: data.owner,
                            customer: data.customer,
                            property: data.property,
                            lead: data.lead,
                            status: data.status,
                            dateVisit: data.dateVisit,
                            dateSale: data.dateSale,
                            visitForm: data.visitForm,
                            propertyRegistration: data.propertyRegistration,
                            propertySaleContract: data.propertySaleContract,
                            ITBI: data.ITBI,
                            customerRG: data.customerRG,
                            customerCPF: data.customerCPF,
                            customerAddressProof: data.customerAddressProof,
                            customerPayslip: data.customerPayslip,
                            ownerRG: data.ownerRG,
                            ownerCPF: data.ownerCPF,
                            ownerAddressProof: data.ownerAddressProof,
                            ownerPayslip: data.ownerPayslip,
                            createdByAdministrator: data.createdByAdministrator,
                            createdByManager: data.createdByManager,
                            createdBySecretary: data.createdBySecretary,
                            redirectedManagerId: data.redirectedManagerId,
                            redirectedAdvisorId: data.redirectedAdvisorId,
                            redirectedBrokerId: data.redirectedBrokerId
                        });
                        return [4 /*yield*/, transaction.save(businessEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BusinessService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var businessEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: id
                            },
                            relations: [
                                'company',
                                'owner',
                                'customer',
                                'property',
                                'lead'
                            ]
                        })];
                    case 1:
                        businessEntity = _a.sent();
                        return [2 /*return*/, businessEntity];
                }
            });
        });
    };
    BusinessService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var businessEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        businessEntity = this.repository.create({
                            id: id,
                            manager: data === null || data === void 0 ? void 0 : data.manager,
                            advisor: data === null || data === void 0 ? void 0 : data.advisor,
                            broker: data === null || data === void 0 ? void 0 : data.broker,
                            secretary: data === null || data === void 0 ? void 0 : data.secretary,
                            owner: data.owner,
                            customer: data.customer,
                            property: data.property,
                            lead: data.lead,
                            status: data.status,
                            dateVisit: data.dateVisit,
                            dateSale: data.dateSale,
                            visitForm: data.visitForm,
                            propertyRegistration: data.propertyRegistration,
                            propertySaleContract: data.propertySaleContract,
                            ITBI: data.ITBI,
                            customerRG: data.customerRG,
                            customerCPF: data.customerCPF,
                            customerAddressProof: data.customerAddressProof,
                            customerPayslip: data.customerPayslip,
                            ownerRG: data.ownerRG,
                            ownerCPF: data.ownerCPF,
                            ownerAddressProof: data.ownerAddressProof,
                            ownerPayslip: data.ownerPayslip,
                            createdByAdministrator: data.createdByAdministrator,
                            createdByManager: data.createdByManager,
                            createdBySecretary: data.createdBySecretary,
                            redirectedManagerId: data.redirectedManagerId,
                            redirectedAdvisorId: data.redirectedAdvisorId,
                            redirectedBrokerId: data.redirectedBrokerId
                        });
                        return [4 /*yield*/, transaction.save(businessEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BusinessService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(business_entity_1.BusinessEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BusinessService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.hasOwnProperty('status') ||
            !data.hasOwnProperty('dateVisit') ||
            !data.hasOwnProperty('dateSale') ||
            !data.hasOwnProperty('visitForm') ||
            !data.hasOwnProperty('propertyRegistration') ||
            !data.hasOwnProperty('propertySaleContract') ||
            !data.hasOwnProperty('ITBI') ||
            !data.hasOwnProperty('customerRG') ||
            !data.hasOwnProperty('customerCPF') ||
            !data.hasOwnProperty('customerAddressProof') ||
            !data.hasOwnProperty('customerPayslip') ||
            !data.hasOwnProperty('ownerRG') ||
            !data.hasOwnProperty('ownerCPF') ||
            !data.hasOwnProperty('ownerAddressProof') ||
            !data.hasOwnProperty('ownerPayslip') ||
            !data.hasOwnProperty('createdByAdministrator') ||
            !data.hasOwnProperty('createdByManager') ||
            !data.hasOwnProperty('createdBySecretary') ||
            !data.hasOwnProperty('redirectedManagerId') ||
            !data.hasOwnProperty('redirectedAdvisorId') ||
            !data.hasOwnProperty('redirectedBrokerId')) {
            isValid = false;
        }
        return isValid;
    };
    BusinessService.prototype.alreadyRegisterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var businessEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        businessEntity = _a.sent();
                        result = (businessEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BusinessService.prototype.transferBusinessToManager = function (id, manager, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.update(business_entity_1.BusinessEntity, {
                            id: id
                        }, {
                            manager: {
                                id: manager.id
                            },
                            redirectedManagerId: manager.id
                        })];
                    case 1:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                }
            });
        });
    };
    BusinessService.prototype.transferBusinessToAdvisor = function (id, advisor, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.update(business_entity_1.BusinessEntity, {
                            id: id
                        }, {
                            advisor: {
                                id: advisor.id
                            },
                            redirectedAdvisorId: advisor.id
                        })];
                    case 1:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                }
            });
        });
    };
    BusinessService.prototype.transferBusinessToBroker = function (id, broker, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.update(business_entity_1.BusinessEntity, {
                            id: id
                        }, {
                            broker: {
                                id: broker.id
                            },
                            redirectedBrokerId: broker.id
                        })];
                    case 1:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                }
            });
        });
    };
    BusinessService.prototype.rejectBusiness = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.update(business_entity_1.BusinessEntity, {
                            id: id
                        }, {
                            status: 3
                        })];
                    case 1:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                }
            });
        });
    };
    BusinessService.prototype.closeBusiness = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.update(business_entity_1.BusinessEntity, {
                            id: id
                        }, {
                            status: 4
                        })];
                    case 1:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                }
            });
        });
    };
    BusinessService.prototype.calculateTotalAmountBusinesses = function (month) {
        return __awaiter(this, void 0, void 0, function () {
            var dateFrom, dateTo, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateFrom = (0, moment_1.default)(month).startOf('month').format('YYYY-MM-DD');
                        dateTo = (0, moment_1.default)(month).endOf('month').format('YYYY-MM-DD');
                        return [4 /*yield*/, this.repository.query("\n                SELECT\n                    SUM (CASE WHEN (businesses.status = 0) THEN (1) ELSE (0) END) AS \"totalAmountProspecting\",\n                    SUM (CASE WHEN (businesses.status = 1) THEN (1) ELSE (0) END) AS \"totalAmountVisit\",\n                    SUM (CASE WHEN (businesses.status = 2) THEN (1) ELSE (0) END) AS \"totalAmountProposal\",\n                    SUM (CASE WHEN (businesses.status = 3) THEN (1) ELSE (0) END) AS \"totalAmountRejected\",\n                    SUM (CASE WHEN (businesses.status = 4) THEN (1) ELSE (0) END) AS \"totalAmountClosed\",\n                    COUNT (*) AS \"totalAmountBusinesses\"\n                FROM business.businesses AS businesses\n                WHERE (businesses.created_at BETWEEN '" + dateFrom + "' AND '" + dateTo + "')\n            ")];
                    case 1:
                        query = _a.sent();
                        result = query.map(function (object) {
                            for (var key in object) {
                                if (typeof object[key] === 'string')
                                    object[key] = Number(object[key]);
                            }
                            return object;
                        });
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    return BusinessService;
}());
exports.BusinessService = BusinessService;
//# sourceMappingURL=business.service.js.map