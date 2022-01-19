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
exports.createInsertTableStates1636318794349 = void 0;
var createInsertTableStates1636318794349 = /** @class */ (function () {
    function createInsertTableStates1636318794349() {
    }
    createInsertTableStates1636318794349.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'acre', 'AC')")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'alagoas', 'AL')")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'amapá', 'AP')")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'amazonas', 'AM')")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'bahia', 'BA')")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'ceará', 'CE')")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'espírito santo', 'ES')")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'goiás', 'GO')")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'maranhão', 'MA')")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'mato grosso', 'MT')")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'mato grosso do sul', 'MS')")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'minas gerais', 'MG')")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'pará', 'PA')")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'paraíba', 'PB')")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'paraná', 'PR')")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'pernambuco', 'PE')")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'piauí', 'PI')")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rio de janeiro', 'RJ')")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rio grande do norte', 'RN')")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rio grande do sul', 'RS')")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rondônia', 'RO')")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'roraima', 'RR')")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'santa catarina', 'SC')")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'são paulo', 'SP')")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'sergipe', 'SE')")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'tocantins', 'TO')")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'distrito federal', 'DF')")];
                    case 27:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createInsertTableStates1636318794349.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query('TRUNCATE TABLE public.states')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createInsertTableStates1636318794349;
}());
exports.createInsertTableStates1636318794349 = createInsertTableStates1636318794349;
//# sourceMappingURL=1636318794349-create-insert-table-states.js.map