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
exports.CommissionReceivableEntity = void 0;
var typeorm_1 = require("typeorm");
var company_entity_1 = require("./company.entity");
var property_entity_1 = require("./property.entity");
var CommissionReceivableEntity = /** @class */ (function () {
    function CommissionReceivableEntity() {
    }
    CommissionReceivableEntity.prototype.convertValuesToNumber = function () {
        if (this.value)
            this.value = Number(this.value);
    };
    CommissionReceivableEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    CommissionReceivableEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único da comissão à receber'
        }),
        __metadata("design:type", Number)
    ], CommissionReceivableEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'date',
            type: 'date',
            nullable: false,
            comment: 'Data da venda do imóvel que garante a comissão à receber'
        }),
        __metadata("design:type", Date)
    ], CommissionReceivableEntity.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'value',
            type: 'numeric',
            nullable: false,
            comment: 'Valor da comissão à receber'
        }),
        __metadata("design:type", Number)
    ], CommissionReceivableEntity.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], CommissionReceivableEntity.prototype, "createdAt", void 0);
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
    ], CommissionReceivableEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return company_entity_1.CompanyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", company_entity_1.CompanyEntity)
    ], CommissionReceivableEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return property_entity_1.PropertyEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
        __metadata("design:type", property_entity_1.PropertyEntity)
    ], CommissionReceivableEntity.prototype, "property", void 0);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CommissionReceivableEntity.prototype, "convertValuesToNumber", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CommissionReceivableEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CommissionReceivableEntity.prototype, "setUpdatedAt", null);
    CommissionReceivableEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'commission',
            name: 'commissions_receivable'
        }),
        __metadata("design:paramtypes", [])
    ], CommissionReceivableEntity);
    return CommissionReceivableEntity;
}());
exports.CommissionReceivableEntity = CommissionReceivableEntity;
//# sourceMappingURL=commission-receivable.entity.js.map