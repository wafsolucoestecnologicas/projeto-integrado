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
exports.BrokerController = void 0;
var typeorm_1 = require("typeorm");
var broker_service_1 = require("../services/broker.service");
var user_service_1 = require("../services/user.service");
var utils_1 = require("../../../utils/utils");
var BrokerController = /** @class */ (function () {
    function BrokerController() {
    }
    BrokerController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var brokerService, brokerEntity, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        brokerService = new broker_service_1.BrokerService();
                        return [4 /*yield*/, brokerService.index(request.payload)];
                    case 1:
                        brokerEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(brokerEntity)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_1.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BrokerController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var brokerService, result, result_1, brokerEntity, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 7, , 8]);
                                        brokerService = new broker_service_1.BrokerService();
                                        result = brokerService.validateData(request.body);
                                        if (!result) return [3 /*break*/, 5];
                                        return [4 /*yield*/, brokerService.alreadyRegisterByCPF(request.body.cpf)];
                                    case 1:
                                        result_1 = _a.sent();
                                        if (!!result_1) return [3 /*break*/, 3];
                                        return [4 /*yield*/, brokerService.create(request.body, transaction)];
                                    case 2:
                                        brokerEntity = _a.sent();
                                        return [2 /*return*/, response.status(201).json(brokerEntity)];
                                    case 3: return [2 /*return*/, response.status(409).json({ message: utils_1.statusMessages[409] + " " + utils_1.returnMessages[3] })];
                                    case 4: return [3 /*break*/, 6];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7:
                                        error_2 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_2.message })];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BrokerController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var brokerService, brokerEntity, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        brokerService = new broker_service_1.BrokerService();
                        if (!Number(request.params.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, brokerService.read(Number(request.params.id), request.payload)];
                    case 1:
                        brokerEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(brokerEntity)];
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
    BrokerController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var brokerService, result, result_2, brokerEntity, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 9, , 10]);
                                        brokerService = new broker_service_1.BrokerService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, brokerService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 5];
                                        result_2 = brokerService.validateData(request.body);
                                        if (!result_2) return [3 /*break*/, 3];
                                        return [4 /*yield*/, brokerService.update(Number(request.params.id), request.body, transaction)];
                                    case 2:
                                        brokerEntity = _a.sent();
                                        return [2 /*return*/, response.status(200).json(brokerEntity)];
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
    BrokerController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var brokerService, brokerEntity, userService, userEntity, userDeleteResult, brokerDeleteResult, error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 11, , 12]);
                                        brokerService = new broker_service_1.BrokerService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 9];
                                        return [4 /*yield*/, brokerService.read(Number(request.params.id), request.payload)];
                                    case 1:
                                        brokerEntity = _a.sent();
                                        if (!brokerEntity) return [3 /*break*/, 7];
                                        userService = new user_service_1.UserService();
                                        return [4 /*yield*/, userService.findByBroker(Number(request.params.id))];
                                    case 2:
                                        userEntity = _a.sent();
                                        if (!userEntity) return [3 /*break*/, 5];
                                        return [4 /*yield*/, userService.delete(userEntity.id, transaction)];
                                    case 3:
                                        userDeleteResult = _a.sent();
                                        return [4 /*yield*/, brokerService.delete(Number(request.params.id), transaction)];
                                    case 4:
                                        brokerDeleteResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({
                                                user: userDeleteResult.affected,
                                                broker: brokerDeleteResult.affected
                                            })];
                                    case 5: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 6: return [3 /*break*/, 8];
                                    case 7: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                                    case 8: return [3 /*break*/, 10];
                                    case 9: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[2] })];
                                    case 10: return [3 /*break*/, 12];
                                    case 11:
                                        error_5 = _a.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_5.message })];
                                    case 12: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return BrokerController;
}());
exports.BrokerController = BrokerController;
//# sourceMappingURL=broker.controller.js.map