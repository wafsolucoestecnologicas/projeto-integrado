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
exports.SecretaryEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var SecretaryEntity = /** @class */ (function () {
    function SecretaryEntity() {
    }
    SecretaryEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    SecretaryEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único da secretária'
        }),
        __metadata("design:type", Number)
    ], SecretaryEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'name',
            type: 'text',
            nullable: false,
            comment: 'Nome da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'surname',
            type: 'text',
            nullable: false,
            comment: 'Sobrenome da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "surname", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'email',
            type: 'text',
            unique: true,
            nullable: false,
            comment: 'E-mail da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'birth_date',
            type: 'date',
            nullable: false,
            comment: 'Data de nascimento da secretária'
        }),
        __metadata("design:type", Date)
    ], SecretaryEntity.prototype, "birthDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_secretary',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o registro é uma secretária'
        }),
        __metadata("design:type", Boolean)
    ], SecretaryEntity.prototype, "isSecretary", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'rg',
            type: 'text',
            nullable: false,
            comment: 'Número do RG da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "RG", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cpf',
            type: 'text',
            nullable: false,
            comment: 'Número do CPF da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "CPF", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'landline',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Telefone fixo da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "landline", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cell_phone',
            type: 'text',
            nullable: false,
            comment: 'Telefone celular da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "cellPhone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'profession',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Profissão da secretária'
        }),
        __metadata("design:type", String)
    ], SecretaryEntity.prototype, "profession", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: false,
            comment: 'Data de criação do registro'
        }),
        __metadata("design:type", Date)
    ], SecretaryEntity.prototype, "createdAt", void 0);
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
    ], SecretaryEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], SecretaryEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SecretaryEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SecretaryEntity.prototype, "setUpdatedAt", null);
    SecretaryEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'persons',
            name: 'secretaries'
        }),
        __metadata("design:paramtypes", [])
    ], SecretaryEntity);
    return SecretaryEntity;
}());
exports.SecretaryEntity = SecretaryEntity;
//# sourceMappingURL=secretary.entity.js.map