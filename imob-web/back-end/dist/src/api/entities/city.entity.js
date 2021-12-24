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
exports.CityEntity = void 0;
var typeorm_1 = require("typeorm");
var state_entity_1 = require("./state.entity");
var CityEntity = /** @class */ (function () {
    function CityEntity() {
    }
    __decorate([
        (0, typeorm_1.Column)({
            name: 'id',
            type: 'int',
            primary: true,
            generated: 'increment',
            unique: true,
            nullable: false,
            comment: 'Código sequencial único da cidade'
        }),
        __metadata("design:type", Number)
    ], CityEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: 'city',
            type: 'text',
            nullable: false,
            comment: 'Nome da cidade'
        }),
        __metadata("design:type", String)
    ], CityEntity.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return state_entity_1.StateEntity; }),
        (0, typeorm_1.JoinColumn)({ name: 'state_id' }),
        __metadata("design:type", state_entity_1.StateEntity)
    ], CityEntity.prototype, "state", void 0);
    CityEntity = __decorate([
        (0, typeorm_1.Entity)({
            schema: 'public',
            name: 'cities'
        }),
        __metadata("design:paramtypes", [])
    ], CityEntity);
    return CityEntity;
}());
exports.CityEntity = CityEntity;
//# sourceMappingURL=city.entity.js.map