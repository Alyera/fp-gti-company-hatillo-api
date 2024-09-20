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
exports.SalesTaxWorkHistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sales_tax_work_history_service_1 = require("./sales-tax-work-history.service");
const sales_tax_work_history_entity_1 = require("./entities/sales-tax-work-history.entity");
const create_sales_tax_work_history_input_1 = require("./dto/create-sales-tax-work-history.input");
const update_sales_tax_work_history_input_1 = require("./dto/update-sales-tax-work-history.input");
let SalesTaxWorkHistoryResolver = class SalesTaxWorkHistoryResolver {
    salesTaxWorkHistoryService;
    constructor(salesTaxWorkHistoryService) {
        this.salesTaxWorkHistoryService = salesTaxWorkHistoryService;
    }
    createSalesTaxWorkHistory(createSalesTaxWorkHistoryInput) {
        return this.salesTaxWorkHistoryService.create(createSalesTaxWorkHistoryInput);
    }
    findAll() {
        return this.salesTaxWorkHistoryService.findAll();
    }
    findOne(SOPNUMBE) {
        return this.salesTaxWorkHistoryService.findOne(SOPNUMBE);
    }
    updateSalesTaxWorkHistory(updateSalesTaxWorkHistoryInput) {
        return this.salesTaxWorkHistoryService.update(updateSalesTaxWorkHistoryInput.id, updateSalesTaxWorkHistoryInput);
    }
    removeSalesTaxWorkHistory(id) {
        return this.salesTaxWorkHistoryService.remove(id);
    }
};
exports.SalesTaxWorkHistoryResolver = SalesTaxWorkHistoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => sales_tax_work_history_entity_1.SalesTaxesWorkHistory),
    __param(0, (0, graphql_1.Args)('createSalesTaxWorkHistoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_tax_work_history_input_1.CreateSalesTaxWorkHistoryInput]),
    __metadata("design:returntype", void 0)
], SalesTaxWorkHistoryResolver.prototype, "createSalesTaxWorkHistory", null);
__decorate([
    (0, graphql_1.Query)(() => [sales_tax_work_history_entity_1.SalesTaxesWorkHistory], { name: 'sales_taxes_work_history' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalesTaxWorkHistoryResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => sales_tax_work_history_entity_1.SalesTaxesWorkHistory, { name: 'sales_taxes_work_historys' }),
    __param(0, (0, graphql_1.Args)('SOPNUMBE', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesTaxWorkHistoryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => sales_tax_work_history_entity_1.SalesTaxesWorkHistory),
    __param(0, (0, graphql_1.Args)('updateSalesTaxWorkHistoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_sales_tax_work_history_input_1.UpdateSalesTaxWorkHistoryInput]),
    __metadata("design:returntype", void 0)
], SalesTaxWorkHistoryResolver.prototype, "updateSalesTaxWorkHistory", null);
__decorate([
    (0, graphql_1.Mutation)(() => sales_tax_work_history_entity_1.SalesTaxesWorkHistory),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalesTaxWorkHistoryResolver.prototype, "removeSalesTaxWorkHistory", null);
exports.SalesTaxWorkHistoryResolver = SalesTaxWorkHistoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => sales_tax_work_history_entity_1.SalesTaxesWorkHistory),
    __metadata("design:paramtypes", [sales_tax_work_history_service_1.SalesTaxWorkHistoryService])
], SalesTaxWorkHistoryResolver);
//# sourceMappingURL=sales-tax-work-history.resolver.js.map