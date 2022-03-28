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
exports.NeighborhoodEntity = void 0;
var typeorm_1 = require("typeorm");
var city_entity_1 = require("./city.entity");
var NeighborhoodEntity = /** @class */ (function () {
    function NeighborhoodEntity() {
    }
    __decorate([
        (0, typeorm_1.Column)({
            name: 'id',
            type: 'int',
            primary: true,
            generated: 'increment',
            unique: true,
            nullable: false,
            comment: 'Código sequencial único do bairro'
        }),
        __metadata("design:type", Number)
    ], NeighborhoodEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'neighborhood',
            type: 'text',
            nullable: false,
            comment: 'Nome do bairro'
        }),
        __metadata("design:type", String)
    ], NeighborhoodEntity.prototype, "neighborhood", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return city_entity_1.CityEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
        __metadata("design:type", city_entity_1.CityEntity)
    ], NeighborhoodEntity.prototype, "city", void 0);
    NeighborhoodEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'public',
            name: 'neighborhoods'
        }),
        __metadata("design:paramtypes", [])
    ], NeighborhoodEntity);
    return NeighborhoodEntity;
}());
exports.NeighborhoodEntity = NeighborhoodEntity;
//# sourceMappingURL=neighborhood.entity.js.map