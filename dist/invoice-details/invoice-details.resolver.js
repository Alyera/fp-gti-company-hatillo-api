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
exports.InvoiceDetailsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const invoice_details_service_1 = require("./invoice-details.service");
const invoice_detail_entity_1 = require("./entities/invoice-detail.entity");
const create_invoice_detail_input_1 = require("./dto/create-invoice-detail.input");
const update_invoice_detail_input_1 = require("./dto/update-invoice-detail.input");
let InvoiceDetailsResolver = class InvoiceDetailsResolver {
    invoiceDetailsService;
    constructor(invoiceDetailsService) {
        this.invoiceDetailsService = invoiceDetailsService;
    }
    createInvoiceDetail(createInvoiceDetailInput) {
        return this.invoiceDetailsService.create(createInvoiceDetailInput);
    }
    findAll() {
        return this.invoiceDetailsService.findAll();
    }
    findOne(id) {
        return this.invoiceDetailsService.findOne(id);
    }
    updateInvoiceDetail(updateInvoiceDetailInput) {
        return this.invoiceDetailsService.update(updateInvoiceDetailInput.id, updateInvoiceDetailInput);
    }
    removeInvoiceDetail(id) {
        return this.invoiceDetailsService.remove(id);
    }
};
exports.InvoiceDetailsResolver = InvoiceDetailsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => invoice_detail_entity_1.InvoiceDetail),
    __param(0, (0, graphql_1.Args)('createInvoiceDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_detail_input_1.CreateInvoiceDetailInput]),
    __metadata("design:returntype", void 0)
], InvoiceDetailsResolver.prototype, "createInvoiceDetail", null);
__decorate([
    (0, graphql_1.Query)(() => [invoice_detail_entity_1.InvoiceDetail], { name: 'invoiceDetails' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceDetailsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => invoice_detail_entity_1.InvoiceDetail, { name: 'invoiceDetail' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceDetailsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => invoice_detail_entity_1.InvoiceDetail),
    __param(0, (0, graphql_1.Args)('updateInvoiceDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_invoice_detail_input_1.UpdateInvoiceDetailInput]),
    __metadata("design:returntype", void 0)
], InvoiceDetailsResolver.prototype, "updateInvoiceDetail", null);
__decorate([
    (0, graphql_1.Mutation)(() => invoice_detail_entity_1.InvoiceDetail),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceDetailsResolver.prototype, "removeInvoiceDetail", null);
exports.InvoiceDetailsResolver = InvoiceDetailsResolver = __decorate([
    (0, graphql_1.Resolver)(() => invoice_detail_entity_1.InvoiceDetail),
    __metadata("design:paramtypes", [invoice_details_service_1.InvoiceDetailsService])
], InvoiceDetailsResolver);
//# sourceMappingURL=invoice-details.resolver.js.map