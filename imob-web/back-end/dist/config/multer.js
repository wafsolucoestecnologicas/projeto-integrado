"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (request, file, callback) {
        var id = String(request.query.id);
        var CNPJ = request.payload.company.CNPJ;
        if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads')))
            fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads'));
        if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads', 'properties')))
            fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads', 'properties'));
        if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads', 'businesses')))
            fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads', 'businesses'));
        switch (request.baseUrl) {
            case '/properties':
                if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads', 'properties', CNPJ))) {
                    fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads', 'properties', CNPJ));
                }
                if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads', 'properties', CNPJ, id))) {
                    fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads', 'properties', CNPJ, id));
                }
                callback(null, path_1.default.resolve('public', 'uploads', 'properties', CNPJ, id));
                break;
            case '/businesses':
                if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads', 'businesses', CNPJ))) {
                    fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads', 'businesses', CNPJ));
                }
                if (!fs_1.default.existsSync(path_1.default.resolve('public', 'uploads', 'businesses', CNPJ, id))) {
                    fs_1.default.mkdirSync(path_1.default.resolve('public', 'uploads', 'businesses', CNPJ, id));
                }
                callback(null, path_1.default.resolve('public', 'uploads', 'businesses', CNPJ, id));
                break;
        }
    },
    filename: function (request, file, callback) {
        callback(null, file.originalname);
    }
});
var uploads = (0, multer_1.default)({ storage: storage });
exports.default = uploads;
//# sourceMappingURL=multer.js.map