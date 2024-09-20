"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsrDefinedWorkHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const usr_defined_work_history_service_1 = require("./usr-defined-work-history.service");
const usr_defined_work_history_resolver_1 = require("./usr-defined-work-history.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
let UsrDefinedWorkHistoryModule = class UsrDefinedWorkHistoryModule {
};
exports.UsrDefinedWorkHistoryModule = UsrDefinedWorkHistoryModule;
exports.UsrDefinedWorkHistoryModule = UsrDefinedWorkHistoryModule = __decorate([
    (0, common_1.Module)({
        providers: [usr_defined_work_history_resolver_1.UsrDefinedWorkHistoryResolver, usr_defined_work_history_service_1.UsrDefinedWorkHistoryService, prisma_service_1.PrismaService],
    })
], UsrDefinedWorkHistoryModule);
//# sourceMappingURL=usr-defined-work-history.module.js.map