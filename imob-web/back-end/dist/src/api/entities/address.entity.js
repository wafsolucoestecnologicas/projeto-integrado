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
exports.AddressEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var neighborhood_entity_1 = require("./neighborhood.entity");
var manager_entity_1 = require("./manager.entity");
var advisor_entity_1 = require("./advisor.entity");
var broker_entity_1 = require("./broker.entity");
var secretary_entity_1 = require("./secretary.entity");
var owner_entity_1 = require("./owner.entity");
var customer_entity_1 = require("./customer.entity");
var property_entity_1 = require("./property.entity");
var AddressEntity = /** @class */ (function () {
    function AddressEntity() {
    }
    __decorate([
        (0, typeorm_1.Column)({
            name: 'id',
            type: 'int',
            primary: true,
            generated: 'increment',
            unique: true,
            nullable: false,
            comment: 'Código sequencial único do endereço'
        }),
        __metadata("design:type", Number)
    ], AddressEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'street',
            type: 'text',
            nullable: false,
            comment: 'Nome da rua do endereço'
        }),
        __metadata("design:type", String)
    ], AddressEntity.prototype, "street", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'complement',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Complemento do endereço'
        }),
        __metadata("design:type", String)
    ], AddressEntity.prototype, "complement", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'number',
            type: 'text',
            nullable: false,
            comment: 'Número do endereço'
        }),
        __metadata("design:type", String)
    ], AddressEntity.prototype, "number", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cep',
            type: 'text',
            nullable: false,
            comment: 'CEP do endereço'
        }),
        __metadata("design:type", String)
    ], AddressEntity.prototype, "CEP", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_company',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de uma imobiliária'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isCompany", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_manager',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de um gestor'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isManager", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_advisor',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de um despachante'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isAdvisor", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_broker',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de um corretor'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isBroker", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_secretary',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de uma secretária'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isSecretary", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_owner',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de um proprietário'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isOwner", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_customer',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de um cliente'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isCustomer", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_property',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o endereço é de um imóvel'
        }),
        __metadata("design:type", Boolean)
    ], AddressEntity.prototype, "isProperty", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], AddressEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return neighborhood_entity_1.NeighborhoodEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'neighborhood_id' }),
        __metadata("design:type", neighborhood_entity_1.NeighborhoodEntity)
    ], AddressEntity.prototype, "neighborhood", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return manager_entity_1.ManagerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
        __metadata("design:type", manager_entity_1.ManagerEntity)
    ], AddressEntity.prototype, "manager", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return advisor_entity_1.AdvisorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'advisor_id' }),
        __metadata("design:type", advisor_entity_1.AdvisorEntity)
    ], AddressEntity.prototype, "advisor", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return broker_entity_1.BrokerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'broker_id' }),
        __metadata("design:type", broker_entity_1.BrokerEntity)
    ], AddressEntity.prototype, "broker", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return secretary_entity_1.SecretaryEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'secretary_id' }),
        __metadata("design:type", secretary_entity_1.SecretaryEntity)
    ], AddressEntity.prototype, "secretary", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return owner_entity_1.OwnerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'owner_id' }),
        __metadata("design:type", owner_entity_1.OwnerEntity)
    ], AddressEntity.prototype, "owner", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return customer_entity_1.CustomerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
        __metadata("design:type", customer_entity_1.CustomerEntity)
    ], AddressEntity.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return property_entity_1.PropertyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
        __metadata("design:type", property_entity_1.PropertyEntity)
    ], AddressEntity.prototype, "property", void 0);
    AddressEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'public',
            name: 'adresses'
        }),
        __metadata("design:paramtypes", [])
    ], AddressEntity);
    return AddressEntity;
}());
exports.AddressEntity = AddressEntity;
//# sourceMappingURL=address.entity.js.map