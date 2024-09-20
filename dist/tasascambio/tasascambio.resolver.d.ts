import { TasascambioService } from './tasascambio.service';
import { UpdateTasacambioInput } from './dto/update-tasascambio.input';
export declare class TasascambioResolver {
    private readonly tasascambioService;
    constructor(tasascambioService: TasascambioService);
    findAll(): string;
    updateTasasCambio(updateTasasCambioInput: UpdateTasacambioInput): string;
    removeTasasCambio(id: number): string;
}
