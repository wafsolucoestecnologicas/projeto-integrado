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
exports.CommissionPayableService = void 0;
var typeorm_1 = require("typeorm");
var commission_payable_entity_1 = require("../entities/commission-payable.entity");
var moment_1 = __importDefault(require("moment"));
var CommissionPayableService = /** @class */ (function () {
    function CommissionPayableService() {
        this.repository = (0, typeorm_1.getRepository)(commission_payable_entity_1.CommissionPayableEntity);
    }
    CommissionPayableService.prototype.index = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var commissionPayableEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: [
                                'company',
                                'broker',
                                'property'
                            ],
                            where: {
                                company: payload.company.id
                            }
                        })];
                    case 1:
                        commissionPayableEntity = _a.sent();
                        return [2 /*return*/, commissionPayableEntity];
                }
            });
        });
    };
    CommissionPayableService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var commissionPayableEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        commissionPayableEntity = this.repository.create({
                            company: data.company,
                            broker: data.broker,
                            property: data.property,
                            date: data.date,
                            valueClosedDeals: data.valueClosedDeals,
                            valuePropertyCaptured: data.valuePropertyCaptured
                        });
                        return [4 /*yield*/, transaction.save(commissionPayableEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CommissionPayableService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var commissionPayableEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: id
                            },
                            relations: [
                                'company',
                                'broker',
                                'property'
                            ]
                        })];
                    case 1:
                        commissionPayableEntity = _a.sent();
                        return [2 /*return*/, commissionPayableEntity];
                }
            });
        });
    };
    CommissionPayableService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var commissionPayableEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        commissionPayableEntity = this.repository.create({
                            id: id,
                            date: data.date,
                            valueClosedDeals: data.valueClosedDeals,
                            valuePropertyCaptured: data.valuePropertyCaptured
                        });
                        return [4 /*yield*/, transaction.save(commissionPayableEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CommissionPayableService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(commission_payable_entity_1.CommissionPayableEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CommissionPayableService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.date ||
            data.valueClosedDeals < 0 ||
            data.valuePropertyCaptured < 0) {
            isValid = false;
        }
        return isValid;
    };
    CommissionPayableService.prototype.alreadyRegisterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var commissionPayableEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        commissionPayableEntity = _a.sent();
                        result = (commissionPayableEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CommissionPayableService.prototype.calculateTotalValuePayable = function (month) {
        return __awaiter(this, void 0, void 0, function () {
            var dateFrom, dateTo, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateFrom = (0, moment_1.default)(month).startOf('month').format('YYYY-MM-DD');
                        dateTo = (0, moment_1.default)(month).endOf('month').format('YYYY-MM-DD');
                        return [4 /*yield*/, this.repository.query("\n                SELECT\n                    SUM (commissions_payable.value_closed_deals) AS \"totalValueClosedDeals\",\n                    SUM (commissions_payable.value_property_captured) AS \"totalValuePropertyCaptured\"\n                FROM commission.commissions_payable AS commissions_payable\n                WHERE (commissions_payable.date BETWEEN '" + dateFrom + "' AND '" + dateTo + "')\n            ")];
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
    return CommissionPayableService;
}());
exports.CommissionPayableService = CommissionPayableService;
//# sourceMappingURL=commission-payable.service.js.map