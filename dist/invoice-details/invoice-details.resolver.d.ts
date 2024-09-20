import { InvoiceDetailsService } from './invoice-details.service';
import { CreateInvoiceDetailInput } from './dto/create-invoice-detail.input';
import { UpdateInvoiceDetailInput } from './dto/update-invoice-detail.input';
export declare class InvoiceDetailsResolver {
    private readonly invoiceDetailsService;
    constructor(invoiceDetailsService: InvoiceDetailsService);
    createInvoiceDetail(createInvoiceDetailInput: CreateInvoiceDetailInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateInvoiceDetail(updateInvoiceDetailInput: UpdateInvoiceDetailInput): string;
    removeInvoiceDetail(id: number): string;
}
