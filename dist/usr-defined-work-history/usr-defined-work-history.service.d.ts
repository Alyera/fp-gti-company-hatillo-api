import { CreateUsrDefinedWorkHistoryInput } from './dto/create-usr-defined-work-history.input';
import { UpdateUsrDefinedWorkHistoryInput } from './dto/update-usr-defined-work-history.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDefinedWorkHistory } from '@prisma/client';
export declare class UsrDefinedWorkHistoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUsrDefinedWorkHistoryInput: CreateUsrDefinedWorkHistoryInput): string;
    findAll(): Promise<any>;
    findOne(SOPNUMBE: string): Promise<UserDefinedWorkHistory>;
    update(id: number, updateUsrDefinedWorkHistoryInput: UpdateUsrDefinedWorkHistoryInput): string;
    remove(id: number): string;
}
