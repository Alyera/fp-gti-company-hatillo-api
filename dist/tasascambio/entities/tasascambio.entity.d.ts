import { Proforma } from 'src/proformas/entities/proforma.entity';
export declare class TasasCambio {
    EXGTBLID: string;
    CURNCYID: string;
    EXCHDATE: Date;
    TIME1: Date;
    XCHGRATE: number;
    EXPNDATE: Date;
    DEX_ROW_ID: number;
    proforma?: Proforma;
}
