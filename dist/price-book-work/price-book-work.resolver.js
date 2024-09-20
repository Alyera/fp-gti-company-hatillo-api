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
exports.PriceBookWorkResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const price_book_work_service_1 = require("./price-book-work.service");
const price_book_work_entity_1 = require("./entities/price-book-work.entity");
const create_price_book_work_input_1 = require("./dto/create-price-book-work.input");
const update_price_book_work_input_1 = require("./dto/update-price-book-work.input");
let PriceBookWorkResolver = class PriceBookWorkResolver {
    priceBookWorkService;
    constructor(priceBookWorkService) {
        this.priceBookWorkService = priceBookWorkService;
    }
    createPriceBookWork(createPriceBookWorkInput) {
        return this.priceBookWorkService.create(createPriceBookWorkInput);
    }
    findAll() {
        return this.priceBookWorkService.findAll();
    }
    findOne(id) {
        return this.priceBookWorkService.findOne(id);
    }
    updatePriceBookWork(updatePriceBookWorkInput) {
        return this.priceBookWorkService.update(updatePriceBookWorkInput.id, updatePriceBookWorkInput);
    }
    removePriceBookWork(id) {
        return this.priceBookWorkService.remove(id);
    }
};
exports.PriceBookWorkResolver = PriceBookWorkResolver;
__decorate([
    (0, graphql_1.Mutation)(() => price_book_work_entity_1.PriceBookWork),
    __param(0, (0, graphql_1.Args)('createPriceBookWorkInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_price_book_work_input_1.CreatePriceBookWorkInput]),
    __metadata("design:returntype", void 0)
], PriceBookWorkResolver.prototype, "createPriceBookWork", null);
__decorate([
    (0, graphql_1.Query)(() => [price_book_work_entity_1.PriceBookWork], { name: 'priceBookWork' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PriceBookWorkResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => price_book_work_entity_1.PriceBookWork, { name: 'priceBookWork' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PriceBookWorkResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => price_book_work_entity_1.PriceBookWork),
    __param(0, (0, graphql_1.Args)('updatePriceBookWorkInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_price_book_work_input_1.UpdatePriceBookWorkInput]),
    __metadata("design:returntype", void 0)
], PriceBookWorkResolver.prototype, "updatePriceBookWork", null);
__decorate([
    (0, graphql_1.Mutation)(() => price_book_work_entity_1.PriceBookWork),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PriceBookWorkResolver.prototype, "removePriceBookWork", null);
exports.PriceBookWorkResolver = PriceBookWorkResolver = __decorate([
    (0, graphql_1.Resolver)(() => price_book_work_entity_1.PriceBookWork),
    __metadata("design:paramtypes", [price_book_work_service_1.PriceBookWorkService])
], PriceBookWorkResolver);
//# sourceMappingURL=price-book-work.resolver.js.map