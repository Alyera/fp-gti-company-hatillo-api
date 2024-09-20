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
exports.Invoice = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const client_entity_1 = require("../../clients/entities/client.entity");
const invoice_detail_entity_1 = require("../../invoice-details/entities/invoice-detail.entity");
const rm_open_transaction_entity_1 = require("../../rm-open-transactions/entities/rm-open-transaction.entity");
const sales_tax_work_history_entity_1 = require("../../sales-tax-work-history/entities/sales-tax-work-history.entity");
let Invoice = class Invoice {
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
    DOCNCORR;
    SEQNCORR;
    SALEDATE;
    EXCEPTIONALDEMAND;
    Flags;
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
    client;
    details;
    rm_open_transactions;
    sale_tax_work_history;
};
exports.Invoice = Invoice;
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SOPTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORIGTYPE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "ORIGNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "DOCID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "DOCDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "GLPOSTDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "QUOTEDAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "QUOEXPDA", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "ORDRDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "INVODATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "BACKDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "RETUDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "ReqShipDate", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "FUFILDAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "ACTLSHIP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "DISCDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "DUEDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "REPTING", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TRXFREQU", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TIMEREPD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TIMETREP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DYSTINCR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "DTLSTREP", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "DSTBTCH1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "DSTBTCH2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "USDOCID1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "USDOCID2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DISCFRGT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDAVFRT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DISCMISC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDAVMSC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DISAVAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDAVAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DISCRTND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDISRTD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DISTKNAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDISTKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DSCPCTAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DSCDLRAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDDLRAT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DISAVTKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDATKN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PYMTRMID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PRCLEVEL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "LOCNCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "BCHSOURC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "BACHNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CUSTNMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CUSTNAME", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CSTPONBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "PROSPECT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "MSTRNUMB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PCKSLPNO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PICTICNU", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "MRKDNAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORMRKDAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PRBTADCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PRSTADCD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CNTCPRSN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "ShipToName", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "ADDRESS1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "ADDRESS2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "ADDRESS3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CITY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "STATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "ZIPCODE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CCode", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "COUNTRY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PHNUMBR1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PHNUMBR2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PHONE3", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "FAXNUMBR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "COMAPPTO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "COMMAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "OCOMMAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "CMMSLAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORCOSAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "NCOMAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORNCMAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TRDISAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORTDISAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TRDISPCT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SUBTOTAL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORSUBTOT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "REMSUBTO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "OREMSUBT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "EXTDCOST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "OREXTCST", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "FRTAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORFRTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "MISCAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORMISCAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TXENGCLD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "TAXEXMT1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "TAXEXMT2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "TXRGNNUM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TXSCHSRC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "BSIVCTTL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "FRTSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "FRTTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORFRTTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "FRGTTXBL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "MSCSCHID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "MSCTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORMSCTAX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "MISCTXBL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "BKTFRTAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORBKTFRT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "BKTMSCAM", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORBKTMSC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "BCKTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "OBTAXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TXBTXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "OTAXTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TAXAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORTAXAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ECTRX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DOCAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDOCAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "PYMTRCVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORPMTRVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DEPRECVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORDEPRVD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "CODAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORCODAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ACCTAMNT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ORACTAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "SALSTERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "UPSZONE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "TIMESPRT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "PSTGSTUS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "VOIDSTTS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ALLOCABY", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "NOTEINDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "CURNCYID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "CURRNIDX", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "RATETPID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "EXGTBLID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "XCHGRATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DENXRATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "EXCHDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "TIME1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "RTCLCMTD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "MCTRXSTT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "TRXSORCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Invoice.prototype, "SOPHDRE1", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Invoice.prototype, "SOPHDRE2", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Invoice.prototype, "SOPLNERR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_scalars_1.GraphQLByte, {
        nullable: false,
    }),
    __metadata("design:type", Buffer)
], Invoice.prototype, "SOPHDRFL", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "COMMNTID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "REFRENCE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "POSTEDDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "PTDUSRID", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "USER2ENT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "CREATDDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "MODIFDT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "Tax_Date", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "APLYWITH", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Float, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "WITHHAMT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SHPPGDOC", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "CORRCTN", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SIMPLIFD", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "DOCNCORR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SEQNCORR", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "SALEDATE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "EXCEPTIONALDEMAND", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "Flags", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SOPSTATUS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "SHIPCOMPLETE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DIRECTDEBIT", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "WorkflowApprStatCreditLm", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "WorkflowPriorityCreditLm", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "WorkflowApprStatusQuote", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "WorkflowPriorityQuote", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "Workflow_Status", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "ContractExchangeRateStat", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "Print_Phone_NumberGB", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Invoice.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => client_entity_1.Client),
    __metadata("design:type", client_entity_1.Client)
], Invoice.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)((type) => invoice_detail_entity_1.InvoiceDetail),
    __metadata("design:type", Array)
], Invoice.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [rm_open_transaction_entity_1.RmOpenTransaction], { nullable: true }),
    __metadata("design:type", Array)
], Invoice.prototype, "rm_open_transactions", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [sales_tax_work_history_entity_1.SalesTaxesWorkHistory], { nullable: true }),
    __metadata("design:type", Array)
], Invoice.prototype, "sale_tax_work_history", void 0);
exports.Invoice = Invoice = __decorate([
    (0, graphql_1.ObjectType)()
], Invoice);
//# sourceMappingURL=invoice.entity.js.map