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
exports.LeadService = void 0;
var typeorm_1 = require("typeorm");
var lead_entity_1 = require("../entities/lead.entity");
var moment_1 = __importDefault(require("moment"));
var LeadService = /** @class */ (function () {
    function LeadService() {
        this.repository = (0, typeorm_1.getRepository)(lead_entity_1.LeadEntity);
    }
    LeadService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var leadEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: [
                                'company'
                            ]
                        })];
                    case 1:
                        leadEntity = _a.sent();
                        return [2 /*return*/, leadEntity];
                }
            });
        });
    };
    LeadService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var leadEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        leadEntity = this.repository.create({
                            company: data.company,
                            administrator: data === null || data === void 0 ? void 0 : data.administrator,
                            manager: data === null || data === void 0 ? void 0 : data.manager,
                            secretary: data === null || data === void 0 ? void 0 : data.secretary,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            source: data.source,
                            landline: data.landline,
                            cellPhone: data.cellPhone,
                            comments: data.comments.toLowerCase(),
                            createdByAdministrator: data.createdByAdministrator,
                            createdByManager: data.createdByManager,
                            createdBySecretary: data.createdBySecretary
                        });
                        return [4 /*yield*/, transaction.save(leadEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    LeadService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var leadEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: id
                            },
                            relations: [
                                'company'
                            ]
                        })];
                    case 1:
                        leadEntity = _a.sent();
                        return [2 /*return*/, leadEntity];
                }
            });
        });
    };
    LeadService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var leadEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        leadEntity = this.repository.create({
                            id: id,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            source: data.source,
                            landline: data.landline,
                            cellPhone: data.cellPhone,
                            comments: data.comments.toLowerCase(),
                            createdByAdministrator: data.createdByAdministrator,
                            createdByManager: data.createdByManager,
                            createdBySecretary: data.createdBySecretary
                        });
                        return [4 /*yield*/, transaction.save(leadEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    LeadService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(lead_entity_1.LeadEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    LeadService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.name ||
            !data.surname ||
            !data.email ||
            !data.hasOwnProperty('source') ||
            !data.hasOwnProperty('landline') ||
            !data.cellPhone ||
            !data.hasOwnProperty('comments') ||
            !data.hasOwnProperty('createdByAdministrator') ||
            !data.hasOwnProperty('createdByManager') ||
            !data.hasOwnProperty('createdBySecretary')) {
            isValid = false;
        }
        return isValid;
    };
    LeadService.prototype.alreadyRegisterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var leadEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        leadEntity = _a.sent();
                        result = (leadEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    LeadService.prototype.alreadyRegisterByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var leadEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['email'],
                            where: {
                                email: email
                            }
                        })];
                    case 1:
                        leadEntity = _a.sent();
                        result = (leadEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @TODO Implementar método de pesquisa avançada de leads */
    /* public async advancedLeadSearch(): Promise<LeadEntity[]> { } */
    LeadService.prototype.calculateTotalAmountLeads = function (month) {
        return __awaiter(this, void 0, void 0, function () {
            var dateFrom, dateTo, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateFrom = (0, moment_1.default)(month).startOf('month').format('YYYY-MM-DD');
                        dateTo = (0, moment_1.default)(month).endOf('month').format('YYYY-MM-DD');
                        return [4 /*yield*/, this.repository.query("\n                SELECT\n                    COUNT (*) AS \"totalLeads\"\n                FROM business.leads\n                WHERE (leads.created_at BETWEEN '" + dateFrom + "' AND '" + dateTo + "');\n            ")];
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
    return LeadService;
}());
exports.LeadService = LeadService;
//# sourceMappingURL=lead.service.js.map