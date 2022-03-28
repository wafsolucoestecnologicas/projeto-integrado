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
exports.AddressController = void 0;
var typeorm_1 = require("typeorm");
var address_service_1 = require("../services/address.service");
var utils_1 = require("../../../utils/utils");
var AddressController = /** @class */ (function () {
    function AddressController() {
    }
    AddressController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var addressService, addressEntity, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        addressService = new address_service_1.AddressService();
                        return [4 /*yield*/, addressService.index()];
                    case 1:
                        addressEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(addressEntity)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_1.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var addressService, result, addressEntity, error_2;
                            var _a, _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        _e.trys.push([0, 4, , 5]);
                                        addressService = new address_service_1.AddressService();
                                        result = addressService.validateData(request.body);
                                        if (!result) return [3 /*break*/, 2];
                                        request.body.company = request.payload.company;
                                        if (request.body.isManager && request.payload.isManager)
                                            request.body.manager = (_a = request.payload) === null || _a === void 0 ? void 0 : _a.manager;
                                        if (request.body.isAdvisor && request.payload.isAdvisor)
                                            request.body.advisor = (_b = request.payload) === null || _b === void 0 ? void 0 : _b.advisor;
                                        if (request.body.isBroker && request.payload.isBroker)
                                            request.body.broker = (_c = request.payload) === null || _c === void 0 ? void 0 : _c.broker;
                                        if (request.body.isSecretary && request.payload.isSecretary)
                                            request.body.secretary = (_d = request.payload) === null || _d === void 0 ? void 0 : _d.secretary;
                                        return [4 /*yield*/, addressService.create(request.body, transaction)];
                                    case 1:
                                        addressEntity = _e.sent();
                                        return [2 /*return*/, response.status(201).json(addressEntity)];
                                    case 2: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                                    case 3: return [3 /*break*/, 5];
                                    case 4:
                                        error_2 = _e.sent();
                                        return [2 /*return*/, response.status(500).json({ message: error_2.message })];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddressController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var addressService, addressEntity, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        addressService = new address_service_1.AddressService();
                        if (!Number(request.params.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, addressService.read(Number(request.params.id))];
                    case 1:
                        addressEntity = _a.sent();
                        return [2 /*return*/, response.status(200).json(addressEntity)];
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
    AddressController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var addressService, result, result_1, addressEntity, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 9, , 10]);
                                        addressService = new address_service_1.AddressService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 7];
                                        return [4 /*yield*/, addressService.alreadyRegisterById(Number(request.params.id))];
                                    case 1:
                                        result = _a.sent();
                                        if (!result) return [3 /*break*/, 5];
                                        result_1 = addressService.validateData(request.body);
                                        if (!result_1) return [3 /*break*/, 3];
                                        return [4 /*yield*/, addressService.update(Number(request.params.id), request.body, transaction)];
                                    case 2:
                                        addressEntity = _a.sent();
                                        return [2 /*return*/, response.status(200).json(addressEntity)];
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
    AddressController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getManager)().transaction(function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                            var addressService, deleteResult, error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        addressService = new address_service_1.AddressService();
                                        if (!Number(request.params.id)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, addressService.delete(Number(request.params.id), transaction)];
                                    case 1:
                                        deleteResult = _a.sent();
                                        return [2 /*return*/, response.status(200).json({ address: deleteResult.affected })];
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
    AddressController.prototype.searchAddressInAPIViaCEP = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var addressService, responseViaCEP, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        addressService = new address_service_1.AddressService();
                        if (!request.query.CEP) return [3 /*break*/, 2];
                        return [4 /*yield*/, addressService.fetchAddressInAPIViaCEP(String(request.query.CEP))];
                    case 1:
                        responseViaCEP = _a.sent();
                        return [2 /*return*/, response.status(200).json(responseViaCEP)];
                    case 2: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_6 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_6.message })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AddressController;
}());
exports.AddressController = AddressController;
//# sourceMappingURL=address.controller.js.map