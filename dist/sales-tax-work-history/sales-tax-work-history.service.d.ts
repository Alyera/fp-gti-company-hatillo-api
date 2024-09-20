import { CreateSalesTaxWorkHistoryInput } from './dto/create-sales-tax-work-history.input';
import { UpdateSalesTaxWorkHistoryInput } from './dto/update-sales-tax-work-history.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SalesTaxesWorkHistory, Prisma } from '@prisma/client';
export declare class SalesTaxWorkHistoryService {
    private prisma;
    constructor(prisma: PrismaService);
    SalesTaxesWorkHistory(sales_taxes_work_historyWhereUniqueInput: Prisma.SalesTaxesWorkHistoryWhereUniqueInput): Promise<SalesTaxesWorkHistory | null>;
    SalesTaxWorkHistory(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SalesTaxesWorkHistoryWhereUniqueInput;
        where?: Prisma.SalesTaxesWorkHistoryWhereUniqueInput;
        orderBy?: Prisma.SalesTaxesWorkHistoryOrderByWithRelationInput;
    }): Promise<SalesTaxesWorkHistory[]>;
    create(createSalesTaxWorkHistoryInput: CreateSalesTaxWorkHistoryInput): string;
    findAll(): any;
    findOne(SOPNUMBE: string): Promise<SalesTaxesWorkHistory>;
    update(id: number, updateSalesTaxWorkHistoryInput: UpdateSalesTaxWorkHistoryInput): string;
    remove(id: number): string;
}
