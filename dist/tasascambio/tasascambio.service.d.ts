import { CreateTasascambioInput } from './dto/create-tasascambio.input';
import { UpdateTasacambioInput } from './dto/update-tasascambio.input';
export declare class TasascambioService {
    create(createTasascambioDto: CreateTasascambioInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTasascambioDto: UpdateTasacambioInput): string;
    remove(id: number): string;
}
