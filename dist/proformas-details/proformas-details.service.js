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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformasDetailsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProformasDetailsService = class ProformasDetailsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProformasDetailInput) {
        return 'This action adds a new proformasDetail';
    }
    findAll() {
        return this.prisma.proformaDetail.findMany();
    }
    findOne(SOPNUMBE) {
        return this.prisma.proformaDetail.findUnique({
            where: { SOPNUMBE, SOPTYPE: 2, },
            include: {
                proformas: {
                    include: {
                        work_history: true,
                    },
                },
            },
        });
    }
    update(id, updateProformasDetailInput) {
        return `This action updates a #${id} proformasDetail`;
    }
    remove(id) {
        return `This action removes a #${id} proformasDetail`;
    }
};
exports.ProformasDetailsService = ProformasDetailsService;
exports.ProformasDetailsService = ProformasDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProformasDetailsService);
//# sourceMappingURL=proformas-details.service.js.map