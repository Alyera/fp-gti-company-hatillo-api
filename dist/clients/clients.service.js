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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientsService = class ClientsService {
    prisma;
    clientInvoicesByRIF(CUSTNMBR) {
        throw new Error('Method not implemented.');
    }
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createClientInput) {
        return 'This action adds a new client';
    }
    findAll() {
        return this.prisma.client.findMany();
    }
    findOne(CUSTNMBR) {
        return this.prisma.client.findUnique({ where: { CUSTNMBR } });
    }
    update(id, updateClientInput) {
        return `This action updates a #${id} client`;
    }
    remove(id) {
        return `This action removes a #${id} client`;
    }
    clientAccountsByRIF(CUSTNMBR) {
        return this.prisma.client.findUnique({
            where: { CUSTNMBR },
            include: {
                accounts: {
                    select: {
                        CUSTNMBR: true,
                    },
                    where: {
                        CUSTNMBR: CUSTNMBR
                    }
                }
            }
        });
    }
    clientProformasByRIF(CUSTNMBR, PAGE) {
        const page = PAGE;
        return this.prisma.client.findUnique({
            where: { CUSTNMBR },
            select: {
                CUSTNMBR: true,
                proformas: {
                    orderBy: [
                        { DOCDATE: 'desc' },
                        { SOPNUMBE: 'desc' }
                    ],
                    skip: (page - 1) * 100,
                    take: 100,
                    select: {
                        SOPNUMBE: true,
                        PRSTADCD: true,
                        SUBTOTAL: true,
                        ORSUBTOT: true,
                        TAXAMNT: true,
                        ORTAXAMT: true,
                        DOCAMNT: true,
                        ORDOCAMT: true,
                        DOCDATE: true,
                        CURNCYID: true,
                        CREATDDT: true,
                        sales_taxes_work_history: {
                            select: {
                                TXDTLPCTAMT: true,
                            },
                            where: {
                                LNITMSEQ: 0
                            }
                        },
                        work_history: {
                            select: {
                                USRDAT02: true,
                                COMMENT_1: true,
                                USRDEF03: true
                            },
                            where: {
                                SOPTYPE: 2
                            }
                        },
                        khistory: {
                            where: {
                                SOPTYPE: 2,
                                DELETE1: 0,
                            }
                        }
                    },
                    where: {
                        CUSTNMBR: CUSTNMBR,
                        SOPTYPE: 2,
                        VOIDSTTS: 0,
                        khistory: {
                            every: {
                                NOT: {
                                    DELETE1: 0,
                                    SOPTYPE: 2,
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    clientProformasFluent(CUSTNMBR) {
        return this.prisma.client.findUnique({
            where: { CUSTNMBR: CUSTNMBR }
        })
            .proformas({
            select: {
                CUSTNMBR: true
            }
        });
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map