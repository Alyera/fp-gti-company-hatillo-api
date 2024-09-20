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
exports.RmOpenTransaction = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_entity_1 = require("../../clients/entities/client.entity");
const invoice_entity_1 = require("../../invoices/entities/invoice.entity");
let RmOpenTransaction = class RmOpenTransaction {
    CUSTNMBR;
    CPRCSTNM;
    DOCNUMBR;
    CHEKNMBR;
    BACHNUMB;
    BCHSOURC;
    TRXSORCE;
    RMDTYPAL;
    CSHRCTYP;
    CBKIDCRD;
    CBKIDCSH;
    CBKIDCHK;
    DUEDATE;
    DOCDATE;
    POSTDATE;
    PSTUSRID;
    GLPOSTDT;
    LSTEDTDT;
    LSTUSRED;
    ORTRXAMT;
    CURTRXAM;
    SLSAMNT;
    COSTAMNT;
    FRTAMNT;
    MISCAMNT;
    TAXAMNT;
    COMDLRAM;
    CASHAMNT;
    DISTKNAM;
    DISAVAMT;
    DISAVTKN;
    DISCRTND;
    DISCDATE;
    DSCDLRAM;
    DSCPCTAM;
    WROFAMNT;
    TRXDSCRN;
    CSPORNBR;
    SLPRSNID;
    SLSTERCD;
    DINVPDOF;
    PPSAMDED;
    GSTDSAMT;
    DELETE1;
    AGNGBUKT;
    VOIDSTTS;
    VOIDDATE;
    TAXSCHID;
    CURNCYID;
    PYMTRMID;
    SHIPMTHD;
    TRDISAMT;
    SLSCHDID;
    FRTSCHID;
    MSCSCHID;
    NOTEINDX;
    Tax_Date;
    APLYWITH;
    SALEDATE;
    CORRCTN;
    SIMPLIFD;
    Electronic;
    ECTRX;
    BKTSLSAM;
    BKTFRTAM;
    BKTMSCAM;
    BackoutTradeDisc;
    Factoring;
    DIRECTDEBIT;
    ADRSCODE;
    EFTFLAG;
    DEX_ROW_TS;
    DEX_ROW_ID;
    client;
    invoice;
};
exports.RmOpenTransaction = RmOpenTransaction;
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CUSTNMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CPRCSTNM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "DOCNUMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CHEKNMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "BACHNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "BCHSOURC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "TRXSORCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "RMDTYPAL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "CSHRCTYP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CBKIDCRD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CBKIDCSH", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CBKIDCHK", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "DUEDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "DOCDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "POSTDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "PSTUSRID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "GLPOSTDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "LSTEDTDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "LSTUSRED", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "ORTRXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "CURTRXAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "SLSAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "COSTAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "FRTAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "MISCAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "TAXAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "COMDLRAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "CASHAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DISTKNAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DISAVAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DISAVTKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DISCRTND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "DISCDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DSCDLRAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DSCPCTAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "WROFAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "TRXDSCRN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CSPORNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "SLSTERCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "DINVPDOF", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "PPSAMDED", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "GSTDSAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DELETE1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "AGNGBUKT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "VOIDSTTS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "VOIDDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "CURNCYID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "PYMTRMID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "TRDISAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "SLSCHDID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "FRTSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "MSCSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "NOTEINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "Tax_Date", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "APLYWITH", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "SALEDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "CORRCTN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "SIMPLIFD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "Electronic", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "ECTRX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "BKTSLSAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "BKTFRTAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "BKTMSCAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "BackoutTradeDisc", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "Factoring", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DIRECTDEBIT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RmOpenTransaction.prototype, "ADRSCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "EFTFLAG", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], RmOpenTransaction.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], RmOpenTransaction.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => client_entity_1.Client),
    __metadata("design:type", client_entity_1.Client)
], RmOpenTransaction.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)((type) => invoice_entity_1.Invoice),
    __metadata("design:type", invoice_entity_1.Invoice)
], RmOpenTransaction.prototype, "invoice", void 0);
exports.RmOpenTransaction = RmOpenTransaction = __decorate([
    (0, graphql_1.ObjectType)()
], RmOpenTransaction);
//# sourceMappingURL=rm-open-transaction.entity.js.map