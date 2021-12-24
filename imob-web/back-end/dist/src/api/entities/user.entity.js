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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var profile_entity_1 = require("./profile.entity");
var administrator_entity_1 = require("./administrator.entity");
var manager_entity_1 = require("./manager.entity");
var advisor_entity_1 = require("./advisor.entity");
var broker_entity_1 = require("./broker.entity");
var secretary_entity_1 = require("./secretary.entity");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    UserEntity.prototype.encryptPassword = function () {
        this.password = bcryptjs_1.default.hashSync(this.password, 8);
    };
    UserEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    UserEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único do usuário'
        }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'uuid',
            type: 'uuid',
            primary: false,
            generated: 'uuid',
            unique: true,
            nullable: false,
            comment: 'Código universal único do usuário'
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "uuid", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'name',
            type: 'text',
            unique: false,
            nullable: false,
            comment: 'Nome do usuário'
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'surname',
            type: 'text',
            unique: false,
            nullable: false,
            comment: 'Sobrenome do usuário'
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "surname", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'email',
            type: 'text',
            unique: true,
            nullable: false,
            comment: 'E-mail do usuário'
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'password',
            type: 'text',
            unique: true,
            nullable: false,
            comment: 'Senha do usuário'
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_administrator',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o usuário é um administrador'
        }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isAdministrator", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_manager',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o usuário é um gestor'
        }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isManager", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_advisor',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o usuário é um despachante'
        }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isAdvisor", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_broker',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o usuário é um corretor'
        }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isBroker", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_secretary',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o usuário é uma secretária'
        }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isSecretary", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "createdAt", void 0);
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
    ], UserEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], UserEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return profile_entity_1.ProfileEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'profile_id' }),
        __metadata("design:type", profile_entity_1.ProfileEntity)
    ], UserEntity.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return administrator_entity_1.AdministratorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'administrator_id' }),
        __metadata("design:type", administrator_entity_1.AdministratorEntity)
    ], UserEntity.prototype, "administrator", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return manager_entity_1.ManagerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
        __metadata("design:type", manager_entity_1.ManagerEntity)
    ], UserEntity.prototype, "manager", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return advisor_entity_1.AdvisorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'advisor_id' }),
        __metadata("design:type", advisor_entity_1.AdvisorEntity)
    ], UserEntity.prototype, "advisor", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return broker_entity_1.BrokerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'broker_id' }),
        __metadata("design:type", broker_entity_1.BrokerEntity)
    ], UserEntity.prototype, "broker", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return secretary_entity_1.SecretaryEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'secretary_id' }),
        __metadata("design:type", secretary_entity_1.SecretaryEntity)
    ], UserEntity.prototype, "secretary", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserEntity.prototype, "encryptPassword", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserEntity.prototype, "setUpdatedAt", null);
    UserEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'authentication',
            name: 'users'
        }),
        __metadata("design:paramtypes", [])
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map