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
exports.OwnerService = void 0;
var typeorm_1 = require("typeorm");
var owner_entity_1 = require("../entities/owner.entity");
var OwnerService = /** @class */ (function () {
    function OwnerService() {
        this.repository = (0, typeorm_1.getRepository)(owner_entity_1.OwnerEntity);
    }
    OwnerService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ownerEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: [
                                'company'
                            ],
                        })];
                    case 1:
                        ownerEntity = _a.sent();
                        return [2 /*return*/, ownerEntity];
                }
            });
        });
    };
    OwnerService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ownerEntity = this.repository.create({
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
                            checked: false,
                            isOwner: true
                        });
                        return [4 /*yield*/, transaction.save(ownerEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OwnerService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            relations: [
                                'company'
                            ],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        ownerEntity = _a.sent();
                        return [2 /*return*/, ownerEntity];
                }
            });
        });
    };
    OwnerService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ownerEntity = this.repository.create({
                            id: id,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            birthDate: data.birthDate,
                            RG: data.RG,
                            CPF: data.CPF,
                            landline: data.landline,
                            cellPhone: data.cellPhone,
                            profession: data.profession,
                            checked: data.checked
                        });
                        return [4 /*yield*/, transaction.save(ownerEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OwnerService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(owner_entity_1.OwnerEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OwnerService.prototype.validateData = function (data) {
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
    OwnerService.prototype.alreadyRegisterByCPF = function (CPF) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['CPF'],
                            where: {
                                CPF: CPF
                            }
                        })];
                    case 1:
                        ownerEntity = _a.sent();
                        result = (ownerEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OwnerService.prototype.alreadyRegisterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        ownerEntity = _a.sent();
                        result = (ownerEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return OwnerService;
}());
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map