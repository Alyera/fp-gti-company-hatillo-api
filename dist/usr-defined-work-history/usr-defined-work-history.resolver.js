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
exports.UsrDefinedWorkHistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const usr_defined_work_history_service_1 = require("./usr-defined-work-history.service");
const usr_defined_work_history_entity_1 = require("./entities/usr-defined-work-history.entity");
const create_usr_defined_work_history_input_1 = require("./dto/create-usr-defined-work-history.input");
const update_usr_defined_work_history_input_1 = require("./dto/update-usr-defined-work-history.input");
let UsrDefinedWorkHistoryResolver = class UsrDefinedWorkHistoryResolver {
    usrDefinedWorkHistoryService;
    constructor(usrDefinedWorkHistoryService) {
        this.usrDefinedWorkHistoryService = usrDefinedWorkHistoryService;
    }
    createUsrDefinedWorkHistory(createUsrDefinedWorkHistoryInput) {
        return this.usrDefinedWorkHistoryService.create(createUsrDefinedWorkHistoryInput);
    }
    findAll() {
        return this.usrDefinedWorkHistoryService.findAll();
    }
    findOne(SOPNUMBE) {
        return this.usrDefinedWorkHistoryService.findOne(SOPNUMBE);
    }
    updateUsrDefinedWorkHistory(updateUsrDefinedWorkHistoryInput) {
        return this.usrDefinedWorkHistoryService.update(updateUsrDefinedWorkHistoryInput.id, updateUsrDefinedWorkHistoryInput);
    }
    removeUsrDefinedWorkHistory(id) {
        return this.usrDefinedWorkHistoryService.remove(id);
    }
};
exports.UsrDefinedWorkHistoryResolver = UsrDefinedWorkHistoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => usr_defined_work_history_entity_1.UsrDefinedWorkHistory),
    __param(0, (0, graphql_1.Args)('createUsrDefinedWorkHistoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usr_defined_work_history_input_1.CreateUsrDefinedWorkHistoryInput]),
    __metadata("design:returntype", void 0)
], UsrDefinedWorkHistoryResolver.prototype, "createUsrDefinedWorkHistory", null);
__decorate([
    (0, graphql_1.Query)(() => [usr_defined_work_history_entity_1.UsrDefinedWorkHistory], { name: 'work_history' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsrDefinedWorkHistoryResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => usr_defined_work_history_entity_1.UsrDefinedWorkHistory, { name: 'work_historys' }),
    __param(0, (0, graphql_1.Args)('SOPNUMBE', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsrDefinedWorkHistoryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => usr_defined_work_history_entity_1.UsrDefinedWorkHistory),
    __param(0, (0, graphql_1.Args)('updateUsrDefinedWorkHistoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_usr_defined_work_history_input_1.UpdateUsrDefinedWorkHistoryInput]),
    __metadata("design:returntype", void 0)
], UsrDefinedWorkHistoryResolver.prototype, "updateUsrDefinedWorkHistory", null);
__decorate([
    (0, graphql_1.Mutation)(() => usr_defined_work_history_entity_1.UsrDefinedWorkHistory),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsrDefinedWorkHistoryResolver.prototype, "removeUsrDefinedWorkHistory", null);
exports.UsrDefinedWorkHistoryResolver = UsrDefinedWorkHistoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => usr_defined_work_history_entity_1.UsrDefinedWorkHistory),
    __metadata("design:paramtypes", [usr_defined_work_history_service_1.UsrDefinedWorkHistoryService])
], UsrDefinedWorkHistoryResolver);
//# sourceMappingURL=usr-defined-work-history.resolver.js.map