"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesTaxWorkHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const sales_tax_work_history_service_1 = require("./sales-tax-work-history.service");
const sales_tax_work_history_resolver_1 = require("./sales-tax-work-history.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
let SalesTaxWorkHistoryModule = class SalesTaxWorkHistoryModule {
};
exports.SalesTaxWorkHistoryModule = SalesTaxWorkHistoryModule;
exports.SalesTaxWorkHistoryModule = SalesTaxWorkHistoryModule = __decorate([
    (0, common_1.Module)({
        providers: [sales_tax_work_history_resolver_1.SalesTaxWorkHistoryResolver, sales_tax_work_history_service_1.SalesTaxWorkHistoryService, prisma_service_1.PrismaService],
    })
], SalesTaxWorkHistoryModule);
//# sourceMappingURL=sales-tax-work-history.module.js.map