"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceBookWorkModule = void 0;
const common_1 = require("@nestjs/common");
const price_book_work_service_1 = require("./price-book-work.service");
const price_book_work_resolver_1 = require("./price-book-work.resolver");
let PriceBookWorkModule = class PriceBookWorkModule {
};
exports.PriceBookWorkModule = PriceBookWorkModule;
exports.PriceBookWorkModule = PriceBookWorkModule = __decorate([
    (0, common_1.Module)({
        providers: [price_book_work_resolver_1.PriceBookWorkResolver, price_book_work_service_1.PriceBookWorkService],
    })
], PriceBookWorkModule);
//# sourceMappingURL=price-book-work.module.js.map