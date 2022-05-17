import { config } from "dotenv";
config({ path: "src/.env" });
import {
    collections,
    connectDB,
    getCompanyInfo,
    getCustomers,
    getInvoices,
} from "./utils";

(async () => {
    try {
        await connectDB();

        const res1 = await getCompanyInfo();

        if (res1.data && res1.data.CompanyInfo) {
            await collections.companyInfo?.insertOne(res1.data.CompanyInfo);

            console.log("Company Info Inserted");
        }

        const res2 = await getCustomers(1);
        if (res2.data && res2.data.QueryResponse.Customer) {
            await collections.customers?.insertMany(
                res2.data.QueryResponse.Customer
            );
            console.log("Customers Inserted to DB");
        }

        const res3 = await getInvoices(1);
        if (res3.data && res3.data.QueryResponse.Invoice) {
            await collections.invoices?.insertMany(
                res3.data.QueryResponse.Invoice
            );
            console.log("Invoices Inserted to DB");
        }
    } catch (error) {
        console.log("Error ", error);
    } finally {
    }
})();
