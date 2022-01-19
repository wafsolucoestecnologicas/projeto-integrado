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
exports.createTableBusinesses1635608350277 = void 0;
var typeorm_1 = require("typeorm");
var createTableBusinesses1635608350277 = /** @class */ (function () {
    function createTableBusinesses1635608350277() {
    }
    createTableBusinesses1635608350277.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            schema: 'business',
                            name: 'businesses',
                            columns: [
                                {
                                    name: 'id',
                                    type: 'integer',
                                    isPrimary: true,
                                    isGenerated: true,
                                    isUnique: true,
                                    generationStrategy: 'increment',
                                    isNullable: false
                                },
                                {
                                    name: 'company_id',
                                    type: 'integer',
                                    isNullable: false
                                },
                                {
                                    name: 'administrator_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'manager_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'advisor_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'broker_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'secretary_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'owner_id',
                                    type: 'integer',
                                    isNullable: false
                                },
                                {
                                    name: 'customer_id',
                                    type: 'integer',
                                    isNullable: false
                                },
                                {
                                    name: 'property_id',
                                    type: 'integer',
                                    isNullable: false
                                },
                                {
                                    name: 'lead_id',
                                    type: 'integer',
                                    isNullable: false
                                },
                                {
                                    name: 'status',
                                    type: 'smallint',
                                    isNullable: false
                                },
                                {
                                    name: 'date_visit',
                                    type: 'timestamp',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'date_sale',
                                    type: 'timestamp',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'visit_form',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'property_registration',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'property_sale_contract',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'itbi',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'customer_rg',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'customer_cpf',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'customer_address_proof',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'customer_payslip',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'owner_rg',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'owner_cpf',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'owner_address_proof',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'owner_payslip',
                                    type: 'varchar(50)',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'created_by_administrator',
                                    type: 'boolean',
                                    isNullable: false
                                },
                                {
                                    name: 'created_by_manager',
                                    type: 'boolean',
                                    isNullable: false
                                },
                                {
                                    name: 'created_by_secretary',
                                    type: 'boolean',
                                    isNullable: false
                                },
                                {
                                    name: 'redirected_manager_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'redirected_advisor_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'redirected_broker_id',
                                    type: 'integer',
                                    default: null,
                                    isNullable: true
                                },
                                {
                                    name: 'created_at',
                                    type: 'timestamp',
                                    isNullable: false
                                },
                                {
                                    name: 'updated_at',
                                    type: 'timestamp',
                                    isNullable: false
                                }
                            ],
                            foreignKeys: [
                                {
                                    name: 'fk_company_id',
                                    columnNames: ['company_id'],
                                    referencedSchema: 'business',
                                    referencedTableName: 'business.companies',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_administrator_id',
                                    columnNames: ['administrator_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.administrators',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_manager_id',
                                    columnNames: ['manager_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.managers',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_advisor_id',
                                    columnNames: ['advisor_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.advisors',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_broker_id',
                                    columnNames: ['broker_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.brokers',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_secretary_id',
                                    columnNames: ['secretary_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.secretaries',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_owner_id',
                                    columnNames: ['owner_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.owners',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_customer_id',
                                    columnNames: ['customer_id'],
                                    referencedSchema: 'persons',
                                    referencedTableName: 'persons.customers',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_lead_id',
                                    columnNames: ['lead_id'],
                                    referencedSchema: 'business',
                                    referencedTableName: 'business.leads',
                                    referencedColumnNames: ['id']
                                },
                                {
                                    name: 'fk_property_id',
                                    columnNames: ['property_id'],
                                    referencedSchema: 'business',
                                    referencedTableName: 'business.properties',
                                    referencedColumnNames: ['id']
                                }
                            ]
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createTableBusinesses1635608350277.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable('business.businesses')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createTableBusinesses1635608350277;
}());
exports.createTableBusinesses1635608350277 = createTableBusinesses1635608350277;
//# sourceMappingURL=1635608350277-create-table-businesses.js.map