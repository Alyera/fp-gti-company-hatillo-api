import { ClientsEmailsService } from './clients-emails.service';
import { CreateClientsEmailInput } from './dto/create-clients-email.input';
import { UpdateClientsEmailInput } from './dto/update-clients-email.input';
export declare class ClientsEmailsResolver {
    private readonly clientsEmailsService;
    constructor(clientsEmailsService: ClientsEmailsService);
    createClientsEmail(createClientsEmailInput: CreateClientsEmailInput): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        CUSTNMBR: string;
        Email_Type: number;
        Email_Recipient: string;
        DEX_ROW_ID: number;
    }[]>;
    findOne(id: number): string;
    updateClientsEmail(updateClientsEmailInput: UpdateClientsEmailInput): string;
    removeClientsEmail(id: number): string;
}
