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
exports.Proforma = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const client_entity_1 = require("../../clients/entities/client.entity");
const proformas_detail_entity_1 = require("../../proformas-details/entities/proformas-detail.entity");
const sales_tax_work_history_entity_1 = require("../../sales-tax-work-history/entities/sales-tax-work-history.entity");
const usr_defined_work_history_entity_1 = require("../../usr-defined-work-history/entities/usr-defined-work-history.entity");
let Proforma = class Proforma {
    SOPTYPE;
    SOPNUMBE;
    ORIGTYPE;
    ORIGNUMB;
    DOCID;
    DOCDATE;
    GLPOSTDT;
    QUOTEDAT;
    QUOEXPDA;
    ORDRDATE;
    INVODATE;
    BACKDATE;
    RETUDATE;
    ReqShipDate;
    FUFILDAT;
    ACTLSHIP;
    DISCDATE;
    DUEDATE;
    REPTING;
    TRXFREQU;
    TIMEREPD;
    TIMETREP;
    DYSTINCR;
    DTLSTREP;
    DSTBTCH1;
    DSTBTCH2;
    USDOCID1;
    USDOCID2;
    DISCFRGT;
    ORDAVFRT;
    DISCMISC;
    ORDAVMSC;
    DISAVAMT;
    ORDAVAMT;
    DISCRTND;
    ORDISRTD;
    DISTKNAM;
    ORDISTKN;
    DSCPCTAM;
    DSCDLRAM;
    ORDDLRAT;
    DISAVTKN;
    ORDATKN;
    PYMTRMID;
    PRCLEVEL;
    LOCNCODE;
    BCHSOURC;
    BACHNUMB;
    CUSTNMBR;
    CUSTNAME;
    CSTPONBR;
    PROSPECT;
    MSTRNUMB;
    PCKSLPNO;
    PICTICNU;
    MRKDNAMT;
    ORMRKDAM;
    PRBTADCD;
    PRSTADCD;
    CNTCPRSN;
    ShipToName;
    ADDRESS1;
    ADDRESS2;
    ADDRESS3;
    CITY;
    STATE;
    ZIPCODE;
    CCode;
    COUNTRY;
    PHNUMBR1;
    PHNUMBR2;
    PHONE3;
    FAXNUMBR;
    COMAPPTO;
    COMMAMNT;
    OCOMMAMT;
    CMMSLAMT;
    ORCOSAMT;
    NCOMAMNT;
    ORNCMAMT;
    SHIPMTHD;
    TRDISAMT;
    ORTDISAM;
    TRDISPCT;
    SUBTOTAL;
    ORSUBTOT;
    REMSUBTO;
    OREMSUBT;
    EXTDCOST;
    OREXTCST;
    FRTAMNT;
    ORFRTAMT;
    MISCAMNT;
    ORMISCAMT;
    TXENGCLD;
    TAXEXMT1;
    TAXEXMT2;
    TXRGNNUM;
    TAXSCHID;
    TXSCHSRC;
    BSIVCTTL;
    FRTSCHID;
    FRTTXAMT;
    ORFRTTAX;
    FRGTTXBL;
    MSCSCHID;
    MSCTXAMT;
    ORMSCTAX;
    MISCTXBL;
    BKTFRTAM;
    ORBKTFRT;
    BKTMSCAM;
    ORBKTMSC;
    BCKTXAMT;
    OBTAXAMT;
    TXBTXAMT;
    OTAXTAMT;
    TAXAMNT;
    ORTAXAMT;
    ECTRX;
    DOCAMNT;
    ORDOCAMT;
    PYMTRCVD;
    ORPMTRVD;
    DEPRECVD;
    ORDEPRVD;
    CODAMNT;
    ORCODAMT;
    ACCTAMNT;
    ORACTAMT;
    SALSTERR;
    SLPRSNID;
    UPSZONE;
    TIMESPRT;
    PSTGSTUS;
    VOIDSTTS;
    ALLOCABY;
    NOTEINDX;
    CURNCYID;
    CURRNIDX;
    RATETPID;
    EXGTBLID;
    XCHGRATE;
    DENXRATE;
    EXCHDATE;
    TIME1;
    RTCLCMTD;
    MCTRXSTT;
    TRXSORCE;
    SOPHDRE1;
    SOPHDRE2;
    SOPLNERR;
    SOPHDRFL;
    SOPMCERR;
    COMMNTID;
    REFRENCE;
    POSTEDDT;
    PTDUSRID;
    USER2ENT;
    CREATDDT;
    MODIFDT;
    Tax_Date;
    APLYWITH;
    WITHHAMT;
    SHPPGDOC;
    CORRCTN;
    SIMPLIFD;
    CORRNXST;
    DOCNCORR;
    SEQNCORR;
    SALEDATE;
    SOPHDRE3;
    EXCEPTIONALDEMAND;
    Flags;
    BackoutTradeDisc;
    OrigBackoutTradeDisc;
    GPSFOINTEGRATIONID;
    INTEGRATIONSOURCE;
    INTEGRATIONID;
    SOPSTATUS;
    SHIPCOMPLETE;
    DIRECTDEBIT;
    WorkflowApprStatCreditLm;
    WorkflowPriorityCreditLm;
    WorkflowApprStatusQuote;
    WorkflowPriorityQuote;
    Workflow_Status;
    ContractExchangeRateStat;
    Print_Phone_NumberGB;
    DEX_ROW_TS;
    DEX_ROW_ID;
    UNITPRCE;
    ORUNTPRC;
    LNITMSEQ;
    client;
    detail;
    sales_taxes_work_history;
    work_history;
};
exports.Proforma = Proforma;
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SOPTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORIGTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "ORIGNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "DOCID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "DOCDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "GLPOSTDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "QUOTEDAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "QUOEXPDA", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "ORDRDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "INVODATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "BACKDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "RETUDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "ReqShipDate", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "FUFILDAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "ACTLSHIP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "DISCDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "DUEDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "REPTING", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TRXFREQU", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TIMEREPD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TIMETREP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DYSTINCR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "DTLSTREP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "DSTBTCH1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "DSTBTCH2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "USDOCID1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "USDOCID2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DISCFRGT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDAVFRT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DISCMISC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDAVMSC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DISAVAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDAVAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DISCRTND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDISRTD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DISTKNAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDISTKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DSCPCTAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DSCDLRAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDDLRAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DISAVTKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDATKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PYMTRMID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PRCLEVEL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "LOCNCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "BCHSOURC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "BACHNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CUSTNMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CUSTNAME", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CSTPONBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "PROSPECT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "MSTRNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PCKSLPNO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PICTICNU", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "MRKDNAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORMRKDAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PRBTADCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PRSTADCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CNTCPRSN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "ShipToName", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "ADDRESS1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "ADDRESS2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "ADDRESS3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CITY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "STATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "ZIPCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CCode", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "COUNTRY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PHNUMBR1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PHNUMBR2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PHONE3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "FAXNUMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "COMAPPTO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "COMMAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "OCOMMAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "CMMSLAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORCOSAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "NCOMAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORNCMAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TRDISAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORTDISAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TRDISPCT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SUBTOTAL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORSUBTOT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "REMSUBTO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "OREMSUBT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "EXTDCOST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "OREXTCST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "FRTAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORFRTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "MISCAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORMISCAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TXENGCLD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "TAXEXMT1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "TAXEXMT2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "TXRGNNUM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TXSCHSRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "BSIVCTTL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "FRTSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "FRTTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORFRTTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "FRGTTXBL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "MSCSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "MSCTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORMSCTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "MISCTXBL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "BKTFRTAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORBKTFRT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "BKTMSCAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORBKTMSC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "BCKTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "OBTAXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TXBTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "OTAXTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TAXAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORTAXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ECTRX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DOCAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDOCAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "PYMTRCVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORPMTRVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DEPRECVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORDEPRVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "CODAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORCODAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ACCTAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORACTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "SALSTERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "UPSZONE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "TIMESPRT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "PSTGSTUS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "VOIDSTTS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ALLOCABY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "NOTEINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "CURNCYID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "CURRNIDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "RATETPID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "EXGTBLID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "XCHGRATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DENXRATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "EXCHDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "TIME1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "RTCLCMTD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "MCTRXSTT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "TRXSORCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Proforma.prototype, "SOPHDRE1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Proforma.prototype, "SOPHDRE2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Proforma.prototype, "SOPLNERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Proforma.prototype, "SOPHDRFL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Proforma.prototype, "SOPMCERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "COMMNTID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "REFRENCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "POSTEDDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "PTDUSRID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "USER2ENT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "CREATDDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "MODIFDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "Tax_Date", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "APLYWITH", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "WITHHAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SHPPGDOC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "CORRCTN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SIMPLIFD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "CORRNXST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "DOCNCORR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SEQNCORR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "SALEDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Proforma.prototype, "SOPHDRE3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "EXCEPTIONALDEMAND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "Flags", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "BackoutTradeDisc", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "OrigBackoutTradeDisc", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "GPSFOINTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "INTEGRATIONSOURCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Proforma.prototype, "INTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SOPSTATUS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "SHIPCOMPLETE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DIRECTDEBIT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "WorkflowApprStatCreditLm", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "WorkflowPriorityCreditLm", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "WorkflowApprStatusQuote", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "WorkflowPriorityQuote", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "Workflow_Status", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ContractExchangeRateStat", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "Print_Phone_NumberGB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Proforma.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "UNITPRCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "ORUNTPRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Proforma.prototype, "LNITMSEQ", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [client_entity_1.Client], { nullable: true }),
    __metadata("design:type", Array)
], Proforma.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [proformas_detail_entity_1.ProformasDetail], { nullable: true }),
    __metadata("design:type", Array)
], Proforma.prototype, "detail", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [sales_tax_work_history_entity_1.SalesTaxesWorkHistory]),
    __metadata("design:type", Array)
], Proforma.prototype, "sales_taxes_work_history", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [usr_defined_work_history_entity_1.UsrDefinedWorkHistory], { nullable: true }),
    __metadata("design:type", Array)
], Proforma.prototype, "work_history", void 0);
exports.Proforma = Proforma = __decorate([
    (0, graphql_1.ObjectType)()
], Proforma);
//# sourceMappingURL=proforma.entity.js.map