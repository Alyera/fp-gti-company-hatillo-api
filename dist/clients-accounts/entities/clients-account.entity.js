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
exports.ClientsAccount = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_entity_1 = require("../../clients/entities/client.entity");
let ClientsAccount = class ClientsAccount {
    CUSTNMBR;
    ADRSCODE;
    SLPRSNID;
    UPSZONE;
    SHIPMTHD;
    TAXSCHID;
    CNTCPRSN;
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
    MODIFDT;
    CREATDDT;
    GPSFOINTEGRATIONID;
    INTEGRATIONSOURCE;
    INTEGRATIONID;
    CCode;
    DECLID;
    LOCNCODE;
    SALSTERR;
    USERDEF1;
    USERDEF2;
    ShipToName;
    Print_Phone_NumberGB;
    DEX_ROW_TS;
    DEX_ROW_ID;
    client;
};
exports.ClientsAccount = ClientsAccount;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "CUSTNMBR", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "ADRSCODE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "SLPRSNID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "UPSZONE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "SHIPMTHD", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "TAXSCHID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "CNTCPRSN", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "ADDRESS1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "ADDRESS2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "ADDRESS3", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "COUNTRY", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "CITY", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "STATE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "ZIP", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "PHONE1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "PHONE2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "PHONE3", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "FAX", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ClientsAccount.prototype, "MODIFDT", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ClientsAccount.prototype, "CREATDDT", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "GPSFOINTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ClientsAccount.prototype, "INTEGRATIONSOURCE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "INTEGRATIONID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "CCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "DECLID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "LOCNCODE", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "SALSTERR", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "USERDEF1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "USERDEF2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsAccount.prototype, "ShipToName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ClientsAccount.prototype, "Print_Phone_NumberGB", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ClientsAccount.prototype, "DEX_ROW_TS", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ClientsAccount.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => client_entity_1.Client),
    __metadata("design:type", client_entity_1.Client)
], ClientsAccount.prototype, "client", void 0);
exports.ClientsAccount = ClientsAccount = __decorate([
    (0, graphql_1.ObjectType)()
], ClientsAccount);
//# sourceMappingURL=clients-account.entity.js.map