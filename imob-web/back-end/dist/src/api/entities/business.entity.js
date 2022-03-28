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
exports.BusinessEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var administrator_entity_1 = require("./administrator.entity");
var manager_entity_1 = require("./manager.entity");
var advisor_entity_1 = require("./advisor.entity");
var broker_entity_1 = require("./broker.entity");
var secretary_entity_1 = require("./secretary.entity");
var owner_entity_1 = require("./owner.entity");
var customer_entity_1 = require("./customer.entity");
var property_entity_1 = require("./property.entity");
var lead_entity_1 = require("./lead.entity");
var BusinessEntity = /** @class */ (function () {
    function BusinessEntity() {
    }
    BusinessEntity.prototype.convertDatesToTimestamp = function () {
        if (this.dateVisit)
            this.dateVisit = new Date(this.dateVisit);
        if (this.dateSale)
            this.dateSale = new Date(this.dateSale);
    };
    BusinessEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    BusinessEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único do negócio'
        }),
        __metadata("design:type", Number)
    ], BusinessEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'status',
            type: 'smallint',
            nullable: false,
            comment: 'Status do negócio, onde: 0 - Prospecção, 1 - Visita, 2 - Proposta, 3 - Rejeitado e 4 - Fechado'
        }),
        __metadata("design:type", Number)
    ], BusinessEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'date_visit',
            type: 'timestamp',
            default: null,
            nullable: true,
            comment: 'Data da visita ao imóvel referente ao negócio'
        }),
        __metadata("design:type", Date)
    ], BusinessEntity.prototype, "dateVisit", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'date_sale',
            type: 'timestamp',
            default: null,
            nullable: true,
            comment: 'Data da venda do imóvel referente ao negócio'
        }),
        __metadata("design:type", Date)
    ], BusinessEntity.prototype, "dateSale", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'visit_form',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do formulário de visita referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "visitForm", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'property_registration',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo da matrícula do imóvel referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "propertyRegistration", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'property_sale_contract',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do contrato de venda referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "propertySaleContract", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'itbi',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do documento de quitação de ITBI referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "ITBI", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'customer_rg',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do RG do cliente referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "customerRG", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'customer_cpf',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do CPF do cliente referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "customerCPF", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'customer_address_proof',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do comprovante de endereço do cliente referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "customerAddressProof", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'customer_payslip',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do contra cheque do cliente referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "customerPayslip", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'owner_rg',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do RG do proprietário referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "ownerRG", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'owner_cpf',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do CPF do proprietário referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "ownerCPF", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'owner_address_proof',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do comprovante de endereço do proprietário referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "ownerAddressProof", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'owner_payslip',
            type: 'text',
            default: null,
            nullable: true,
            comment: 'Caminho relativo do contra cheque do proprietário referente ao negócio'
        }),
        __metadata("design:type", String)
    ], BusinessEntity.prototype, "ownerPayslip", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_by_administrator',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação do negócio por um administrador'
        }),
        __metadata("design:type", Boolean)
    ], BusinessEntity.prototype, "createdByAdministrator", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_by_manager',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação do negócio por um gestor'
        }),
        __metadata("design:type", Boolean)
    ], BusinessEntity.prototype, "createdByManager", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_by_secretary',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação da criação do negócio por uma secretária'
        }),
        __metadata("design:type", Boolean)
    ], BusinessEntity.prototype, "createdBySecretary", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'redirected_manager_id',
            type: 'int',
            default: null,
            nullable: true,
            comment: 'Código sequencial único do gestor para o qual o negócio foi redirecionado'
        }),
        __metadata("design:type", Number)
    ], BusinessEntity.prototype, "redirectedManagerId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'redirected_advisor_id',
            type: 'int',
            default: null,
            nullable: true,
            comment: 'Código sequencial único do despachante para o qual o negócio foi redirecionado'
        }),
        __metadata("design:type", Number)
    ], BusinessEntity.prototype, "redirectedAdvisorId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'redirected_broker_id',
            type: 'int',
            default: null,
            nullable: true,
            comment: 'Código sequencial único da secretária para o qual o negócio foi redirecionado'
        }),
        __metadata("design:type", Number)
    ], BusinessEntity.prototype, "redirectedBrokerId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], BusinessEntity.prototype, "createdAt", void 0);
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
    ], BusinessEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], BusinessEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return administrator_entity_1.AdministratorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'administrator_id' }),
        __metadata("design:type", administrator_entity_1.AdministratorEntity)
    ], BusinessEntity.prototype, "administrator", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return manager_entity_1.ManagerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
        __metadata("design:type", manager_entity_1.ManagerEntity)
    ], BusinessEntity.prototype, "manager", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return advisor_entity_1.AdvisorEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'advisor_id' }),
        __metadata("design:type", advisor_entity_1.AdvisorEntity)
    ], BusinessEntity.prototype, "advisor", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return broker_entity_1.BrokerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'broker_id' }),
        __metadata("design:type", broker_entity_1.BrokerEntity)
    ], BusinessEntity.prototype, "broker", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return secretary_entity_1.SecretaryEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'secretary_id' }),
        __metadata("design:type", secretary_entity_1.SecretaryEntity)
    ], BusinessEntity.prototype, "secretary", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return owner_entity_1.OwnerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'owner_id' }),
        __metadata("design:type", owner_entity_1.OwnerEntity)
    ], BusinessEntity.prototype, "owner", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return customer_entity_1.CustomerEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
        __metadata("design:type", customer_entity_1.CustomerEntity)
    ], BusinessEntity.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return property_entity_1.PropertyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
        __metadata("design:type", property_entity_1.PropertyEntity)
    ], BusinessEntity.prototype, "property", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return lead_entity_1.LeadEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'lead_id' }),
        __metadata("design:type", lead_entity_1.LeadEntity)
    ], BusinessEntity.prototype, "lead", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BusinessEntity.prototype, "convertDatesToTimestamp", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BusinessEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BusinessEntity.prototype, "setUpdatedAt", null);
    BusinessEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'business',
            name: 'businesses'
        }),
        __metadata("design:paramtypes", [])
    ], BusinessEntity);
    return BusinessEntity;
}());
exports.BusinessEntity = BusinessEntity;
//# sourceMappingURL=business.entity.js.map