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
exports.SalesTaxesWorkHistory = void 0;
const graphql_1 = require("@nestjs/graphql");
const invoice_entity_1 = require("../../invoices/entities/invoice.entity");
const proforma_entity_1 = require("../../proformas/entities/proforma.entity");
let SalesTaxesWorkHistory = class SalesTaxesWorkHistory {
    SOPTYPE;
    SOPNUMBE;
    LNITMSEQ;
    TAXDTLID;
    ACTINDX;
    BKOUTTAX;
    TXABLETX;
    STAXAMNT;
    ORSLSTAX;
    FRTTXAMT;
    ORFRTTAX;
    MSCTXAMT;
    ORMSCTAX;
    TAXDTSLS;
    ORTOTSLS;
    TDTTXSLS;
    ORTXSLS;
    TXDTOTTX;
    OTTAXPON;
    DELETE1;
    CURRNIDX;
    TRXSORCE;
    TXDTLPCTAMT;
    DEX_ROW_ID;
    proforma;
    invoice;
};
exports.SalesTaxesWorkHistory = SalesTaxesWorkHistory;
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "SOPTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], SalesTaxesWorkHistory.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "LNITMSEQ", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], SalesTaxesWorkHistory.prototype, "TAXDTLID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "ACTINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "BKOUTTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "TXABLETX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "STAXAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "ORSLSTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "FRTTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "ORFRTTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "MSCTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "ORMSCTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "TAXDTSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "ORTOTSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "TDTTXSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "ORTXSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "TXDTOTTX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "OTTAXPON", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "DELETE1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "CURRNIDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], SalesTaxesWorkHistory.prototype, "TRXSORCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "TXDTLPCTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], SalesTaxesWorkHistory.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => proforma_entity_1.Proforma),
    __metadata("design:type", proforma_entity_1.Proforma)
], SalesTaxesWorkHistory.prototype, "proforma", void 0);
__decorate([
    (0, graphql_1.Field)((type) => invoice_entity_1.Invoice),
    __metadata("design:type", invoice_entity_1.Invoice)
], SalesTaxesWorkHistory.prototype, "invoice", void 0);
exports.SalesTaxesWorkHistory = SalesTaxesWorkHistory = __decorate([
    (0, graphql_1.ObjectType)()
], SalesTaxesWorkHistory);
//# sourceMappingURL=sales-tax-work-history.entity.js.map