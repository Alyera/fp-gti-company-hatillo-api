import { CreateInvoiceDetailInput } from './dto/create-invoice-detail.input';
import { UpdateInvoiceDetailInput } from './dto/update-invoice-detail.input';
export declare class InvoiceDetailsService {
    create(createInvoiceDetailInput: CreateInvoiceDetailInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInvoiceDetailInput: UpdateInvoiceDetailInput): string;
    remove(id: number): string;
}
