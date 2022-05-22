"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorEntity = void 0;
var typeorm_1 = require("typeorm");
var AdministratorEntity = /** @class */ (function () {
    function AdministratorEntity() {
    }
    AdministratorEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    AdministratorEntity.prototype.setUpdatedAt = function () {
        this.updatedAt = new Date();
    };
    __decorate([
        (0, typeorm_1.Column)({
            name: 'id',
            type: 'int',
            primary: true,
            generated: 'increment',
            unique: true,
            nullable: false,
            comment: 'Código sequencial único do administrador'
        }),
        __metadata("design:type", Number)
    ], AdministratorEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'name',
            type: 'text',
            nullable: false,
            comment: 'Nome do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'surname',
            type: 'text',
            nullable: false,
            comment: 'Sobrenome do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "surname", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'email',
            type: 'text',
            unique: true,
            nullable: false,
            comment: 'E-mail do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'birth_date',
            type: 'date',
            nullable: false,
            comment: 'Data de nascimento do administrador'
        }),
        __metadata("design:type", Date)
    ], AdministratorEntity.prototype, "birthDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_administrator',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o registro é um administrador'
        }),
        __metadata("design:type", Boolean)
    ], AdministratorEntity.prototype, "isAdministrator", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'rg',
            type: 'text',
            nullable: false,
            comment: 'Número do RG do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "RG", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cpf',
            type: 'text',
            nullable: false,
            comment: 'Número do CPF do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "CPF", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'landline',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Telefone fixo do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "landline", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cell_phone',
            type: 'text',
            nullable: false,
            comment: 'Telefone celular do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "cellPhone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'profession',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Profissão do administrador'
        }),
        __metadata("design:type", String)
    ], AdministratorEntity.prototype, "profession", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: false,
            comment: 'Data de criação do registro'
        }),
        __metadata("design:type", Date)
    ], AdministratorEntity.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'updated_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: false,
            comment: 'Data de atualização do registro'
        }),
        __metadata("design:type", Date)
    ], AdministratorEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AdministratorEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AdministratorEntity.prototype, "setUpdatedAt", null);
    AdministratorEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'persons',
            name: 'administrators'
        }),
        __metadata("design:paramtypes", [])
    ], AdministratorEntity);
    return AdministratorEntity;
}());
exports.AdministratorEntity = AdministratorEntity;
//# sourceMappingURL=administrator.entity.js.map