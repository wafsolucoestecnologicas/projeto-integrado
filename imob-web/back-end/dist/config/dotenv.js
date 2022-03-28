"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var pgConnectionString = __importStar(require("pg-connection-string"));
var pathConfig = '';
switch (process.env.NODE_ENV) {
    case 'production':
        pathConfig = path_1.default.join(__dirname, '..', '.env');
        break;
    case 'development':
        pathConfig = path_1.default.join(__dirname, '..', 'environments', '.development.env');
        break;
}
dotenv_1.default.config({ path: pathConfig });
var CONFIGURATION = {
    ENVIRONMENT: process.env.NODE_ENV || '',
    SERVER: {
        PORT: 0
    },
    DATABASE: {
        URL: '',
        NAME: '',
        HOST: '',
        PORT: 0,
        USERNAME: '',
        PASSWORD: ''
    },
    JWT: {
        PRIVATE_KEY: ''
    }
};
CONFIGURATION.SERVER.PORT = Number(process.env.PORT);
CONFIGURATION.DATABASE.URL = (process.env.DATABASE_URL) ? pgConnectionString.parse(process.env.DATABASE_URL) : '';
CONFIGURATION.DATABASE.NAME = CONFIGURATION.DATABASE.URL.database;
CONFIGURATION.DATABASE.HOST = CONFIGURATION.DATABASE.URL.host;
CONFIGURATION.DATABASE.PORT = CONFIGURATION.DATABASE.URL.port;
CONFIGURATION.DATABASE.USERNAME = CONFIGURATION.DATABASE.URL.user;
CONFIGURATION.DATABASE.PASSWORD = CONFIGURATION.DATABASE.URL.password;
CONFIGURATION.JWT.PRIVATE_KEY = process.env.PRIVATE_KEY || '';
exports.default = CONFIGURATION;
//# sourceMappingURL=dotenv.js.map