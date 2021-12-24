"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("../../config/dotenv"));
var JWT = /** @class */ (function () {
    function JWT() {
        this.expiredIn = '';
        /** @TODO Retirar a palavra secret */
        this.privateKey = (dotenv_1.default.JWT.PRIVATE_KEY) ? dotenv_1.default.JWT.PRIVATE_KEY : 'secret';
    }
    JWT.prototype.getPayload = function () {
        return this.payload;
    };
    JWT.prototype.setPayload = function (payload) {
        this.payload = payload;
    };
    JWT.prototype.getExpiredIn = function () {
        return this.expiredIn;
    };
    JWT.prototype.setExpiredIn = function (expiredIn) {
        this.expiredIn = expiredIn;
    };
    JWT.prototype.generateToken = function () {
        return jsonwebtoken_1.default.sign(this.payload, this.privateKey, { expiresIn: this.expiredIn });
    };
    JWT.checkToken = function (token) {
        /** @TODO Retirar a palavra secret  */
        return jsonwebtoken_1.default.verify(token, dotenv_1.default.JWT.PRIVATE_KEY || 'secret');
    };
    return JWT;
}());
exports.JWT = JWT;
//# sourceMappingURL=jwt.class.js.map