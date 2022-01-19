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
exports.UserService = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../entities/user.entity");
var profile_model_1 = require("../models/profile.model");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var UserService = /** @class */ (function () {
    function UserService() {
        this.repository = (0, typeorm_1.getRepository)(user_entity_1.UserEntity);
    }
    UserService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            select: [
                                'id',
                                'name',
                                'surname',
                                'email',
                                'isAdministrator',
                                'isManager',
                                'isAdvisor',
                                'isBroker',
                                'isSecretary',
                                'createdAt',
                                'updatedAt'
                            ],
                            relations: [
                                'company',
                                'profile',
                                'administrator',
                                'manager',
                                'advisor',
                                'broker',
                                'secretary'
                            ]
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userEntity = this.repository.create({
                            profile: data.profile,
                            company: data.company,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            password: data.password,
                            isAdministrator: false,
                            isManager: false,
                            isAdvisor: false,
                            isBroker: false,
                            isSecretary: false
                        });
                        switch (data.profile.id) {
                            case profile_model_1.ProfileEnum.ADMINISTRATOR:
                                userEntity.administrator = data.administrator;
                                userEntity.isAdministrator = true;
                                break;
                            case profile_model_1.ProfileEnum.MANAGER:
                                userEntity.manager = data.manager;
                                userEntity.isManager = true;
                                break;
                            case profile_model_1.ProfileEnum.ADVISOR:
                                userEntity.advisor = data.advisor;
                                userEntity.isAdvisor = true;
                                break;
                            case profile_model_1.ProfileEnum.BROKER:
                                userEntity.broker = data.broker;
                                userEntity.isBroker = true;
                                break;
                            case profile_model_1.ProfileEnum.SECRETARY:
                                userEntity.secretary = data.secretary;
                                userEntity.isSecretary = true;
                                break;
                        }
                        return [4 /*yield*/, transaction.save(userEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: [
                                'id',
                                'name',
                                'surname',
                                'email',
                                'isAdministrator',
                                'isManager',
                                'isAdvisor',
                                'isBroker',
                                'isSecretary',
                                'createdAt',
                                'updatedAt'
                            ],
                            relations: [
                                'company',
                                'profile',
                                'administrator',
                                'manager',
                                'advisor',
                                'broker',
                                'secretary'
                            ],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userEntity = this.repository.create({
                            id: id,
                            name: data.name.toLowerCase(),
                            surname: data.surname.toLowerCase(),
                            email: data.email.toLowerCase(),
                            password: data.password
                        });
                        return [4 /*yield*/, transaction.save(userEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(user_entity_1.UserEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            relations: [
                                'company',
                                'profile',
                                'administrator',
                                'manager',
                                'advisor',
                                'broker',
                                'secretary'
                            ],
                            where: {
                                email: email
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.findByAdministrator = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                administrator: {
                                    id: id
                                }
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.findByManager = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                manager: {
                                    id: id
                                }
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.findByAdvisor = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                advisor: {
                                    id: id
                                }
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.findByBroker = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                broker: {
                                    id: id
                                }
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.findBySecretary = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                secretary: {
                                    id: id
                                }
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        return [2 /*return*/, userEntity];
                }
            });
        });
    };
    UserService.prototype.validatePassword = function (data, password) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcryptjs_1.default.compare(password, data.password)];
                    case 1:
                        isValid = _a.sent();
                        return [2 /*return*/, isValid];
                }
            });
        });
    };
    UserService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.name ||
            !data.surname ||
            !data.email ||
            !data.password) {
            isValid = false;
        }
        return isValid;
    };
    UserService.prototype.alreadyRegisteredByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['email'],
                            where: {
                                email: email
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        result = (userEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService.prototype.alreadyRegisteredById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        userEntity = _a.sent();
                        result = (userEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map