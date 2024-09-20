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
exports.Client = void 0;
const graphql_1 = require("@nestjs/graphql");
const invoice_entity_1 = require("../../invoices/entities/invoice.entity");
const clients_account_entity_1 = require("../../clients-accounts/entities/clients-account.entity");
const clients_email_entity_1 = require("../../clients-emails/entities/clients-email.entity");
const proforma_entity_1 = require("../../proformas/entities/proforma.entity");
let Client = class Client {
    CUSTNMBR;
    CUSTNAME;
    CUSTCLAS;
    CPRCSTNM;
    CNTCPRSN;
    STMTNAME;
    SHRTNAME;
    ADRSCODE;
    UPSZONE;
    SHIPMTHD;
    TAXSCHID;
    ADDRESS1;
    ADDRESS2;
    ADDRESS3;
    COUNTRY;
    CITY;
    STATE;
    ZIP;
    PHONE1;
    PHONE2;
    PHONE3;
    FAX;
    PRBTADCD;
    PRSTADCD;
    STADDRCD;
    SLPRSNID;
    CHEKBKID;
    PYMTRMID;
    CRLMTTYP;
    CRLMTAMT;
    CRLMTPER;
    CRLMTPAM;
    CURNCYID;
    RATETPID;
    CUSTDISC;
    PRCLEVEL;
    MINPYTYP;
    MINPYDLR;
    MINPYPCT;
    FNCHATYP;
    FNCHPCNT;
    FINCHDLR;
    MXWOFTYP;
    MXWROFAM;
    COMMENT1;
    COMMENT2;
    USERDEF1;
    USERDEF2;
    TAXEXMT1;
    TAXEXMT2;
    TXRGNNUM;
    BALNCTYP;
    STMTCYCL;
    BANKNAME;
    BNKBRNCH;
    SALSTERR;
    DEFCACTY;
    RMCSHACC;
    RMARACC;
    RMSLSACC;
    RMIVACC;
    RMCOSACC;
    RMTAKACC;
    RMAVACC;
    RMFCGACC;
    RMWRACC;
    RMSORACC;
    FRSTINDT;
    INACTIVE;
    HOLD;
    CRCARDID;
    CRCRDNUM;
    CCRDXPDT;
    KPDSTHST;
    KPCALHST;
    KPERHIST;
    KPTRXHST;
    NOTEINDX;
    CREATDDT;
    MODIFDT;
    Revalue_Customer;
    Post_Results_To;
    FINCHID;
    GOVCRPID;
    GOVINDID;
    DISGRPER;
    DUEGRPER;
    DOCFMTID;
    Send_Email_Statements;
    USERLANG;
    GPSFOINTEGRATIONID;
    INTEGRATIONSOURCE;
    INTEGRATIONID;
    ORDERFULFILLDEFAULT;
    CUSTPRIORITY;
    CCode;
    DECLID;
    RMOvrpymtWrtoffAcctIdx;
    SHIPCOMPLETE;
    CBVAT;
    INCLUDEINDP;
    DEX_ROW_TS;
    DEX_ROW_ID;
    SOPNUMBE;
    PAGE;
    accounts;
    email;
    proformas;
    invoices;
};
exports.Client = Client;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CUSTNMBR", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CUSTNAME", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CUSTCLAS", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CPRCSTNM", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CNTCPRSN", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "STMTNAME", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "SHRTNAME", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "ADRSCODE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "UPSZONE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "ADDRESS1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "ADDRESS2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "ADDRESS3", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "COUNTRY", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CITY", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "STATE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "ZIP", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PHONE1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PHONE2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PHONE3", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "FAX", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PRBTADCD", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PRSTADCD", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "STADDRCD", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CHEKBKID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PYMTRMID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "CRLMTTYP", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Client.prototype, "CRLMTAMT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "CRLMTPER", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Client.prototype, "CRLMTPAM", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CURNCYID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "RATETPID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "CUSTDISC", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "PRCLEVEL", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "MINPYTYP", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Client.prototype, "MINPYDLR", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "MINPYPCT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "FNCHATYP", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "FNCHPCNT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Client.prototype, "FINCHDLR", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "MXWOFTYP", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Client.prototype, "MXWROFAM", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "COMMENT1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "COMMENT2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "USERDEF1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "USERDEF2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "TAXEXMT1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "TAXEXMT2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "TXRGNNUM", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "BALNCTYP", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "STMTCYCL", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "BANKNAME", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "BNKBRNCH", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "SALSTERR", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "DEFCACTY", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMCSHACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMARACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMSLSACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMIVACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMCOSACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMTAKACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMAVACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMFCGACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMWRACC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMSORACC", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Client.prototype, "FRSTINDT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "INACTIVE", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "HOLD", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CRCARDID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CRCRDNUM", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Client.prototype, "CCRDXPDT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "KPDSTHST", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "KPCALHST", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "KPERHIST", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "KPTRXHST", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Client.prototype, "NOTEINDX", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Client.prototype, "CREATDDT", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Client.prototype, "MODIFDT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "Revalue_Customer", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "Post_Results_To", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "FINCHID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "GOVCRPID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "GOVINDID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "DISGRPER", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "DUEGRPER", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "DOCFMTID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "Send_Email_Statements", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "USERLANG", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "GPSFOINTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "INTEGRATIONSOURCE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "INTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "ORDERFULFILLDEFAULT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "CUSTPRIORITY", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "CCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "DECLID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "RMOvrpymtWrtoffAcctIdx", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "SHIPCOMPLETE", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "CBVAT", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "INCLUDEINDP", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Client.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Client.prototype, "SOPNUMBE", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => Number, {
        nullable: false,
    }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Client.prototype, "PAGE", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [clients_account_entity_1.ClientsAccount], { nullable: true }),
    __metadata("design:type", Array)
], Client.prototype, "accounts", void 0);
__decorate([
    (0, graphql_1.Field)((type) => clients_email_entity_1.ClientsEmail, { nullable: true }),
    __metadata("design:type", clients_email_entity_1.ClientsEmail)
], Client.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [proforma_entity_1.Proforma], { nullable: true }),
    __metadata("design:type", Array)
], Client.prototype, "proformas", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [invoice_entity_1.Invoice], { nullable: true }),
    __metadata("design:type", Array)
], Client.prototype, "invoices", void 0);
exports.Client = Client = __decorate([
    (0, graphql_1.ObjectType)()
], Client);
//# sourceMappingURL=client.entity.js.map