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
exports.InvoiceDetail = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const invoice_entity_1 = require("../../invoices/entities/invoice.entity");
let InvoiceDetail = class InvoiceDetail {
    SOPTYPE;
    SOPNUMBE;
    LNITMSEQ;
    CMPNTSEQ;
    ITEMNMBR;
    ITEMDESC;
    NONINVEN;
    DROPSHIP;
    UOFM;
    LOCNCODE;
    UNITCOST;
    ORUNTCST;
    UNITPRCE;
    ORUNTPRC;
    XTNDPRCE;
    OXTNDPRC;
    REMPRICE;
    OREPRICE;
    EXTDCOST;
    OREXTCST;
    MRKDNAMT;
    ORMRKDAM;
    MRKDNPCT;
    MRKDNTYP;
    INVINDX;
    CSLSINDX;
    SLSINDX;
    MKDNINDX;
    RTNSINDX;
    INUSINDX;
    INSRINDX;
    DMGDINDX;
    ITMTSHID;
    IVITMTXB;
    BKTSLSAM;
    ORBKTSLS;
    TAXAMNT;
    ORTAXAMT;
    TXBTXAMT;
    OTAXTAMT;
    BSIVCTTL;
    TRDISAMT;
    ORTDISAM;
    DISCSALE;
    ORDAVSLS;
    QUANTITY;
    ATYALLOC;
    QTYINSVC;
    QTYINUSE;
    QTYDMGED;
    QTYRTRND;
    QTYONHND;
    QTYCANCE;
    QTYCANOT;
    QTYORDER;
    QTYPRBAC;
    QTYPRBOO;
    QTYPRINV;
    QTYPRORD;
    QTYPRVRECVD;
    QTYRECVD;
    QTYREMAI;
    QTYREMBO;
    QTYTBAOR;
    QTYTOINV;
    QTYTORDR;
    QTYFULFI;
    QTYSLCTD;
    QTYBSUOM;
    EXTQTYAL;
    EXTQTYSEL;
    ReqShipDate;
    FUFILDAT;
    ACTLSHIP;
    SHIPMTHD;
    SALSTERR;
    SLPRSNID;
    PRCLEVEL;
    COMMNTID;
    BRKFLD1;
    BRKFLD2;
    BRKFLD3;
    CURRNIDX;
    TRXSORCE;
    SOPLNERR;
    DOCNCORR;
    ORGSEQNM;
    ITEMCODE;
    PURCHSTAT;
    DECPLQTY;
    DECPLCUR;
    ODECPLCU;
    EXCEPTIONALDEMAND;
    TAXSCHID;
    TXSCHSRC;
    PRSTADCD;
    ShipToName;
    CNTCPRSN;
    ADDRESS1;
    ADDRESS2;
    ADDRESS3;
    CITY;
    STATE;
    ZIPCODE;
    CCode;
    COUNTRY;
    PHONE1;
    PHONE2;
    PHONE3;
    FAXNUMBR;
    Flags;
    CONTNBR;
    CONTLNSEQNBR;
    CONTSTARTDTE;
    CONTENDDTE;
    CONTITEMNBR;
    CONTSERIALNBR;
    ISLINEINTRA;
    Print_Phone_NumberGB;
    DEX_ROW_TS;
    DEX_ROW_ID;
    invoice;
};
exports.InvoiceDetail = InvoiceDetail;
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "SOPTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "LNITMSEQ", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "CMPNTSEQ", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ITEMNMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ITEMDESC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "NONINVEN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "DROPSHIP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "UOFM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "LOCNCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "UNITCOST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORUNTCST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "UNITPRCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORUNTPRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "XTNDPRCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "OXTNDPRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "REMPRICE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "OREPRICE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "EXTDCOST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "OREXTCST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "MRKDNAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORMRKDAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "MRKDNPCT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "MRKDNTYP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "INVINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "CSLSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "SLSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "MKDNINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "RTNSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "INUSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "INSRINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "DMGDINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ITMTSHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "IVITMTXB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "BKTSLSAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORBKTSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "TAXAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORTAXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "TXBTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "OTAXTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "BSIVCTTL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "TRDISAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORTDISAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "DISCSALE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORDAVSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QUANTITY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ATYALLOC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYINSVC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYINUSE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYDMGED", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYRTRND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYONHND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYCANCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYCANOT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYORDER", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYPRBAC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYPRBOO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYPRINV", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYPRORD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYPRVRECVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYRECVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYREMAI", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYREMBO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYTBAOR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYTOINV", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYTORDR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYFULFI", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYSLCTD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "QTYBSUOM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "EXTQTYAL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "EXTQTYSEL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], InvoiceDetail.prototype, "ReqShipDate", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], InvoiceDetail.prototype, "FUFILDAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], InvoiceDetail.prototype, "ACTLSHIP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "SALSTERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "PRCLEVEL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "COMMNTID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "BRKFLD1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "BRKFLD2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "BRKFLD3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "CURRNIDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "TRXSORCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], InvoiceDetail.prototype, "SOPLNERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "DOCNCORR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ORGSEQNM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ITEMCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "PURCHSTAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "DECPLQTY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "DECPLCUR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ODECPLCU", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "EXCEPTIONALDEMAND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "TXSCHSRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "PRSTADCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ShipToName", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "CNTCPRSN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ADDRESS1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ADDRESS2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ADDRESS3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "CITY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "STATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "ZIPCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "CCode", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "COUNTRY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "PHONE1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "PHONE2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "PHONE3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "FAXNUMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "Flags", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "CONTNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "CONTLNSEQNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], InvoiceDetail.prototype, "CONTSTARTDTE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], InvoiceDetail.prototype, "CONTENDDTE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "CONTITEMNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], InvoiceDetail.prototype, "CONTSERIALNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "ISLINEINTRA", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "Print_Phone_NumberGB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], InvoiceDetail.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => invoice_entity_1.Invoice),
    __metadata("design:type", invoice_entity_1.Invoice)
], InvoiceDetail.prototype, "invoice", void 0);
exports.InvoiceDetail = InvoiceDetail = __decorate([
    (0, graphql_1.ObjectType)()
], InvoiceDetail);
//# sourceMappingURL=invoice-detail.entity.js.map