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
exports.ProformasResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const proformas_service_1 = require("./proformas.service");
const proforma_entity_1 = require("./entities/proforma.entity");
const create_proforma_input_1 = require("./dto/create-proforma.input");
const update_proforma_input_1 = require("./dto/update-proforma.input");
let ProformasResolver = class ProformasResolver {
    proformasService;
    constructor(proformasService) {
        this.proformasService = proformasService;
    }
    createProforma(createProformaInput) {
        return this.proformasService.create(createProformaInput);
    }
    findAll() {
        return this.proformasService.findAll();
    }
    findOne(CUSTNMBR) {
        return this.proformasService.findOne(CUSTNMBR);
    }
    updateProforma(updateProformaInput) {
        return this.proformasService.update(updateProformaInput.id, updateProformaInput);
    }
    removeProforma(id) {
        return this.proformasService.remove(id);
    }
    findByCustomerRIF(CUSTNMBR) {
        return this.proformasService.findByCustomerRIF(CUSTNMBR);
    }
    findBySOPNUMBE(SOPNUMBE) {
        return this.proformasService.findBySOPNUMBE(SOPNUMBE);
    }
};
exports.ProformasResolver = ProformasResolver;
__decorate([
    (0, graphql_1.Mutation)(() => proforma_entity_1.Proforma),
    __param(0, (0, graphql_1.Args)('createProformaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proforma_input_1.CreateProformaInput]),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "createProforma", null);
__decorate([
    (0, graphql_1.Query)(() => [proforma_entity_1.Proforma], { name: 'proformasS' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => [proforma_entity_1.Proforma], { name: 'proformabyCUSTNMBR' }),
    __param(0, (0, graphql_1.Args)('CUSTNMBR', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => proforma_entity_1.Proforma),
    __param(0, (0, graphql_1.Args)('updateProformaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_proforma_input_1.UpdateProformaInput]),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "updateProforma", null);
__decorate([
    (0, graphql_1.Mutation)(() => proforma_entity_1.Proforma),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "removeProforma", null);
__decorate([
    (0, graphql_1.Query)(() => proforma_entity_1.Proforma, { name: 'proformasByCustomerRIF' }),
    __param(0, (0, graphql_1.Args)('CUSTNMBR', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "findByCustomerRIF", null);
__decorate([
    (0, graphql_1.Query)(() => proforma_entity_1.Proforma, { name: 'proformasBySopnumbe' }),
    __param(0, (0, graphql_1.Args)('SOPNUMBE', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProformasResolver.prototype, "findBySOPNUMBE", null);
exports.ProformasResolver = ProformasResolver = __decorate([
    (0, graphql_1.Resolver)(() => proforma_entity_1.Proforma),
    __metadata("design:paramtypes", [proformas_service_1.ProformasService])
], ProformasResolver);
//# sourceMappingURL=proformas.resolver.js.map