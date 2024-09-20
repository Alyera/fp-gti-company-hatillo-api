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
exports.ProformasDetail = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const proforma_entity_1 = require("../../proformas/entities/proforma.entity");
let ProformasDetail = class ProformasDetail {
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
    QTYONPO;
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
    ORGSEQNM;
    ITEMCODE;
    PURCHSTAT;
    DECPLQTY;
    DECPLCUR;
    ODECPLCU;
    QTYTOSHP;
    XFRSHDOC;
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
    BackoutTradeDisc;
    OrigBackoutTradeDisc;
    GPSFOINTEGRATIONID;
    INTEGRATIONSOURCE;
    INTEGRATIONID;
    CONTNBR;
    CONTLNSEQNBR;
    CONTSTARTDTE;
    CONTENDDTE;
    CONTITEMNBR;
    CONTSERIALNBR;
    BULKPICKPRNT;
    INDPICKPRNT;
    ISLINEINTRA;
    SOFULFILLMENTBIN;
    MULTIPLEBINS;
    Print_Phone_NumberGB;
    DEX_ROW_TS;
    DEX_ROW_ID;
    proforma;
};
exports.ProformasDetail = ProformasDetail;
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "SOPTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "LNITMSEQ", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "CMPNTSEQ", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ITEMNMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ITEMDESC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "NONINVEN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "DROPSHIP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "UOFM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "LOCNCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "UNITCOST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORUNTCST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "UNITPRCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORUNTPRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "XTNDPRCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "OXTNDPRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "REMPRICE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "OREPRICE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "EXTDCOST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "OREXTCST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "MRKDNAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORMRKDAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "MRKDNPCT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "MRKDNTYP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "INVINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "CSLSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "SLSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "MKDNINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "RTNSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "INUSINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "INSRINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "DMGDINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ITMTSHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "IVITMTXB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BKTSLSAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORBKTSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "TAXAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORTAXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "TXBTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "OTAXTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BSIVCTTL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "TRDISAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORTDISAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "DISCSALE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORDAVSLS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QUANTITY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ATYALLOC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYINSVC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYINUSE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYDMGED", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYRTRND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYONHND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYCANCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYCANOT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYONPO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYORDER", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYPRBAC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYPRBOO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYPRINV", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYPRORD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYPRVRECVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYRECVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYREMAI", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYREMBO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYTBAOR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYTOINV", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYTORDR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYFULFI", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYSLCTD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYBSUOM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "EXTQTYAL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "EXTQTYSEL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProformasDetail.prototype, "ReqShipDate", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProformasDetail.prototype, "FUFILDAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProformasDetail.prototype, "ACTLSHIP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "SALSTERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "PRCLEVEL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "COMMNTID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BRKFLD1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BRKFLD2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BRKFLD3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "CURRNIDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "TRXSORCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], ProformasDetail.prototype, "SOPLNERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ORGSEQNM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ITEMCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "PURCHSTAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "DECPLQTY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "DECPLCUR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ODECPLCU", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "QTYTOSHP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "XFRSHDOC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "EXCEPTIONALDEMAND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "TXSCHSRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "PRSTADCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ShipToName", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "CNTCPRSN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ADDRESS1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ADDRESS2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ADDRESS3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "CITY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "STATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "ZIPCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "CCode", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "COUNTRY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "PHONE1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "PHONE2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "PHONE3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "FAXNUMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "Flags", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BackoutTradeDisc", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "OrigBackoutTradeDisc", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "GPSFOINTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "INTEGRATIONSOURCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "INTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "CONTNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "CONTLNSEQNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProformasDetail.prototype, "CONTSTARTDTE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProformasDetail.prototype, "CONTENDDTE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "CONTITEMNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "CONTSERIALNBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "BULKPICKPRNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "INDPICKPRNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "ISLINEINTRA", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], ProformasDetail.prototype, "SOFULFILLMENTBIN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "MULTIPLEBINS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "Print_Phone_NumberGB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], ProformasDetail.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProformasDetail.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => proforma_entity_1.Proforma, { nullable: true }),
    __metadata("design:type", Array)
], ProformasDetail.prototype, "proforma", void 0);
exports.ProformasDetail = ProformasDetail = __decorate([
    (0, graphql_1.ObjectType)()
], ProformasDetail);
//# sourceMappingURL=proformas-detail.entity.js.map