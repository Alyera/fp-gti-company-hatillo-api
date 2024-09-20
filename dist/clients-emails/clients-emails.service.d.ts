import { CreateClientsEmailInput } from './dto/create-clients-email.input';
import { UpdateClientsEmailInput } from './dto/update-clients-email.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClientsEmailsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClientsEmailInput: CreateClientsEmailInput): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        CUSTNMBR: string;
        Email_Type: number;
        Email_Recipient: string;
        DEX_ROW_ID: number;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateClientsEmailInput: UpdateClientsEmailInput): string;
    remove(id: number): string;
}
