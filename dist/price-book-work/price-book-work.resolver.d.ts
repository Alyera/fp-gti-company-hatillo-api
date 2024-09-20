import { PriceBookWorkService } from './price-book-work.service';
import { CreatePriceBookWorkInput } from './dto/create-price-book-work.input';
import { UpdatePriceBookWorkInput } from './dto/update-price-book-work.input';
export declare class PriceBookWorkResolver {
    private readonly priceBookWorkService;
    constructor(priceBookWorkService: PriceBookWorkService);
    createPriceBookWork(createPriceBookWorkInput: CreatePriceBookWorkInput): string;
    findAll(): string;
    findOne(id: number): string;
    updatePriceBookWork(updatePriceBookWorkInput: UpdatePriceBookWorkInput): string;
    removePriceBookWork(id: number): string;
}
