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
exports.TasascambioResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tasascambio_service_1 = require("./tasascambio.service");
const tasascambio_entity_1 = require("./entities/tasascambio.entity");
const update_tasascambio_input_1 = require("./dto/update-tasascambio.input");
let TasascambioResolver = class TasascambioResolver {
    tasascambioService;
    constructor(tasascambioService) {
        this.tasascambioService = tasascambioService;
    }
    findAll() {
        return this.tasascambioService.findAll();
    }
    updateTasasCambio(updateTasasCambioInput) {
        return this.tasascambioService.update(updateTasasCambioInput.id, updateTasasCambioInput);
    }
    removeTasasCambio(id) {
        return this.tasascambioService.remove(id);
    }
};
exports.TasascambioResolver = TasascambioResolver;
__decorate([
    (0, graphql_1.Query)(() => [tasascambio_entity_1.TasasCambio], { name: 'work_history' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasascambioResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => tasascambio_entity_1.TasasCambio),
    __param(0, (0, graphql_1.Args)('updateTasasCambioInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tasascambio_input_1.UpdateTasacambioInput]),
    __metadata("design:returntype", void 0)
], TasascambioResolver.prototype, "updateTasasCambio", null);
__decorate([
    (0, graphql_1.Mutation)(() => tasascambio_entity_1.TasasCambio),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TasascambioResolver.prototype, "removeTasasCambio", null);
exports.TasascambioResolver = TasascambioResolver = __decorate([
    (0, graphql_1.Resolver)(() => tasascambio_entity_1.TasasCambio),
    __metadata("design:paramtypes", [tasascambio_service_1.TasascambioService])
], TasascambioResolver);
//# sourceMappingURL=tasascambio.resolver.js.map