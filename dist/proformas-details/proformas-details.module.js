"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformasDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const proformas_details_service_1 = require("./proformas-details.service");
const proformas_details_resolver_1 = require("./proformas-details.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
let ProformasDetailsModule = class ProformasDetailsModule {
};
exports.ProformasDetailsModule = ProformasDetailsModule;
exports.ProformasDetailsModule = ProformasDetailsModule = __decorate([
    (0, common_1.Module)({
        providers: [proformas_details_resolver_1.ProformasDetailsResolver, proformas_details_service_1.ProformasDetailsService, prisma_service_1.PrismaService],
    })
], ProformasDetailsModule);
//# sourceMappingURL=proformas-details.module.js.map