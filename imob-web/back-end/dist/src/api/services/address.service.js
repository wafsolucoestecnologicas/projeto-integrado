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
exports.AddressService = void 0;
var typeorm_1 = require("typeorm");
var address_entity_1 = require("../entities/address.entity");
var node_fetch_1 = __importDefault(require("node-fetch"));
var AddressService = /** @class */ (function () {
    function AddressService() {
        this.repository = (0, typeorm_1.getRepository)(address_entity_1.AddressEntity);
    }
    AddressService.prototype.index = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var addressEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find({
                            relations: [
                                'company',
                                'neighborhood',
                                'manager',
                                'advisor',
                                'broker',
                                'secretary',
                                'owner',
                                'customer',
                                'property'
                            ],
                            where: {
                                company: payload.company.id
                            }
                        })];
                    case 1:
                        addressEntity = _a.sent();
                        return [2 /*return*/, addressEntity];
                }
            });
        });
    };
    AddressService.prototype.create = function (data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var addressEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressEntity = this.repository.create({
                            company: data.company,
                            neighborhood: data.neighborhood,
                            manager: data === null || data === void 0 ? void 0 : data.manager,
                            advisor: data === null || data === void 0 ? void 0 : data.advisor,
                            broker: data === null || data === void 0 ? void 0 : data.broker,
                            secretary: data === null || data === void 0 ? void 0 : data.secretary,
                            owner: data === null || data === void 0 ? void 0 : data.owner,
                            customer: data === null || data === void 0 ? void 0 : data.customer,
                            property: data === null || data === void 0 ? void 0 : data.property,
                            street: data.street.toLowerCase(),
                            complement: data.complement ? data.complement.toLowerCase() : '',
                            number: data.number,
                            CEP: data.CEP,
                            isCompany: data.isCompany,
                            isManager: data.isManager,
                            isAdvisor: data.isAdvisor,
                            isBroker: data.isBroker,
                            isSecretary: data.isSecretary,
                            isOwner: data.isOwner,
                            isCustomer: data.isCustomer,
                            isProperty: data.isProperty
                        });
                        return [4 /*yield*/, transaction.save(addressEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AddressService.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var addressEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: id
                            },
                            relations: [
                                'neighborhood'
                            ]
                        })];
                    case 1:
                        addressEntity = _a.sent();
                        return [2 /*return*/, addressEntity];
                }
            });
        });
    };
    AddressService.prototype.update = function (id, data, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var addressEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressEntity = this.repository.create({
                            id: id,
                            neighborhood: data.neighborhood,
                            street: data.street.toLowerCase(),
                            complement: data.complement ? data.complement.toLowerCase() : '',
                            number: data.number,
                            CEP: data.CEP,
                            isCompany: data.isCompany,
                            isManager: data.isManager,
                            isAdvisor: data.isAdvisor,
                            isBroker: data.isBroker,
                            isSecretary: data.isSecretary,
                            isOwner: data.isOwner,
                            isCustomer: data.isCustomer,
                            isProperty: data.isProperty
                        });
                        return [4 /*yield*/, transaction.save(addressEntity)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AddressService.prototype.delete = function (id, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transaction.delete(address_entity_1.AddressEntity, {
                            id: id
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AddressService.prototype.validateData = function (data) {
        var isValid = true;
        if (!data.street ||
            !data.number ||
            !data.CEP ||
            !data.hasOwnProperty('complement') ||
            !data.hasOwnProperty('isCompany') ||
            !data.hasOwnProperty('isManager') ||
            !data.hasOwnProperty('isAdvisor') ||
            !data.hasOwnProperty('isBroker') ||
            !data.hasOwnProperty('isSecretary') ||
            !data.hasOwnProperty('isOwner') ||
            !data.hasOwnProperty('isCustomer') ||
            !data.hasOwnProperty('isProperty')) {
            isValid = false;
        }
        return isValid;
    };
    AddressService.prototype.alreadyRegisterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var addressEntity, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            select: ['id'],
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        addressEntity = _a.sent();
                        result = (addressEntity) ? true : false;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AddressService.prototype.fetchAddressInAPIViaCEP = function (CEP) {
        return __awaiter(this, void 0, void 0, function () {
            var address, response, data, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = {
                            cep: '',
                            logradouro: '',
                            complemento: '',
                            bairro: '',
                            localidade: '',
                            uf: '',
                            ibge: '',
                            gia: '',
                            ddd: '',
                            siafi: ''
                        };
                        if (!CEP) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, node_fetch_1.default)("https://viacep.com.br/ws/" + CEP + "/json/")];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        parsed = JSON.parse(JSON.stringify(data));
                        address.cep = parsed.cep;
                        address.logradouro = parsed.logradouro ? parsed.logradouro.toLowerCase() : '';
                        address.complemento = parsed.complemento ? parsed.complemento.toLowerCase() : '';
                        address.bairro = parsed.bairro ? parsed.bairro.toLowerCase() : '';
                        address.localidade = parsed.localidade ? parsed.localidade.toLowerCase() : '';
                        address.uf = parsed.uf;
                        address.ibge = parsed.ibge;
                        address.gia = parsed.gia;
                        address.ddd = parsed.ddd;
                        address.siafi = parsed.siafi;
                        _a.label = 3;
                    case 3: return [2 /*return*/, address];
                }
            });
        });
    };
    return AddressService;
}());
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map