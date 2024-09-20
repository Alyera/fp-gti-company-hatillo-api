import { SalesTaxWorkHistoryService } from './sales-tax-work-history.service';
import { CreateSalesTaxWorkHistoryInput } from './dto/create-sales-tax-work-history.input';
import { UpdateSalesTaxWorkHistoryInput } from './dto/update-sales-tax-work-history.input';
export declare class SalesTaxWorkHistoryResolver {
    private readonly salesTaxWorkHistoryService;
    constructor(salesTaxWorkHistoryService: SalesTaxWorkHistoryService);
    createSalesTaxWorkHistory(createSalesTaxWorkHistoryInput: CreateSalesTaxWorkHistoryInput): string;
    findAll(): any;
    findOne(SOPNUMBE: string): Promise<{
        SOPTYPE: number;
        SOPNUMBE: string;
        LNITMSEQ: number;
        TAXDTLID: string;
        ACTINDX: number;
        BKOUTTAX: number;
        TXABLETX: number;
        STAXAMNT: import("@prisma/client/runtime/library").Decimal;
        ORSLSTAX: import("@prisma/client/runtime/library").Decimal;
        FRTTXAMT: import("@prisma/client/runtime/library").Decimal;
        ORFRTTAX: import("@prisma/client/runtime/library").Decimal;
        MSCTXAMT: import("@prisma/client/runtime/library").Decimal;
        ORMSCTAX: import("@prisma/client/runtime/library").Decimal;
        TAXDTSLS: import("@prisma/client/runtime/library").Decimal;
        ORTOTSLS: import("@prisma/client/runtime/library").Decimal;
        TDTTXSLS: import("@prisma/client/runtime/library").Decimal;
        ORTXSLS: import("@prisma/client/runtime/library").Decimal;
        TXDTOTTX: import("@prisma/client/runtime/library").Decimal;
        OTTAXPON: import("@prisma/client/runtime/library").Decimal;
        DELETE1: number;
        CURRNIDX: number;
        TRXSORCE: string;
        TXDTLPCTAMT: import("@prisma/client/runtime/library").Decimal;
        DEX_ROW_ID: number;
    }>;
    updateSalesTaxWorkHistory(updateSalesTaxWorkHistoryInput: UpdateSalesTaxWorkHistoryInput): string;
    removeSalesTaxWorkHistory(id: number): string;
}
