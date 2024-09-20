"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const invoice_details_service_1 = require("./invoice-details.service");
const invoice_details_resolver_1 = require("./invoice-details.resolver");
let InvoiceDetailsModule = class InvoiceDetailsModule {
};
exports.InvoiceDetailsModule = InvoiceDetailsModule;
exports.InvoiceDetailsModule = InvoiceDetailsModule = __decorate([
    (0, common_1.Module)({
        providers: [invoice_details_resolver_1.InvoiceDetailsResolver, invoice_details_service_1.InvoiceDetailsService],
    })
], InvoiceDetailsModule);
//# sourceMappingURL=invoice-details.module.js.map