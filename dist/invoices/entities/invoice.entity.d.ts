/// <reference types="node" />
import { Client } from 'src/clients/entities/client.entity';
import { InvoiceDetail } from 'src/invoice-details/entities/invoice-detail.entity';
import { RmOpenTransaction } from 'src/rm-open-transactions/entities/rm-open-transaction.entity';
import { SalesTaxesWorkHistory } from 'src/sales-tax-work-history/entities/sales-tax-work-history.entity';
export declare class Invoice {
    SOPTYPE: number;
    SOPNUMBE: string;
    ORIGTYPE: number;
    ORIGNUMB: string;
    DOCID: string;
    DOCDATE: Date;
    GLPOSTDT: Date;
    QUOTEDAT: Date;
    QUOEXPDA: Date;
    ORDRDATE: Date;
    INVODATE: Date;
    BACKDATE: Date;
    RETUDATE: Date;
    ReqShipDate: Date;
    FUFILDAT: Date;
    ACTLSHIP: Date;
    DISCDATE: Date;
    DUEDATE: Date;
    REPTING: number;
    TRXFREQU: number;
    TIMEREPD: number;
    TIMETREP: number;
    DYSTINCR: number;
    DTLSTREP: Date;
    DSTBTCH1: string;
    DSTBTCH2: string;
    USDOCID1: string;
    USDOCID2: string;
    DISCFRGT: number;
    ORDAVFRT: number;
    DISCMISC: number;
    ORDAVMSC: number;
    DISAVAMT: number;
    ORDAVAMT: number;
    DISCRTND: number;
    ORDISRTD: number;
    DISTKNAM: number;
    ORDISTKN: number;
    DSCPCTAM: number;
    DSCDLRAM: number;
    ORDDLRAT: number;
    DISAVTKN: number;
    ORDATKN: number;
    PYMTRMID: string;
    PRCLEVEL: string;
    LOCNCODE: string;
    BCHSOURC: string;
    BACHNUMB: string;
    CUSTNMBR: string;
    CUSTNAME: string;
    CSTPONBR: string;
    PROSPECT: number;
    MSTRNUMB: number;
    PCKSLPNO: string;
    PICTICNU: string;
    MRKDNAMT: number;
    ORMRKDAM: number;
    PRBTADCD: string;
    PRSTADCD: string;
    CNTCPRSN: string;
    ShipToName: string;
    ADDRESS1: string;
    ADDRESS2: string;
    ADDRESS3: string;
    CITY: string;
    STATE: string;
    ZIPCODE: string;
    CCode: string;
    COUNTRY: string;
    PHNUMBR1: string;
    PHNUMBR2: string;
    PHONE3: string;
    FAXNUMBR: string;
    COMAPPTO: number;
    COMMAMNT: number;
    OCOMMAMT: number;
    CMMSLAMT: number;
    ORCOSAMT: number;
    NCOMAMNT: number;
    ORNCMAMT: number;
    SHIPMTHD: string;
    TRDISAMT: number;
    ORTDISAM: number;
    TRDISPCT: number;
    SUBTOTAL: number;
    ORSUBTOT: number;
    REMSUBTO: number;
    OREMSUBT: number;
    EXTDCOST: number;
    OREXTCST: number;
    FRTAMNT: number;
    ORFRTAMT: number;
    MISCAMNT: number;
    ORMISCAMT: number;
    TXENGCLD: number;
    TAXEXMT1: string;
    TAXEXMT2: string;
    TXRGNNUM: string;
    TAXSCHID: string;
    TXSCHSRC: number;
    BSIVCTTL: number;
    FRTSCHID: string;
    FRTTXAMT: number;
    ORFRTTAX: number;
    FRGTTXBL: number;
    MSCSCHID: string;
    MSCTXAMT: number;
    ORMSCTAX: number;
    MISCTXBL: number;
    BKTFRTAM: number;
    ORBKTFRT: number;
    BKTMSCAM: number;
    ORBKTMSC: number;
    BCKTXAMT: number;
    OBTAXAMT: number;
    TXBTXAMT: number;
    OTAXTAMT: number;
    TAXAMNT: number;
    ORTAXAMT: number;
    ECTRX: number;
    DOCAMNT: number;
    ORDOCAMT: number;
    PYMTRCVD: number;
    ORPMTRVD: number;
    DEPRECVD: number;
    ORDEPRVD: number;
    CODAMNT: number;
    ORCODAMT: number;
    ACCTAMNT: number;
    ORACTAMT: number;
    SALSTERR: string;
    SLPRSNID: string;
    UPSZONE: string;
    TIMESPRT: number;
    PSTGSTUS: number;
    VOIDSTTS: number;
    ALLOCABY: number;
    NOTEINDX: number;
    CURNCYID: string;
    CURRNIDX: number;
    RATETPID: string;
    EXGTBLID: string;
    XCHGRATE: number;
    DENXRATE: number;
    EXCHDATE: Date;
    TIME1: Date;
    RTCLCMTD: number;
    MCTRXSTT: number;
    TRXSORCE: string;
    SOPHDRE1: Buffer;
    SOPHDRE2: Buffer;
    SOPLNERR: Buffer;
    SOPHDRFL: Buffer;
    COMMNTID: string;
    REFRENCE: string;
    POSTEDDT: Date;
    PTDUSRID: string;
    USER2ENT: string;
    CREATDDT: Date;
    MODIFDT: Date;
    Tax_Date: Date;
    APLYWITH: number;
    WITHHAMT: number;
    SHPPGDOC: number;
    CORRCTN: number;
    SIMPLIFD: number;
    DOCNCORR: string;
    SEQNCORR: number;
    SALEDATE: Date;
    EXCEPTIONALDEMAND: number;
    Flags: number;
    SOPSTATUS: number;
    SHIPCOMPLETE: number;
    DIRECTDEBIT: number;
    WorkflowApprStatCreditLm: number;
    WorkflowPriorityCreditLm: number;
    WorkflowApprStatusQuote: number;
    WorkflowPriorityQuote: number;
    Workflow_Status: number;
    ContractExchangeRateStat: number;
    Print_Phone_NumberGB: number;
    DEX_ROW_TS: Date;
    DEX_ROW_ID: number;
    client?: Client | null;
    details?: InvoiceDetail[];
    rm_open_transactions?: RmOpenTransaction[] | null;
    sale_tax_work_history?: SalesTaxesWorkHistory[] | null;
}
