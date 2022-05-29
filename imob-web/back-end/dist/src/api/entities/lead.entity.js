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
exports.LeadEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var administrator_entity_1 = require("./administrator.entity");
var manager_entity_1 = require("./manager.entity");
var secretary_entity_1 = require("./secretary.entity");
var LeadEntity = /** @class */ (function () {
    function LeadEntity() {
    }
    LeadEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    LeadEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único da lead'
        }),
        __metadata("design:type", Number)
    ], LeadEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'name',
            type: 'text',
            nullable: false,
            comment: 'Nome do contato na lead'
        }),
        __metadata("design:type", String)
    ], LeadEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'surname',
            type: 'text',
            nullable: false,
            comment: 'Sobrenome do contato na lead'
        }),
        __metadata("design:type", String)
    ], LeadEntity.prototype, "surname", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'email',
            type: 'int',
            unique: true,
            nullable: false,
            comment: 'E-mail do contato na lead'
        }),
        __metadata("design:type", String)
    ], LeadEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'source',
            type: 'smallint',
            nullable: false,
            comment: 'Origem do contato na lead, onde: 0 - Imobiliária, 1 - Telefone, 2 - Anúncios, 3 - Internet e 4 - Whatsapp'
        }),
        __metadata("design:type", Number)
    ], LeadEntity.prototype, "source", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'landline',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Telefone fixo do contato na lead'
        }),
        __metadata("design:type", String)
    ], LeadEntity.prototype, "landline", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cell_phone',
            type: 'text',
            nullable: false,
            comment: 'Telefone celular do contato na lead'
        }),
        __metadata("design:type", String)
    ], LeadEntity.prototype, "cellPhone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'comments',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Observações do contato na lead'
        }),
        __metadata("design:type", String)
    ], LeadEntity.prototype, "comments", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_by_administrator',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação da lead por um administrador'
        }),
        __metadata("design:type", Boolean)
    ], LeadEntity.prototype, "createdByAdministrator", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_by_manager',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação da lead por um gestor'
        }),
        __metadata("design:type", Boolean)
    ], LeadEntity.prototype, "createdByManager", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_by_secretary',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação da lead por uma secretária'
        }),
        __metadata("design:type", Boolean)
    ], LeadEntity.prototype, "createdBySecretary", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'registered',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação de um cliente utilizando a lead'
        }),
        __metadata("design:type", Boolean)
    ], LeadEntity.prototype, "registered", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], LeadEntity.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'updated_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            comment: 'Data de atualização do registro',
        }),
        __metadata("design:type", Date)
    ], LeadEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], LeadEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return administrator_entity_1.AdministratorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'administrator_id' }),
        __metadata("design:type", administrator_entity_1.AdministratorEntity)
    ], LeadEntity.prototype, "administrator", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return manager_entity_1.ManagerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
        __metadata("design:type", manager_entity_1.ManagerEntity)
    ], LeadEntity.prototype, "manager", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return secretary_entity_1.SecretaryEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'secretary_id' }),
        __metadata("design:type", secretary_entity_1.SecretaryEntity)
    ], LeadEntity.prototype, "secretary", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LeadEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LeadEntity.prototype, "setUpdatedAt", null);
    LeadEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'business',
            name: 'leads'
        }),
        __metadata("design:paramtypes", [])
    ], LeadEntity);
    return LeadEntity;
}());
exports.LeadEntity = LeadEntity;
//# sourceMappingURL=lead.entity.js.map