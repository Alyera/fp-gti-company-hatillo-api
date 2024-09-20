"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const clients_module_1 = require("./clients/clients.module");
const clients_emails_module_1 = require("./clients-emails/clients-emails.module");
const prisma_service_1 = require("./prisma/prisma.service");
const clients_accounts_module_1 = require("./clients-accounts/clients-accounts.module");
const proformas_module_1 = require("./proformas/proformas.module");
const invoices_module_1 = require("./invoices/invoices.module");
const proformas_details_module_1 = require("./proformas-details/proformas-details.module");
const invoice_details_module_1 = require("./invoice-details/invoice-details.module");
const rm_open_transactions_module_1 = require("./rm-open-transactions/rm-open-transactions.module");
const price_book_work_module_1 = require("./price-book-work/price-book-work.module");
const sales_tax_work_history_module_1 = require("./sales-tax-work-history/sales-tax-work-history.module");
const usr_defined_work_history_module_1 = require("./usr-defined-work-history/usr-defined-work-history.module");
const common_module_1 = require("./common/common.module");
const tasascambio_module_1 = require("./tasascambio/tasascambio.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            clients_module_1.ClientsModule,
            clients_emails_module_1.ClientsEmailsModule,
            clients_accounts_module_1.ClientsAccountsModule,
            proformas_module_1.ProformasModule,
            invoices_module_1.InvoicesModule,
            proformas_details_module_1.ProformasDetailsModule,
            invoice_details_module_1.InvoiceDetailsModule,
            rm_open_transactions_module_1.RmOpenTransactionsModule,
            price_book_work_module_1.PriceBookWorkModule,
            sales_tax_work_history_module_1.SalesTaxWorkHistoryModule,
            usr_defined_work_history_module_1.UsrDefinedWorkHistoryModule,
            common_module_1.CommonModule,
            tasascambio_module_1.TasascambioModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map