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
exports.ProfileEntity = void 0;
var typeorm_1 = require("typeorm");
var ProfileEntity = /** @class */ (function () {
    function ProfileEntity() {
    }
    ProfileEntity.prototype.setCreatedAt = function () {
        this.createdAt = new Date();
    };
    ProfileEntity.prototype.setUpdatedAt = function () {
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
            comment: 'Código sequencial único do perfil do usuário'
        }),
        __metadata("design:type", Number)
    ], ProfileEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'user_type',
            type: 'text',
            nullable: false,
            comment: 'Tipo de usuário, onde: 1 - Administrador, 2 - Gestor, 3 - Despachante, 4 - Corretor, 5 - Secretária'
        }),
        __metadata("design:type", String)
    ], ProfileEntity.prototype, "userType", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'is_admin',
            type: 'bool',
            nullable: false,
            comment: 'Confirmação se o perfil do usuário é de administrador'
        }),
        __metadata("design:type", Boolean)
    ], ProfileEntity.prototype, "isAdmin", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'permissions',
            type: 'json',
            nullable: false,
            comment: 'Permissões do perfil do usuário no sistema'
        }),
        __metadata("design:type", Object)
    ], ProfileEntity.prototype, "permissions", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'created_at',
            type: 'timestamp',
            nullable: false,
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            comment: 'Data de criação do registro',
        }),
        __metadata("design:type", Date)
    ], ProfileEntity.prototype, "createdAt", void 0);
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
    ], ProfileEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProfileEntity.prototype, "setCreatedAt", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProfileEntity.prototype, "setUpdatedAt", null);
    ProfileEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'authentication',
            name: 'profiles'
        }),
        __metadata("design:paramtypes", [])
    ], ProfileEntity);
    return ProfileEntity;
}());
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=profile.entity.js.map