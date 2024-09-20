"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceBookWorkService = void 0;
const common_1 = require("@nestjs/common");
let PriceBookWorkService = class PriceBookWorkService {
    create(createPriceBookWorkInput) {
        return 'This action adds a new priceBookWork';
    }
    findAll() {
        return `This action returns all priceBookWork`;
    }
    findOne(id) {
        return `This action returns a #${id} priceBookWork`;
    }
    update(id, updatePriceBookWorkInput) {
        return `This action updates a #${id} priceBookWork`;
    }
    remove(id) {
        return `This action removes a #${id} priceBookWork`;
    }
};
exports.PriceBookWorkService = PriceBookWorkService;
exports.PriceBookWorkService = PriceBookWorkService = __decorate([
    (0, common_1.Injectable)()
], PriceBookWorkService);
//# sourceMappingURL=price-book-work.service.js.map