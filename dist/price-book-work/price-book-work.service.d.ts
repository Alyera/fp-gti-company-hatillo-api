import { CreatePriceBookWorkInput } from './dto/create-price-book-work.input';
import { UpdatePriceBookWorkInput } from './dto/update-price-book-work.input';
export declare class PriceBookWorkService {
    create(createPriceBookWorkInput: CreatePriceBookWorkInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePriceBookWorkInput: UpdatePriceBookWorkInput): string;
    remove(id: number): string;
}
