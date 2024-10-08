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
exports.ClientsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const clients_service_1 = require("./clients.service");
const client_entity_1 = require("./entities/client.entity");
const create_client_input_1 = require("./dto/create-client.input");
const update_client_input_1 = require("./dto/update-client.input");
let ClientsResolver = class ClientsResolver {
    clientsService;
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    createClient(createClientInput) {
        return this.clientsService.create(createClientInput);
    }
    findAll() {
        return this.clientsService.findAll();
    }
    findOne(id) {
        return this.clientsService.findOne(id);
    }
    clientAccountsByRIF(CUSTNMBR) {
        return this.clientsService.clientAccountsByRIF(CUSTNMBR);
    }
    clientProformasByRIF(CUSTNMBR, PAGE) {
        return this.clientsService.clientProformasByRIF(CUSTNMBR, PAGE);
    }
    clientInvoicesByRIF(CUSTNMBR) {
        return this.clientsService.clientInvoicesByRIF(CUSTNMBR);
    }
    updateClient(updateClientInput) {
        return this.clientsService.update(updateClientInput.id, updateClientInput);
    }
    removeClient(id) {
        return this.clientsService.remove(id);
    }
    clientProformasFluent(CUSTNMBR) {
        return this.clientsService.clientProformasFluent(CUSTNMBR);
    }
};
exports.ClientsResolver = ClientsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => client_entity_1.Client),
    __param(0, (0, graphql_1.Args)('createClientInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_input_1.CreateClientInput]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "createClient", null);
__decorate([
    (0, graphql_1.Query)(() => [client_entity_1.Client], { name: 'clients' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => client_entity_1.Client, { name: 'client' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)((returns) => client_entity_1.Client, { name: 'clientAccountsByRIF', nullable: true }),
    __param(0, (0, graphql_1.Args)('CUSTNMBR', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "clientAccountsByRIF", null);
__decorate([
    (0, graphql_1.Query)((returns) => client_entity_1.Client, { name: 'clientProformasByRIF', nullable: true }),
    __param(0, (0, graphql_1.Args)('CUSTNMBR', { type: () => String })),
    __param(1, (0, graphql_1.Args)('PAGE', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "clientProformasByRIF", null);
__decorate([
    (0, graphql_1.Query)((returns) => client_entity_1.Client, { name: 'clientInvoicesByRIF', nullable: true }),
    __param(0, (0, graphql_1.Args)('CUSTNMBR', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "clientInvoicesByRIF", null);
__decorate([
    (0, graphql_1.Mutation)(() => client_entity_1.Client),
    __param(0, (0, graphql_1.Args)('updateClientInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_client_input_1.UpdateClientInput]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "updateClient", null);
__decorate([
    (0, graphql_1.Mutation)(() => client_entity_1.Client),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "removeClient", null);
__decorate([
    (0, graphql_1.Query)((returns) => [client_entity_1.Client], { name: 'clientProformasFluent', nullable: true }),
    __param(0, (0, graphql_1.Args)('CUSTNMBR', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsResolver.prototype, "clientProformasFluent", null);
exports.ClientsResolver = ClientsResolver = __decorate([
    (0, graphql_1.Resolver)(() => client_entity_1.Client),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsResolver);
//# sourceMappingURL=clients.resolver.js.map