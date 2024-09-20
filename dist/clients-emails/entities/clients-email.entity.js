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
exports.ClientsEmail = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_entity_1 = require("../../clients/entities/client.entity");
let ClientsEmail = class ClientsEmail {
    CUSTNMBR;
    Email_Type;
    Email_Recipient;
    DEX_ROW_ID;
    client;
};
exports.ClientsEmail = ClientsEmail;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsEmail.prototype, "CUSTNMBR", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ClientsEmail.prototype, "Email_Type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClientsEmail.prototype, "Email_Recipient", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ClientsEmail.prototype, "DEX_ROW_ID", void 0);
__decorate([
    (0, graphql_1.Field)((type) => client_entity_1.Client),
    __metadata("design:type", client_entity_1.Client)
], ClientsEmail.prototype, "client", void 0);
exports.ClientsEmail = ClientsEmail = __decorate([
    (0, graphql_1.ObjectType)()
], ClientsEmail);
//# sourceMappingURL=clients-email.entity.js.map