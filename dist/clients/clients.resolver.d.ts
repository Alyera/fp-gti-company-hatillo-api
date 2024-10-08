import { ClientsService } from './clients.service';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
export declare class ClientsResolver {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    createClient(createClientInput: CreateClientInput): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        CUSTNMBR: string;
        CUSTNAME: string;
        CUSTCLAS: string;
        CPRCSTNM: string;
        CNTCPRSN: string;
        STMTNAME: string;
        SHRTNAME: string;
        ADRSCODE: string;
        UPSZONE: string;
        SHIPMTHD: string;
        TAXSCHID: string;
        ADDRESS1: string;
        ADDRESS2: string;
        ADDRESS3: string;
        COUNTRY: string;
        CITY: string;
        STATE: string;
        ZIP: string;
        PHONE1: string;
        PHONE2: string;
        PHONE3: string;
        FAX: string;
        PRBTADCD: string;
        PRSTADCD: string;
        STADDRCD: string;
        SLPRSNID: string;
        CHEKBKID: string;
        PYMTRMID: string;
        CRLMTTYP: number;
        CRLMTAMT: import("@prisma/client/runtime/library").Decimal;
        CRLMTPER: number;
        CRLMTPAM: import("@prisma/client/runtime/library").Decimal;
        CURNCYID: string;
        RATETPID: string;
        CUSTDISC: number;
        PRCLEVEL: string;
        MINPYTYP: number;
        MINPYDLR: import("@prisma/client/runtime/library").Decimal;
        MINPYPCT: number;
        FNCHATYP: number;
        FNCHPCNT: number;
        FINCHDLR: import("@prisma/client/runtime/library").Decimal;
        MXWOFTYP: number;
        MXWROFAM: import("@prisma/client/runtime/library").Decimal;
        COMMENT1: string;
        COMMENT2: string;
        USERDEF1: string;
        USERDEF2: string;
        TAXEXMT1: string;
        TAXEXMT2: string;
        TXRGNNUM: string;
        BALNCTYP: number;
        STMTCYCL: number;
        BANKNAME: string;
        BNKBRNCH: string;
        SALSTERR: string;
        DEFCACTY: number;
        RMCSHACC: number;
        RMARACC: number;
        RMSLSACC: number;
        RMIVACC: number;
        RMCOSACC: number;
        RMTAKACC: number;
        RMAVACC: number;
        RMFCGACC: number;
        RMWRACC: number;
        RMSORACC: number;
        FRSTINDT: Date;
        INACTIVE: number;
        HOLD: number;
        CRCARDID: string;
        CRCRDNUM: string;
        CCRDXPDT: Date;
        KPDSTHST: number;
        KPCALHST: number;
        KPERHIST: number;
        KPTRXHST: number;
        NOTEINDX: import("@prisma/client/runtime/library").Decimal;
        CREATDDT: Date;
        MODIFDT: Date;
        Revalue_Customer: number;
        Post_Results_To: number;
        FINCHID: string;
        GOVCRPID: string;
        GOVINDID: string;
        DISGRPER: number;
        DUEGRPER: number;
        DOCFMTID: string;
        Send_Email_Statements: number;
        USERLANG: number;
        GPSFOINTEGRATIONID: string;
        INTEGRATIONSOURCE: number;
        INTEGRATIONID: string;
        ORDERFULFILLDEFAULT: number;
        CUSTPRIORITY: number;
        CCode: string;
        DECLID: string;
        RMOvrpymtWrtoffAcctIdx: number;
        SHIPCOMPLETE: number;
        CBVAT: number;
        INCLUDEINDP: number;
        DEX_ROW_TS: Date;
        DEX_ROW_ID: number;
        PAGE: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ClientClient<{
        CUSTNMBR: string;
        CUSTNAME: string;
        CUSTCLAS: string;
        CPRCSTNM: string;
        CNTCPRSN: string;
        STMTNAME: string;
        SHRTNAME: string;
        ADRSCODE: string;
        UPSZONE: string;
        SHIPMTHD: string;
        TAXSCHID: string;
        ADDRESS1: string;
        ADDRESS2: string;
        ADDRESS3: string;
        COUNTRY: string;
        CITY: string;
        STATE: string;
        ZIP: string;
        PHONE1: string;
        PHONE2: string;
        PHONE3: string;
        FAX: string;
        PRBTADCD: string;
        PRSTADCD: string;
        STADDRCD: string;
        SLPRSNID: string;
        CHEKBKID: string;
        PYMTRMID: string;
        CRLMTTYP: number;
        CRLMTAMT: import("@prisma/client/runtime/library").Decimal;
        CRLMTPER: number;
        CRLMTPAM: import("@prisma/client/runtime/library").Decimal;
        CURNCYID: string;
        RATETPID: string;
        CUSTDISC: number;
        PRCLEVEL: string;
        MINPYTYP: number;
        MINPYDLR: import("@prisma/client/runtime/library").Decimal;
        MINPYPCT: number;
        FNCHATYP: number;
        FNCHPCNT: number;
        FINCHDLR: import("@prisma/client/runtime/library").Decimal;
        MXWOFTYP: number;
        MXWROFAM: import("@prisma/client/runtime/library").Decimal;
        COMMENT1: string;
        COMMENT2: string;
        USERDEF1: string;
        USERDEF2: string;
        TAXEXMT1: string;
        TAXEXMT2: string;
        TXRGNNUM: string;
        BALNCTYP: number;
        STMTCYCL: number;
        BANKNAME: string;
        BNKBRNCH: string;
        SALSTERR: string;
        DEFCACTY: number;
        RMCSHACC: number;
        RMARACC: number;
        RMSLSACC: number;
        RMIVACC: number;
        RMCOSACC: number;
        RMTAKACC: number;
        RMAVACC: number;
        RMFCGACC: number;
        RMWRACC: number;
        RMSORACC: number;
        FRSTINDT: Date;
        INACTIVE: number;
        HOLD: number;
        CRCARDID: string;
        CRCRDNUM: string;
        CCRDXPDT: Date;
        KPDSTHST: number;
        KPCALHST: number;
        KPERHIST: number;
        KPTRXHST: number;
        NOTEINDX: import("@prisma/client/runtime/library").Decimal;
        CREATDDT: Date;
        MODIFDT: Date;
        Revalue_Customer: number;
        Post_Results_To: number;
        FINCHID: string;
        GOVCRPID: string;
        GOVINDID: string;
        DISGRPER: number;
        DUEGRPER: number;
        DOCFMTID: string;
        Send_Email_Statements: number;
        USERLANG: number;
        GPSFOINTEGRATIONID: string;
        INTEGRATIONSOURCE: number;
        INTEGRATIONID: string;
        ORDERFULFILLDEFAULT: number;
        CUSTPRIORITY: number;
        CCode: string;
        DECLID: string;
        RMOvrpymtWrtoffAcctIdx: number;
        SHIPCOMPLETE: number;
        CBVAT: number;
        INCLUDEINDP: number;
        DEX_ROW_TS: Date;
        DEX_ROW_ID: number;
        PAGE: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    clientAccountsByRIF(CUSTNMBR: string): import(".prisma/client").Prisma.Prisma__ClientClient<{
        accounts: {
            CUSTNMBR: string;
        }[];
    } & {
        CUSTNMBR: string;
        CUSTNAME: string;
        CUSTCLAS: string;
        CPRCSTNM: string;
        CNTCPRSN: string;
        STMTNAME: string;
        SHRTNAME: string;
        ADRSCODE: string;
        UPSZONE: string;
        SHIPMTHD: string;
        TAXSCHID: string;
        ADDRESS1: string;
        ADDRESS2: string;
        ADDRESS3: string;
        COUNTRY: string;
        CITY: string;
        STATE: string;
        ZIP: string;
        PHONE1: string;
        PHONE2: string;
        PHONE3: string;
        FAX: string;
        PRBTADCD: string;
        PRSTADCD: string;
        STADDRCD: string;
        SLPRSNID: string;
        CHEKBKID: string;
        PYMTRMID: string;
        CRLMTTYP: number;
        CRLMTAMT: import("@prisma/client/runtime/library").Decimal;
        CRLMTPER: number;
        CRLMTPAM: import("@prisma/client/runtime/library").Decimal;
        CURNCYID: string;
        RATETPID: string;
        CUSTDISC: number;
        PRCLEVEL: string;
        MINPYTYP: number;
        MINPYDLR: import("@prisma/client/runtime/library").Decimal;
        MINPYPCT: number;
        FNCHATYP: number;
        FNCHPCNT: number;
        FINCHDLR: import("@prisma/client/runtime/library").Decimal;
        MXWOFTYP: number;
        MXWROFAM: import("@prisma/client/runtime/library").Decimal;
        COMMENT1: string;
        COMMENT2: string;
        USERDEF1: string;
        USERDEF2: string;
        TAXEXMT1: string;
        TAXEXMT2: string;
        TXRGNNUM: string;
        BALNCTYP: number;
        STMTCYCL: number;
        BANKNAME: string;
        BNKBRNCH: string;
        SALSTERR: string;
        DEFCACTY: number;
        RMCSHACC: number;
        RMARACC: number;
        RMSLSACC: number;
        RMIVACC: number;
        RMCOSACC: number;
        RMTAKACC: number;
        RMAVACC: number;
        RMFCGACC: number;
        RMWRACC: number;
        RMSORACC: number;
        FRSTINDT: Date;
        INACTIVE: number;
        HOLD: number;
        CRCARDID: string;
        CRCRDNUM: string;
        CCRDXPDT: Date;
        KPDSTHST: number;
        KPCALHST: number;
        KPERHIST: number;
        KPTRXHST: number;
        NOTEINDX: import("@prisma/client/runtime/library").Decimal;
        CREATDDT: Date;
        MODIFDT: Date;
        Revalue_Customer: number;
        Post_Results_To: number;
        FINCHID: string;
        GOVCRPID: string;
        GOVINDID: string;
        DISGRPER: number;
        DUEGRPER: number;
        DOCFMTID: string;
        Send_Email_Statements: number;
        USERLANG: number;
        GPSFOINTEGRATIONID: string;
        INTEGRATIONSOURCE: number;
        INTEGRATIONID: string;
        ORDERFULFILLDEFAULT: number;
        CUSTPRIORITY: number;
        CCode: string;
        DECLID: string;
        RMOvrpymtWrtoffAcctIdx: number;
        SHIPCOMPLETE: number;
        CBVAT: number;
        INCLUDEINDP: number;
        DEX_ROW_TS: Date;
        DEX_ROW_ID: number;
        PAGE: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    clientProformasByRIF(CUSTNMBR: string, PAGE: number): import(".prisma/client").Prisma.Prisma__ClientClient<{
        CUSTNMBR: string;
        proformas: {
            PRSTADCD: string;
            CURNCYID: string;
            CREATDDT: Date;
            SOPNUMBE: string;
            DOCDATE: Date;
            SUBTOTAL: import("@prisma/client/runtime/library").Decimal;
            ORSUBTOT: import("@prisma/client/runtime/library").Decimal;
            TAXAMNT: import("@prisma/client/runtime/library").Decimal;
            ORTAXAMT: import("@prisma/client/runtime/library").Decimal;
            DOCAMNT: import("@prisma/client/runtime/library").Decimal;
            ORDOCAMT: import("@prisma/client/runtime/library").Decimal;
            work_history: {
                USRDAT02: Date;
                USRDEF03: string;
                COMMENT_1: string;
            }[];
            sales_taxes_work_history: {
                TXDTLPCTAMT: import("@prisma/client/runtime/library").Decimal;
            }[];
            khistory: {
                SOPTYPE: number;
                SOPNUMBE: string;
                PRCHLDID: string;
                DELETE1: number;
                USERID: string;
                HOLDDATE: Date;
                TIME1: Date;
                TRXSORCE: string;
                DEX_ROW_ID: number;
            }[];
        }[];
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    clientInvoicesByRIF(CUSTNMBR: string): void;
    updateClient(updateClientInput: UpdateClientInput): string;
    removeClient(id: number): string;
    clientProformasFluent(CUSTNMBR: string): import(".prisma/client").Prisma.PrismaPromise<{
        CUSTNMBR: string;
    }[]>;
}
