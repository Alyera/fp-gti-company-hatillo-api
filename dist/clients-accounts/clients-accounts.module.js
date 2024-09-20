"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsAccountsModule = void 0;
const common_1 = require("@nestjs/common");
const clients_accounts_service_1 = require("./clients-accounts.service");
const clients_accounts_resolver_1 = require("./clients-accounts.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientsAccountsModule = class ClientsAccountsModule {
};
exports.ClientsAccountsModule = ClientsAccountsModule;
exports.ClientsAccountsModule = ClientsAccountsModule = __decorate([
    (0, common_1.Module)({
        providers: [clients_accounts_resolver_1.ClientsAccountsResolver, clients_accounts_service_1.ClientsAccountsService, prisma_service_1.PrismaService],
    })
], ClientsAccountsModule);
//# sourceMappingURL=clients-accounts.module.js.map