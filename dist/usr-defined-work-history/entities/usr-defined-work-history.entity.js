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
exports.UsrDefinedWorkHistory = void 0;
const graphql_1 = require("@nestjs/graphql");
const invoice_entity_1 = require("../../invoices/entities/invoice.entity");
const proforma_entity_1 = require("../../proformas/entities/proforma.entity");
let UsrDefinedWorkHistory = class UsrDefinedWorkHistory {
    SOPTYPE;
    SOPNUMBE;
    USRDAT01;
    USRDAT02;
    USRTAB01;
    USRTAB09;
    USRTAB03;
    USERDEF1;
    USERDEF2;
    USRDEF03;
    USRDEF04;
    USRDEF05;
    COMMENT_1;
    COMMENT_2;
    COMMENT_3;
    COMMENT_4;
    DEX_ROW_ID;
    CMMTTEXT;
    proforma;
    invoice;
};
exports.UsrDefinedWorkHistory = UsrDefinedWorkHistory;
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], UsrDefinedWorkHistory.prototype, "SOPTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], UsrDefinedWorkHistory.prototype, "USRDAT01", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], UsrDefinedWorkHistory.prototype, "USRDAT02", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USRTAB01", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USRTAB09", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USRTAB03", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USERDEF1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USERDEF2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USRDEF03", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USRDEF04", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "USRDEF05", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "COMMENT_1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "COMMENT_2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "COMMENT_3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "COMMENT_4", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], UsrDefinedWorkHistory.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsrDefinedWorkHistory.prototype, "CMMTTEXT", void 0);
__decorate([
    (0, graphql_1.Field)((type) => proforma_entity_1.Proforma, { nullable: true }),
    __metadata("design:type", proforma_entity_1.Proforma)
], UsrDefinedWorkHistory.prototype, "proforma", void 0);
__decorate([
    (0, graphql_1.Field)((type) => invoice_entity_1.Invoice),
    __metadata("design:type", invoice_entity_1.Invoice)
], UsrDefinedWorkHistory.prototype, "invoice", void 0);
exports.UsrDefinedWorkHistory = UsrDefinedWorkHistory = __decorate([
    (0, graphql_1.ObjectType)()
], UsrDefinedWorkHistory);
//# sourceMappingURL=usr-defined-work-history.entity.js.map