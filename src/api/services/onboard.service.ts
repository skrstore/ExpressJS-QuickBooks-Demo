import { AxiosError } from "axios";

import { collections } from "../../utils/mongodb.util";
import {
    getCompanyInfo,
    getCustomerCount,
    getCustomers,
    getInvoiceCount,
    getInvoices,
} from "../../utils/qbo.util";

export class OnboardService {
    constructor() {}

    async onboardBusiness(business: any) {
        try {
            console.log(`Onboarding Started : <${business}>`);

            // For Business info
            const res1 = await getCompanyInfo();
            if (res1.data && res1.data.CompanyInfo) {
                await collections.companyInfo?.insertOne(res1.data.CompanyInfo);

                console.log("Company Info Inserted");
            }
            const patchSize = 10;

            // For Customers
            const customerCountResponse = await getCustomerCount();
            const customerTotalCount =
                customerCountResponse.data.QueryResponse.totalCount;
            for (
                let patchStart = 1;
                patchStart <= customerTotalCount;
                patchStart += patchSize
            ) {
                console.log(
                    `Customer: PatchStart: ${patchStart} PatchSize: ${patchSize} Total: ${customerTotalCount}`
                );

                const res2 = await getCustomers(patchStart, patchSize);
                if (res2.data && res2.data.QueryResponse.Customer) {
                    await collections.customers?.insertMany(
                        res2.data.QueryResponse.Customer
                    );
                    console.log(
                        `Customers Inserted to DB PatchStart: ${res2.data.QueryResponse.Customer.length} `
                    );
                }
            }

            // For Invoices
            const invoiceCountResponse = await getInvoiceCount();
            const invoiceTotalCount =
                invoiceCountResponse.data.QueryResponse.totalCount;

            for (
                let patchStart = 1;
                patchStart <= invoiceTotalCount;
                patchStart += patchSize
            ) {
                console.log(
                    `Invoice: PatchStart: ${patchStart} PatchSize: ${patchSize} Total: ${invoiceTotalCount}`
                );

                const res3 = await getInvoices(patchStart, patchSize);
                if (res3.data && res3.data.QueryResponse.Invoice) {
                    await collections.invoices?.insertMany(
                        res3.data.QueryResponse.Invoice
                    );
                    console.log(
                        `Invoices Inserted to DB ${res3.data.QueryResponse.Invoice.length}`
                    );
                }
            }
            console.log(`Onboarding Completed : <${business}>`);
            return true;
        } catch (error: any) {
            if (
                error instanceof AxiosError &&
                error.code === "ERR_BAD_REQUEST"
            ) {
                console.log("Error: ", error.response?.statusText);
            } else {
                console.log("Error: ", error);
            }
        }
    }
}
