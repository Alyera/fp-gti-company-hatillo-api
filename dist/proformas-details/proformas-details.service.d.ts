/// <reference types="node" />
import { CreateProformasDetailInput } from './dto/create-proformas-detail.input';
import { UpdateProformasDetailInput } from './dto/update-proformas-detail.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProformasDetailsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProformasDetailInput: CreateProformasDetailInput): string;
    findAll(): Prisma.PrismaPromise<{
        SOPTYPE: number;
        SOPNUMBE: string;
        LNITMSEQ: number;
        CMPNTSEQ: number;
        ITEMNMBR: string;
        ITEMDESC: string;
        NONINVEN: number;
        DROPSHIP: number;
        UOFM: string;
        LOCNCODE: string;
        UNITCOST: Prisma.Decimal;
        ORUNTCST: Prisma.Decimal;
        UNITPRCE: Prisma.Decimal;
        ORUNTPRC: Prisma.Decimal;
        XTNDPRCE: Prisma.Decimal;
        OXTNDPRC: Prisma.Decimal;
        REMPRICE: Prisma.Decimal;
        OREPRICE: Prisma.Decimal;
        EXTDCOST: Prisma.Decimal;
        OREXTCST: Prisma.Decimal;
        MRKDNAMT: Prisma.Decimal;
        ORMRKDAM: Prisma.Decimal;
        MRKDNPCT: number;
        MRKDNTYP: number;
        INVINDX: number;
        CSLSINDX: number;
        SLSINDX: number;
        MKDNINDX: number;
        RTNSINDX: number;
        INUSINDX: number;
        INSRINDX: number;
        DMGDINDX: number;
        ITMTSHID: string;
        IVITMTXB: number;
        BKTSLSAM: Prisma.Decimal;
        ORBKTSLS: Prisma.Decimal;
        TAXAMNT: Prisma.Decimal;
        ORTAXAMT: Prisma.Decimal;
        TXBTXAMT: Prisma.Decimal;
        OTAXTAMT: Prisma.Decimal;
        BSIVCTTL: number;
        TRDISAMT: Prisma.Decimal;
        ORTDISAM: Prisma.Decimal;
        DISCSALE: Prisma.Decimal;
        ORDAVSLS: Prisma.Decimal;
        QUANTITY: Prisma.Decimal;
        ATYALLOC: Prisma.Decimal;
        QTYINSVC: Prisma.Decimal;
        QTYINUSE: Prisma.Decimal;
        QTYDMGED: Prisma.Decimal;
        QTYRTRND: Prisma.Decimal;
        QTYONHND: Prisma.Decimal;
        QTYCANCE: Prisma.Decimal;
        QTYCANOT: Prisma.Decimal;
        QTYONPO: Prisma.Decimal;
        QTYORDER: Prisma.Decimal;
        QTYPRBAC: Prisma.Decimal;
        QTYPRBOO: Prisma.Decimal;
        QTYPRINV: Prisma.Decimal;
        QTYPRORD: Prisma.Decimal;
        QTYPRVRECVD: Prisma.Decimal;
        QTYRECVD: Prisma.Decimal;
        QTYREMAI: Prisma.Decimal;
        QTYREMBO: Prisma.Decimal;
        QTYTBAOR: Prisma.Decimal;
        QTYTOINV: Prisma.Decimal;
        QTYTORDR: Prisma.Decimal;
        QTYFULFI: Prisma.Decimal;
        QTYSLCTD: Prisma.Decimal;
        QTYBSUOM: Prisma.Decimal;
        EXTQTYAL: Prisma.Decimal;
        EXTQTYSEL: Prisma.Decimal;
        ReqShipDate: Date;
        FUFILDAT: Date;
        ACTLSHIP: Date;
        SHIPMTHD: string;
        SALSTERR: string;
        SLPRSNID: string;
        PRCLEVEL: string;
        COMMNTID: string;
        BRKFLD1: number;
        BRKFLD2: number;
        BRKFLD3: number;
        CURRNIDX: number;
        TRXSORCE: string;
        SOPLNERR: Buffer;
        ORGSEQNM: number;
        ITEMCODE: string;
        PURCHSTAT: number;
        DECPLQTY: number;
        DECPLCUR: number;
        ODECPLCU: number;
        QTYTOSHP: Prisma.Decimal;
        XFRSHDOC: number;
        EXCEPTIONALDEMAND: number;
        TAXSCHID: string;
        TXSCHSRC: number;
        PRSTADCD: string;
        ShipToName: string;
        CNTCPRSN: string;
        ADDRESS1: string;
        ADDRESS2: string;
        ADDRESS3: string;
        CITY: string;
        STATE: string;
        ZIPCODE: string;
        CCode: string;
        COUNTRY: string;
        PHONE1: string;
        PHONE2: string;
        PHONE3: string;
        FAXNUMBR: string;
        Flags: number;
        BackoutTradeDisc: Prisma.Decimal;
        OrigBackoutTradeDisc: Prisma.Decimal;
        GPSFOINTEGRATIONID: string;
        INTEGRATIONSOURCE: number;
        INTEGRATIONID: string;
        CONTNBR: string;
        CONTLNSEQNBR: Prisma.Decimal;
        CONTSTARTDTE: Date;
        CONTENDDTE: Date;
        CONTITEMNBR: string;
        CONTSERIALNBR: string;
        BULKPICKPRNT: number;
        INDPICKPRNT: number;
        ISLINEINTRA: number;
        SOFULFILLMENTBIN: string;
        MULTIPLEBINS: number;
        Print_Phone_NumberGB: number;
        DEX_ROW_TS: Date;
        DEX_ROW_ID: number;
    }[]>;
    findOne(SOPNUMBE: string): Prisma.Prisma__ProformaDetailClient<{
        proformas: {
            work_history: {
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
            }[];
        } & {
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
            DISCFRGT: Prisma.Decimal;
            ORDAVFRT: Prisma.Decimal;
            DISCMISC: Prisma.Decimal;
            ORDAVMSC: Prisma.Decimal;
            DISAVAMT: Prisma.Decimal;
            ORDAVAMT: Prisma.Decimal;
            DISCRTND: Prisma.Decimal;
            ORDISRTD: Prisma.Decimal;
            DISTKNAM: Prisma.Decimal;
            ORDISTKN: Prisma.Decimal;
            DSCPCTAM: number;
            DSCDLRAM: Prisma.Decimal;
            ORDDLRAT: Prisma.Decimal;
            DISAVTKN: Prisma.Decimal;
            ORDATKN: Prisma.Decimal;
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
            MRKDNAMT: Prisma.Decimal;
            ORMRKDAM: Prisma.Decimal;
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
            COMMAMNT: Prisma.Decimal;
            OCOMMAMT: Prisma.Decimal;
            CMMSLAMT: Prisma.Decimal;
            ORCOSAMT: Prisma.Decimal;
            NCOMAMNT: Prisma.Decimal;
            ORNCMAMT: Prisma.Decimal;
            SHIPMTHD: string;
            TRDISAMT: Prisma.Decimal;
            ORTDISAM: Prisma.Decimal;
            TRDISPCT: number;
            SUBTOTAL: Prisma.Decimal;
            ORSUBTOT: Prisma.Decimal;
            REMSUBTO: Prisma.Decimal;
            OREMSUBT: Prisma.Decimal;
            EXTDCOST: Prisma.Decimal;
            OREXTCST: Prisma.Decimal;
            FRTAMNT: Prisma.Decimal;
            ORFRTAMT: Prisma.Decimal;
            MISCAMNT: Prisma.Decimal;
            ORMISCAMT: Prisma.Decimal;
            TXENGCLD: number;
            TAXEXMT1: string;
            TAXEXMT2: string;
            TXRGNNUM: string;
            TAXSCHID: string;
            TXSCHSRC: number;
            BSIVCTTL: number;
            FRTSCHID: string;
            FRTTXAMT: Prisma.Decimal;
            ORFRTTAX: Prisma.Decimal;
            FRGTTXBL: number;
            MSCSCHID: string;
            MSCTXAMT: Prisma.Decimal;
            ORMSCTAX: Prisma.Decimal;
            MISCTXBL: number;
            BKTFRTAM: Prisma.Decimal;
            ORBKTFRT: Prisma.Decimal;
            BKTMSCAM: Prisma.Decimal;
            ORBKTMSC: Prisma.Decimal;
            BCKTXAMT: Prisma.Decimal;
            OBTAXAMT: Prisma.Decimal;
            TXBTXAMT: Prisma.Decimal;
            OTAXTAMT: Prisma.Decimal;
            TAXAMNT: Prisma.Decimal;
            ORTAXAMT: Prisma.Decimal;
            ECTRX: number;
            DOCAMNT: Prisma.Decimal;
            ORDOCAMT: Prisma.Decimal;
            PYMTRCVD: Prisma.Decimal;
            ORPMTRVD: Prisma.Decimal;
            DEPRECVD: Prisma.Decimal;
            ORDEPRVD: Prisma.Decimal;
            CODAMNT: Prisma.Decimal;
            ORCODAMT: Prisma.Decimal;
            ACCTAMNT: Prisma.Decimal;
            ORACTAMT: Prisma.Decimal;
            SALSTERR: string;
            SLPRSNID: string;
            UPSZONE: string;
            TIMESPRT: number;
            PSTGSTUS: number;
            VOIDSTTS: number;
            ALLOCABY: number;
            NOTEINDX: Prisma.Decimal;
            CURNCYID: string;
            CURRNIDX: number;
            RATETPID: string;
            EXGTBLID: string;
            XCHGRATE: Prisma.Decimal;
            DENXRATE: Prisma.Decimal;
            EXCHDATE: Date;
            TIME1: Date;
            RTCLCMTD: number;
            MCTRXSTT: number;
            TRXSORCE: string;
            SOPHDRE1: Buffer;
            SOPHDRE2: Buffer;
            SOPLNERR: Buffer;
            SOPHDRFL: Buffer;
            SOPMCERR: Buffer;
            COMMNTID: string;
            REFRENCE: string;
            POSTEDDT: Date;
            PTDUSRID: string;
            USER2ENT: string;
            CREATDDT: Date;
            MODIFDT: Date;
            Tax_Date: Date;
            APLYWITH: number;
            WITHHAMT: Prisma.Decimal;
            SHPPGDOC: number;
            CORRCTN: number;
            SIMPLIFD: number;
            CORRNXST: number;
            DOCNCORR: string;
            SEQNCORR: number;
            SALEDATE: Date;
            SOPHDRE3: Buffer;
            EXCEPTIONALDEMAND: number;
            Flags: number;
            BackoutTradeDisc: Prisma.Decimal;
            OrigBackoutTradeDisc: Prisma.Decimal;
            GPSFOINTEGRATIONID: string;
            INTEGRATIONSOURCE: number;
            INTEGRATIONID: string;
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
        };
    } & {
        SOPTYPE: number;
        SOPNUMBE: string;
        LNITMSEQ: number;
        CMPNTSEQ: number;
        ITEMNMBR: string;
        ITEMDESC: string;
        NONINVEN: number;
        DROPSHIP: number;
        UOFM: string;
        LOCNCODE: string;
        UNITCOST: Prisma.Decimal;
        ORUNTCST: Prisma.Decimal;
        UNITPRCE: Prisma.Decimal;
        ORUNTPRC: Prisma.Decimal;
        XTNDPRCE: Prisma.Decimal;
        OXTNDPRC: Prisma.Decimal;
        REMPRICE: Prisma.Decimal;
        OREPRICE: Prisma.Decimal;
        EXTDCOST: Prisma.Decimal;
        OREXTCST: Prisma.Decimal;
        MRKDNAMT: Prisma.Decimal;
        ORMRKDAM: Prisma.Decimal;
        MRKDNPCT: number;
        MRKDNTYP: number;
        INVINDX: number;
        CSLSINDX: number;
        SLSINDX: number;
        MKDNINDX: number;
        RTNSINDX: number;
        INUSINDX: number;
        INSRINDX: number;
        DMGDINDX: number;
        ITMTSHID: string;
        IVITMTXB: number;
        BKTSLSAM: Prisma.Decimal;
        ORBKTSLS: Prisma.Decimal;
        TAXAMNT: Prisma.Decimal;
        ORTAXAMT: Prisma.Decimal;
        TXBTXAMT: Prisma.Decimal;
        OTAXTAMT: Prisma.Decimal;
        BSIVCTTL: number;
        TRDISAMT: Prisma.Decimal;
        ORTDISAM: Prisma.Decimal;
        DISCSALE: Prisma.Decimal;
        ORDAVSLS: Prisma.Decimal;
        QUANTITY: Prisma.Decimal;
        ATYALLOC: Prisma.Decimal;
        QTYINSVC: Prisma.Decimal;
        QTYINUSE: Prisma.Decimal;
        QTYDMGED: Prisma.Decimal;
        QTYRTRND: Prisma.Decimal;
        QTYONHND: Prisma.Decimal;
        QTYCANCE: Prisma.Decimal;
        QTYCANOT: Prisma.Decimal;
        QTYONPO: Prisma.Decimal;
        QTYORDER: Prisma.Decimal;
        QTYPRBAC: Prisma.Decimal;
        QTYPRBOO: Prisma.Decimal;
        QTYPRINV: Prisma.Decimal;
        QTYPRORD: Prisma.Decimal;
        QTYPRVRECVD: Prisma.Decimal;
        QTYRECVD: Prisma.Decimal;
        QTYREMAI: Prisma.Decimal;
        QTYREMBO: Prisma.Decimal;
        QTYTBAOR: Prisma.Decimal;
        QTYTOINV: Prisma.Decimal;
        QTYTORDR: Prisma.Decimal;
        QTYFULFI: Prisma.Decimal;
        QTYSLCTD: Prisma.Decimal;
        QTYBSUOM: Prisma.Decimal;
        EXTQTYAL: Prisma.Decimal;
        EXTQTYSEL: Prisma.Decimal;
        ReqShipDate: Date;
        FUFILDAT: Date;
        ACTLSHIP: Date;
        SHIPMTHD: string;
        SALSTERR: string;
        SLPRSNID: string;
        PRCLEVEL: string;
        COMMNTID: string;
        BRKFLD1: number;
        BRKFLD2: number;
        BRKFLD3: number;
        CURRNIDX: number;
        TRXSORCE: string;
        SOPLNERR: Buffer;
        ORGSEQNM: number;
        ITEMCODE: string;
        PURCHSTAT: number;
        DECPLQTY: number;
        DECPLCUR: number;
        ODECPLCU: number;
        QTYTOSHP: Prisma.Decimal;
        XFRSHDOC: number;
        EXCEPTIONALDEMAND: number;
        TAXSCHID: string;
        TXSCHSRC: number;
        PRSTADCD: string;
        ShipToName: string;
        CNTCPRSN: string;
        ADDRESS1: string;
        ADDRESS2: string;
        ADDRESS3: string;
        CITY: string;
        STATE: string;
        ZIPCODE: string;
        CCode: string;
        COUNTRY: string;
        PHONE1: string;
        PHONE2: string;
        PHONE3: string;
        FAXNUMBR: string;
        Flags: number;
        BackoutTradeDisc: Prisma.Decimal;
        OrigBackoutTradeDisc: Prisma.Decimal;
        GPSFOINTEGRATIONID: string;
        INTEGRATIONSOURCE: number;
        INTEGRATIONID: string;
        CONTNBR: string;
        CONTLNSEQNBR: Prisma.Decimal;
        CONTSTARTDTE: Date;
        CONTENDDTE: Date;
        CONTITEMNBR: string;
        CONTSERIALNBR: string;
        BULKPICKPRNT: number;
        INDPICKPRNT: number;
        ISLINEINTRA: number;
        SOFULFILLMENTBIN: string;
        MULTIPLEBINS: number;
        Print_Phone_NumberGB: number;
        DEX_ROW_TS: Date;
        DEX_ROW_ID: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProformasDetailInput: UpdateProformasDetailInput): string;
    remove(id: number): string;
}
