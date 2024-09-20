import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Proforma } from 'src/proformas/entities/proforma.entity';
export declare class UsrDefinedWorkHistory {
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
    proforma?: Proforma | null;
    invoice?: Invoice;
}
