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
exports.CompanyEntity = void 0;
var typeorm_1 = require("typeorm");
var CompanyEntity = /** @class */ (function () {
    function CompanyEntity() {
    }
    CompanyEntity.prototype.convertValuesToNumber = function () {
        if (this.percentageCommissionReceivable)
            this.percentageCommissionReceivable = Number(this.percentageCommissionReceivable);
        if (this.percentageCommissionPayableForClosedDeals)
            this.percentageCommissionPayableForClosedDeals = Number(this.percentageCommissionPayableForClosedDeals);
        if (this.percentageCommissionPayableForPropertyCaptured)
            this.percentageCommissionPayableForPropertyCaptured = Number(this.percentageCommissionPayableForPropertyCaptured);
    };
    CompanyEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    CompanyEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único da imobiliária'
        }),
        __metadata("design:type", Number)
    ], CompanyEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'cnpj',
            type: 'text',
            nullable: false,
            comment: 'CNPJ da imobiliária'
        }),
        __metadata("design:type", String)
    ], CompanyEntity.prototype, "CNPJ", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'corporate_name',
            type: 'text',
            nullable: false,
            comment: 'Razão social da imobiliária'
        }),
        __metadata("design:type", String)
    ], CompanyEntity.prototype, "corporateName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'state_registration',
            type: 'text',
            nullable: false,
            comment: 'Inscrição estadual da imobiliária'
        }),
        __metadata("design:type", String)
    ], CompanyEntity.prototype, "stateRegistration", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'percentage_commission_receivable',
            type: 'numeric',
            nullable: true,
            comment: 'Percentual de comissão à receber pelas vendas de imóveis da imobiliária'
        }),
        __metadata("design:type", Number)
    ], CompanyEntity.prototype, "percentageCommissionReceivable", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'percentage_commission_payable_for_closed_deals',
            type: 'numeric',
            nullable: true,
            comment: 'Percentual de comissão à pagar aos corretores pelas vendas de imóveis da imobiliária'
        }),
        __metadata("design:type", Number)
    ], CompanyEntity.prototype, "percentageCommissionPayableForClosedDeals", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'percentage_commission_payable_for_property_captured',
            type: 'numeric',
            nullable: true,
            comment: 'Percentual de comissão à pagar aos corretores pelas captações de imóveis realizadas na imobiliária'
        }),
        __metadata("design:type", Number)
    ], CompanyEntity.prototype, "percentageCommissionPayableForPropertyCaptured", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], CompanyEntity.prototype, "createdAt", void 0);
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
    ], CompanyEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CompanyEntity.prototype, "convertValuesToNumber", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CompanyEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CompanyEntity.prototype, "setUpdatedAt", null);
    CompanyEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'business',
            name: 'companies'
        }),
        __metadata("design:paramtypes", [])
    ], CompanyEntity);
    return CompanyEntity;
}());
exports.CompanyEntity = CompanyEntity;
//# sourceMappingURL=company.entity.js.map