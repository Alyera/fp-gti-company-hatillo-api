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
exports.ProformasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProformasService = class ProformasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProformaInput) {
        return 'This action adds a new proforma';
    }
    findAll() {
        return this.prisma.Proforma.findAll();
    }
    findOne(CUSTNMBR) {
        return this.prisma.Proforma.findMany({
            where: { CUSTNMBR: CUSTNMBR, SOPTYPE: 2 },
        });
    }
    update(id, updateProformaInput) {
        return `This action updates a #${id} proforma`;
    }
    remove(id) {
        return `This action removes a #${id} proforma`;
    }
    findByCustomerRIF(CUSTNMBR) {
        return this.prisma.proforma.findMany({
            where: {
                CUSTNMBR: CUSTNMBR,
                SOPTYPE: 2,
                VOIDSTTS: 0
            },
            include: {
                sales_taxes_work_history: {
                    where: {
                        LNITMSEQ: 0
                    }
                },
                work_history: {
                    where: {
                        SOPTYPE: 2
                    }
                },
                khistory: {
                    where: {
                        SOPTYPE: 2,
                    }
                }
            },
        });
    }
    findBySOPNUMBE(SOPNUMBE) {
        return this.prisma.proforma.findUnique({
            where: { SOPNUMBE: SOPNUMBE, SOPTYPE: 2 },
            include: {
                detail: {
                    where: {
                        SOPNUMBE: SOPNUMBE, SOPTYPE: 2
                    },
                    orderBy: {
                        DEX_ROW_ID: 'desc',
                    },
                },
                work_history: {
                    where: {
                        SOPNUMBE: SOPNUMBE, SOPTYPE: 2
                    }
                }
            },
        });
    }
};
exports.ProformasService = ProformasService;
exports.ProformasService = ProformasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProformasService);
//# sourceMappingURL=proformas.service.js.map