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
exports.RmOpenTransactionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rm_open_transactions_service_1 = require("./rm-open-transactions.service");
const rm_open_transaction_entity_1 = require("./entities/rm-open-transaction.entity");
const create_rm_open_transaction_input_1 = require("./dto/create-rm-open-transaction.input");
const update_rm_open_transaction_input_1 = require("./dto/update-rm-open-transaction.input");
let RmOpenTransactionsResolver = class RmOpenTransactionsResolver {
    rmOpenTransactionsService;
    constructor(rmOpenTransactionsService) {
        this.rmOpenTransactionsService = rmOpenTransactionsService;
    }
    createRmOpenTransaction(createRmOpenTransactionInput) {
        return this.rmOpenTransactionsService.create(createRmOpenTransactionInput);
    }
    findAll() {
        return this.rmOpenTransactionsService.findAll();
    }
    findOne(DOCNUMBR) {
        return this.rmOpenTransactionsService.findOne(DOCNUMBR);
    }
    updateRmOpenTransaction(updateRmOpenTransactionInput) {
        return this.rmOpenTransactionsService.update(updateRmOpenTransactionInput.id, updateRmOpenTransactionInput);
    }
    removeRmOpenTransaction(id) {
        return this.rmOpenTransactionsService.remove(id);
    }
};
exports.RmOpenTransactionsResolver = RmOpenTransactionsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => rm_open_transaction_entity_1.RmOpenTransaction),
    __param(0, (0, graphql_1.Args)('createRmOpenTransactionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rm_open_transaction_input_1.CreateRmOpenTransactionInput]),
    __metadata("design:returntype", void 0)
], RmOpenTransactionsResolver.prototype, "createRmOpenTransaction", null);
__decorate([
    (0, graphql_1.Query)(() => [rm_open_transaction_entity_1.RmOpenTransaction], { name: 'rmOpenTransactions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RmOpenTransactionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => rm_open_transaction_entity_1.RmOpenTransaction, { name: 'rmOpenTransaction' }),
    __param(0, (0, graphql_1.Args)('DOCNUMBR', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RmOpenTransactionsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => rm_open_transaction_entity_1.RmOpenTransaction),
    __param(0, (0, graphql_1.Args)('updateRmOpenTransactionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rm_open_transaction_input_1.UpdateRmOpenTransactionInput]),
    __metadata("design:returntype", void 0)
], RmOpenTransactionsResolver.prototype, "updateRmOpenTransaction", null);
__decorate([
    (0, graphql_1.Mutation)(() => rm_open_transaction_entity_1.RmOpenTransaction),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RmOpenTransactionsResolver.prototype, "removeRmOpenTransaction", null);
exports.RmOpenTransactionsResolver = RmOpenTransactionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => rm_open_transaction_entity_1.RmOpenTransaction),
    __metadata("design:paramtypes", [rm_open_transactions_service_1.RmOpenTransactionsService])
], RmOpenTransactionsResolver);
//# sourceMappingURL=rm-open-transactions.resolver.js.map