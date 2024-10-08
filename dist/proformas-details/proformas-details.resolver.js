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
exports.ProformasDetailsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const proformas_details_service_1 = require("./proformas-details.service");
const proformas_detail_entity_1 = require("./entities/proformas-detail.entity");
const create_proformas_detail_input_1 = require("./dto/create-proformas-detail.input");
const update_proformas_detail_input_1 = require("./dto/update-proformas-detail.input");
let ProformasDetailsResolver = class ProformasDetailsResolver {
    proformasDetailsService;
    constructor(proformasDetailsService) {
        this.proformasDetailsService = proformasDetailsService;
    }
    createProformasDetail(createProformasDetailInput) {
        return this.proformasDetailsService.create(createProformasDetailInput);
    }
    findAll() {
        return this.proformasDetailsService.findAll();
    }
    findOne(SOPNUMBE) {
        return this.proformasDetailsService.findOne(SOPNUMBE);
    }
    updateProformasDetail(updateProformasDetailInput) {
        return this.proformasDetailsService.update(updateProformasDetailInput.id, updateProformasDetailInput);
    }
    removeProformasDetail(id) {
        return this.proformasDetailsService.remove(id);
    }
};
exports.ProformasDetailsResolver = ProformasDetailsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => proformas_detail_entity_1.ProformasDetail),
    __param(0, (0, graphql_1.Args)('createProformasDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proformas_detail_input_1.CreateProformasDetailInput]),
    __metadata("design:returntype", void 0)
], ProformasDetailsResolver.prototype, "createProformasDetail", null);
__decorate([
    (0, graphql_1.Query)(() => [proformas_detail_entity_1.ProformasDetail], { name: 'proformas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProformasDetailsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => proformas_detail_entity_1.ProformasDetail, { name: 'proformasdetail', nullable: true }),
    __param(0, (0, graphql_1.Args)('SOPNUMBE', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProformasDetailsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => proformas_detail_entity_1.ProformasDetail),
    __param(0, (0, graphql_1.Args)('updateProformasDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_proformas_detail_input_1.UpdateProformasDetailInput]),
    __metadata("design:returntype", void 0)
], ProformasDetailsResolver.prototype, "updateProformasDetail", null);
__decorate([
    (0, graphql_1.Mutation)(() => proformas_detail_entity_1.ProformasDetail),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProformasDetailsResolver.prototype, "removeProformasDetail", null);
exports.ProformasDetailsResolver = ProformasDetailsResolver = __decorate([
    (0, graphql_1.Resolver)(() => proformas_detail_entity_1.ProformasDetail),
    __metadata("design:paramtypes", [proformas_details_service_1.ProformasDetailsService])
], ProformasDetailsResolver);
//# sourceMappingURL=proformas-details.resolver.js.map