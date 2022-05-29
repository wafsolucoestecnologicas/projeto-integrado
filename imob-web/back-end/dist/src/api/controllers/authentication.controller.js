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
exports.AuthenticationController = void 0;
var jwt_class_1 = require("../../../utils/classes/jwt.class");
var utils_1 = require("../../../utils/utils");
var user_service_1 = require("../services/user.service");
var AuthenticationController = /** @class */ (function () {
    function AuthenticationController() {
    }
    AuthenticationController.prototype.authenticate = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, result, userEntity, isValid, jwt, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        userService = new user_service_1.UserService();
                        if (!(request.body.email && request.body.password)) return [3 /*break*/, 6];
                        return [4 /*yield*/, userService.alreadyRegisteredByEmail(request.body.email)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[1] })];
                        }
                        return [4 /*yield*/, userService.findByEmail(request.body.email)];
                    case 2:
                        userEntity = _a.sent();
                        if (!userEntity) return [3 /*break*/, 4];
                        return [4 /*yield*/, userService.validatePassword(userEntity, request.body.password)];
                    case 3:
                        isValid = _a.sent();
                        if (!isValid) {
                            return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[7] })];
                        }
                        userEntity.password = '';
                        jwt = new jwt_class_1.JWT();
                        jwt.setPayload({
                            id: userEntity.id,
                            uuid: userEntity.uuid,
                            company: userEntity.company,
                            name: userEntity.name,
                            surname: userEntity.surname,
                            email: userEntity.email,
                            isAdmin: userEntity.profile.isAdmin,
                            permissions: userEntity.profile.permissions,
                            administrator: userEntity === null || userEntity === void 0 ? void 0 : userEntity.administrator,
                            manager: userEntity === null || userEntity === void 0 ? void 0 : userEntity.manager,
                            advisor: userEntity === null || userEntity === void 0 ? void 0 : userEntity.advisor,
                            broker: userEntity === null || userEntity === void 0 ? void 0 : userEntity.broker,
                            secretary: userEntity === null || userEntity === void 0 ? void 0 : userEntity.secretary
                        });
                        jwt.setExpiredIn('1d');
                        return [2 /*return*/, response.status(200).json({
                                user: {
                                    id: userEntity.id,
                                    name: userEntity.name,
                                    surname: userEntity.surname,
                                    email: userEntity.email,
                                    isAdministrator: userEntity.isAdministrator,
                                    isManager: userEntity.isManager,
                                    isAdvisor: userEntity.isAdvisor,
                                    isBroker: userEntity.isBroker,
                                    isSecretary: userEntity.isSecretary,
                                    createdAt: userEntity.createdAt,
                                    updatedAt: userEntity.updatedAt
                                },
                                company: userEntity.company,
                                profile: userEntity.profile,
                                administrator: userEntity === null || userEntity === void 0 ? void 0 : userEntity.administrator,
                                manager: userEntity === null || userEntity === void 0 ? void 0 : userEntity.manager,
                                advisor: userEntity === null || userEntity === void 0 ? void 0 : userEntity.advisor,
                                broker: userEntity === null || userEntity === void 0 ? void 0 : userEntity.broker,
                                secretary: userEntity === null || userEntity === void 0 ? void 0 : userEntity.secretary,
                                token: jwt.generateToken()
                            })];
                    case 4: return [2 /*return*/, response.status(500).json({ message: utils_1.statusMessages[500] + " " + utils_1.returnMessages[1] })];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, response.status(400).json({ message: utils_1.statusMessages[400] + " " + utils_1.returnMessages[0] })];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: error_1.message })];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return AuthenticationController;
}());
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map