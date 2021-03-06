"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.createTypeORMConnection = exports.validateURLWithoutAuthentication = exports.returnMessages = exports.statusMessages = void 0;
var typeorm_1 = require("typeorm");
exports.statusMessages = {
    400: 'O pedido n??o p??de ser entregue devido ?? sintaxe incorreta!',
    401: 'N??o possui credenciais de autentica????o v??lidas para o recurso!',
    409: 'Solicita????o atual conflitou com o recurso que est?? no servidor!',
    500: 'Erro no servidor ao processar a solicita????o!'
};
exports.returnMessages = [
    'Dados do corpo da requisi????o inv??lidos.',
    'Registro n??o existe na base de dados.',
    '?? necess??rio o id do registro.',
    'J?? existe um registro com o CNPJ informado no banco de dados.',
    'J?? existe um registro com o e-mail informado no banco de dados.',
    'Erro interno ao cadastrar uma nova imobili??ria.',
    'Erro interno ao recuperar o perfil de usu??rio gestor.',
    'Senha de usu??rio informada n??o confere.'
];
var validateURLWithoutAuthentication = function (url, method) {
    var isValid = false;
    var paths = [
        'docs',
        'public',
        'uploads',
        'authentications',
        'users'
    ];
    var path = url.split('/')[1];
    if (path === 'users') {
        isValid = paths.includes(path) && method === 'POST';
    }
    else if (path === 'properties' && url.split('/').length === 4) {
        var path_1 = url.split('/')[3];
        isValid = path_1 === 'sale';
    }
    else if (path === 'commissions-receivable' && url.split('/').length === 4) {
        var path_2 = url.split('/')[3];
        isValid = path_2 === 'sale';
    }
    else {
        isValid = paths.includes(path);
    }
    return isValid;
};
exports.validateURLWithoutAuthentication = validateURLWithoutAuthentication;
var createTypeORMConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
    var options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getConnectionOptions)(process.env.NODE_ENV)];
            case 1:
                options = _a.sent();
                return [4 /*yield*/, (0, typeorm_1.createConnection)(__assign(__assign({}, options), { name: 'default' }))];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createTypeORMConnection = createTypeORMConnection;
//# sourceMappingURL=utils.js.map