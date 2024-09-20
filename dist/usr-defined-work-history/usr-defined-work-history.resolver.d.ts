import { UsrDefinedWorkHistoryService } from './usr-defined-work-history.service';
import { CreateUsrDefinedWorkHistoryInput } from './dto/create-usr-defined-work-history.input';
import { UpdateUsrDefinedWorkHistoryInput } from './dto/update-usr-defined-work-history.input';
export declare class UsrDefinedWorkHistoryResolver {
    private readonly usrDefinedWorkHistoryService;
    constructor(usrDefinedWorkHistoryService: UsrDefinedWorkHistoryService);
    createUsrDefinedWorkHistory(createUsrDefinedWorkHistoryInput: CreateUsrDefinedWorkHistoryInput): string;
    findAll(): Promise<any>;
    findOne(SOPNUMBE: string): Promise<{
        SOPTYPE: number;
        SOPNUMBE: string;
        USRDAT01: Date;
        USRDAT02: Date;
        USRTAB01: string;
        USRTAB09: string;
        USRTAB03: string;
        USERDEF1: string;
        USERDEF2: string;
        USRDEF03: string;
        USRDEF04: string;
        USRDEF05: string;
        COMMENT_1: string;
        COMMENT_2: string;
        COMMENT_3: string;
        COMMENT_4: string;
        DEX_ROW_ID: number;
        CMMTTEXT: string;
    }>;
    updateUsrDefinedWorkHistory(updateUsrDefinedWorkHistoryInput: UpdateUsrDefinedWorkHistoryInput): string;
    removeUsrDefinedWorkHistory(id: number): string;
}
