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
exports.PropertyEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var administrator_entity_1 = require("./administrator.entity");
var manager_entity_1 = require("./manager.entity");
var advisor_entity_1 = require("./advisor.entity");
var broker_entity_1 = require("./broker.entity");
var secretary_entity_1 = require("./secretary.entity");
var PropertyEntity = /** @class */ (function () {
    function PropertyEntity() {
    }
    PropertyEntity.prototype.convertValuesToNumber = function () {
        if (this.terrainArea)
            this.terrainArea = Number(this.terrainArea);
        if (this.buildingArea)
            this.buildingArea = Number(this.buildingArea);
        if (this.totalUtilTerrainArea)
            this.totalUtilTerrainArea = Number(this.totalUtilTerrainArea);
        if (this.condominium)
            this.condominium = Number(this.condominium);
        if (this.IPTU)
            this.IPTU = Number(this.IPTU);
        if (this.value)
            this.value = Number(this.value);
    };
    PropertyEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    PropertyEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'description',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Descrição do imóvel'
        }),
        __metadata("design:type", String)
    ], PropertyEntity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'photos',
            type: 'json',
            default: null,
            nullable: true,
            comment: 'Caminho relativo das fotos do imóvel'
        }),
        __metadata("design:type", Object)
    ], PropertyEntity.prototype, "photos", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'checked',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o cadastro do imóvel foi checado por uma secretária'
        }),
        __metadata("design:type", Boolean)
    ], PropertyEntity.prototype, "checked", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'elevator',
            type: 'bool',
            default: null,
            nullable: true,
            comment: 'Confirmação se o imóvel possui elevador'
        }),
        __metadata("design:type", Boolean)
    ], PropertyEntity.prototype, "elevator", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'bedrooms',
            type: 'smallint',
            default: 0,
            nullable: true,
            comment: 'Quantidade de quartos do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "bedrooms", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'bathrooms',
            type: 'smallint',
            default: 0,
            nullable: true,
            comment: 'Quantidade de banheiros do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "bathrooms", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'suites',
            type: 'smallint',
            default: 0,
            nullable: true,
            comment: 'Quantidade de suítes do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "suites", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'parking_lots',
            type: 'smallint',
            default: 0,
            nullable: true,
            comment: 'Quantidade de vagas de estacionamento do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "parkingLots", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'terrain_area',
            type: 'numeric',
            default: 0,
            nullable: true,
            comment: 'Quantidade de metros quadrados de área do lote do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "terrainArea", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'building_area',
            type: 'numeric',
            default: 0,
            nullable: true,
            comment: 'Quantidade de metros quadrados de área construída do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "buildingArea", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'total_util_terrain_area',
            type: 'numeric',
            default: 0,
            nullable: true,
            comment: 'Quantidade de metros quadrados de área útil total do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "totalUtilTerrainArea", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'condominium',
            type: 'numeric',
            default: 0,
            nullable: true,
            comment: 'Valor do condomínio do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "condominium", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'iptu',
            type: 'numeric',
            default: 0,
            nullable: true,
            comment: 'Valor do IPTU do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "IPTU", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'value',
            type: 'numeric',
            default: 0,
            nullable: true,
            comment: 'Valor de venda do imóvel'
        }),
        __metadata("design:type", Number)
    ], PropertyEntity.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], PropertyEntity.prototype, "createdAt", void 0);
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
    ], PropertyEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], PropertyEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return administrator_entity_1.AdministratorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'administrator_id' }),
        __metadata("design:type", administrator_entity_1.AdministratorEntity)
    ], PropertyEntity.prototype, "administrator", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return manager_entity_1.ManagerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
        __metadata("design:type", manager_entity_1.ManagerEntity)
    ], PropertyEntity.prototype, "manager", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return advisor_entity_1.AdvisorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'advisor_id' }),
        __metadata("design:type", advisor_entity_1.AdvisorEntity)
    ], PropertyEntity.prototype, "advisor", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return broker_entity_1.BrokerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'broker_id' }),
        __metadata("design:type", broker_entity_1.BrokerEntity)
    ], PropertyEntity.prototype, "broker", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return secretary_entity_1.SecretaryEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'secretary_id' }),
        __metadata("design:type", secretary_entity_1.SecretaryEntity)
    ], PropertyEntity.prototype, "secretary", void 0);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyEntity.prototype, "convertValuesToNumber", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyEntity.prototype, "setUpdatedAt", null);
    PropertyEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'business',
            name: 'properties'
        }),
        __metadata("design:paramtypes", [])
    ], PropertyEntity);
    return PropertyEntity;
}());
exports.PropertyEntity = PropertyEntity;
//# sourceMappingURL=property.entity.js.map