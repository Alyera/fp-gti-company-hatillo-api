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
exports.InvoicesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const invoices_service_1 = require("./invoices.service");
const invoice_entity_1 = require("./entities/invoice.entity");
const create_invoice_input_1 = require("./dto/create-invoice.input");
const update_invoice_input_1 = require("./dto/update-invoice.input");
let InvoicesResolver = class InvoicesResolver {
    invoicesService;
    constructor(invoicesService) {
        this.invoicesService = invoicesService;
    }
    createInvoice(createInvoiceInput) {
        return this.invoicesService.create(createInvoiceInput);
    }
    findAll() {
        return this.invoicesService.findAll();
    }
    findOne(SOPNUMBE) {
        return this.invoicesService.findOne(SOPNUMBE);
    }
    updateInvoice(updateInvoiceInput) {
        return this.invoicesService.update(updateInvoiceInput.id, updateInvoiceInput);
    }
    removeInvoice(id) {
        return this.invoicesService.remove(id);
    }
};
exports.InvoicesResolver = InvoicesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => invoice_entity_1.Invoice),
    __param(0, (0, graphql_1.Args)('createInvoiceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_input_1.CreateInvoiceInput]),
    __metadata("design:returntype", void 0)
], InvoicesResolver.prototype, "createInvoice", null);
__decorate([
    (0, graphql_1.Query)(() => [invoice_entity_1.Invoice], { name: 'invoices' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoicesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => invoice_entity_1.Invoice, { name: 'invoice' }),
    __param(0, (0, graphql_1.Args)('SOPNUMBE', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoicesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => invoice_entity_1.Invoice),
    __param(0, (0, graphql_1.Args)('updateInvoiceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_invoice_input_1.UpdateInvoiceInput]),
    __metadata("design:returntype", void 0)
], InvoicesResolver.prototype, "updateInvoice", null);
__decorate([
    (0, graphql_1.Mutation)(() => invoice_entity_1.Invoice),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoicesResolver.prototype, "removeInvoice", null);
exports.InvoicesResolver = InvoicesResolver = __decorate([
    (0, graphql_1.Resolver)(() => invoice_entity_1.Invoice),
    __metadata("design:paramtypes", [invoices_service_1.InvoicesService])
], InvoicesResolver);
//# sourceMappingURL=invoices.resolver.js.map