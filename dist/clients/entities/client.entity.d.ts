import { Invoice } from 'src/invoices/entities/invoice.entity';
import { ClientsAccount } from 'src/clients-accounts/entities/clients-account.entity';
import { ClientsEmail } from 'src/clients-emails/entities/clients-email.entity';
import { Proforma } from 'src/proformas/entities/proforma.entity';
export declare class Client {
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
    CRLMTAMT: number;
    CRLMTPER: number;
    CRLMTPAM: number;
    CURNCYID: string;
    RATETPID: string;
    CUSTDISC: number;
    PRCLEVEL: string;
    MINPYTYP: number;
    MINPYDLR: number;
    MINPYPCT: number;
    FNCHATYP: number;
    FNCHPCNT: number;
    FINCHDLR: number;
    MXWOFTYP: number;
    MXWROFAM: number;
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
    NOTEINDX: number;
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
    SOPNUMBE: string;
    PAGE: number;
    accounts?: [ClientsAccount] | null;
    email: ClientsEmail | null;
    proformas?: Proforma[] | null;
    invoices?: [Invoice] | null;
}
