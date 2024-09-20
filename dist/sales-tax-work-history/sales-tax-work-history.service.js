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
exports.SalesTaxWorkHistoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SalesTaxWorkHistoryService = class SalesTaxWorkHistoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async SalesTaxesWorkHistory(sales_taxes_work_historyWhereUniqueInput) {
        return this.prisma.sales_taxes_work_history.findUnique({
            where: sales_taxes_work_historyWhereUniqueInput,
        });
    }
    async SalesTaxWorkHistory(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.sales_taxes_work_history.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    create(createSalesTaxWorkHistoryInput) {
        return 'This action adds a new salesTaxWorkHistory';
    }
    findAll() {
        return this.prisma.SalesTaxesWorkHistory.findMany({
            include: {
                proforma: true
            }
        });
    }
    async findOne(SOPNUMBE) {
        return this.prisma.SalesTaxesWorkHistory.findUnique({ where: { SOPNUMBE } });
    }
    update(id, updateSalesTaxWorkHistoryInput) {
        return `This action updates a #${id} salesTaxWorkHistory`;
    }
    remove(id) {
        return `This action removes a #${id} salesTaxWorkHistory`;
    }
};
exports.SalesTaxWorkHistoryService = SalesTaxWorkHistoryService;
exports.SalesTaxWorkHistoryService = SalesTaxWorkHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalesTaxWorkHistoryService);
//# sourceMappingURL=sales-tax-work-history.service.js.map