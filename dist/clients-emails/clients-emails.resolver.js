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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsEmailsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const clients_emails_service_1 = require("./clients-emails.service");
const clients_email_entity_1 = require("./entities/clients-email.entity");
const create_clients_email_input_1 = require("./dto/create-clients-email.input");
const update_clients_email_input_1 = require("./dto/update-clients-email.input");
let ClientsEmailsResolver = class ClientsEmailsResolver {
    clientsEmailsService;
    constructor(clientsEmailsService) {
        this.clientsEmailsService = clientsEmailsService;
    }
    createClientsEmail(createClientsEmailInput) {
        return this.clientsEmailsService.create(createClientsEmailInput);
    }
    findAll() {
        return this.clientsEmailsService.findAll();
    }
    findOne(id) {
        return this.clientsEmailsService.findOne(id);
    }
    updateClientsEmail(updateClientsEmailInput) {
        return this.clientsEmailsService.update(updateClientsEmailInput.id, updateClientsEmailInput);
    }
    removeClientsEmail(id) {
        return this.clientsEmailsService.remove(id);
    }
};
exports.ClientsEmailsResolver = ClientsEmailsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => clients_email_entity_1.ClientsEmail),
    __param(0, (0, graphql_1.Args)('createClientsEmailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clients_email_input_1.CreateClientsEmailInput]),
    __metadata("design:returntype", void 0)
], ClientsEmailsResolver.prototype, "createClientsEmail", null);
__decorate([
    (0, graphql_1.Query)(() => [clients_email_entity_1.ClientsEmail], { name: 'clientsEmails' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsEmailsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => clients_email_entity_1.ClientsEmail, { name: 'clientsEmail' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientsEmailsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => clients_email_entity_1.ClientsEmail),
    __param(0, (0, graphql_1.Args)('updateClientsEmailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_clients_email_input_1.UpdateClientsEmailInput]),
    __metadata("design:returntype", void 0)
], ClientsEmailsResolver.prototype, "updateClientsEmail", null);
__decorate([
    (0, graphql_1.Mutation)(() => clients_email_entity_1.ClientsEmail),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientsEmailsResolver.prototype, "removeClientsEmail", null);
exports.ClientsEmailsResolver = ClientsEmailsResolver = __decorate([
    (0, graphql_1.Resolver)(() => clients_email_entity_1.ClientsEmail),
    __metadata("design:paramtypes", [clients_emails_service_1.ClientsEmailsService])
], ClientsEmailsResolver);
//# sourceMappingURL=clients-emails.resolver.js.map