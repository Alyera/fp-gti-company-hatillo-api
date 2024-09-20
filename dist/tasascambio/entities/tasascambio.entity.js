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
exports.TasasCambio = void 0;
const graphql_1 = require("@nestjs/graphql");
const proforma_entity_1 = require("../../proformas/entities/proforma.entity");
let TasasCambio = class TasasCambio {
    EXGTBLID;
    CURNCYID;
    EXCHDATE;
    TIME1;
    XCHGRATE;
    EXPNDATE;
    DEX_ROW_ID;
    proforma;
};
exports.TasasCambio = TasasCambio;
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], TasasCambio.prototype, "EXGTBLID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], TasasCambio.prototype, "CURNCYID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], TasasCambio.prototype, "EXCHDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], TasasCambio.prototype, "TIME1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], TasasCambio.prototype, "XCHGRATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], TasasCambio.prototype, "EXPNDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], TasasCambio.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => proforma_entity_1.Proforma),
    __metadata("design:type", proforma_entity_1.Proforma)
], TasasCambio.prototype, "proforma", void 0);
exports.TasasCambio = TasasCambio = __decorate([
    (0, graphql_1.ObjectType)()
], TasasCambio);
//# sourceMappingURL=tasascambio.entity.js.map