import axios from "axios";
import { Collection, MongoClient } from "mongodb";

const QBO_ACCESS_TOKEN = process.env.QBO_ACCESS_TOKEN;

const get = async (url: string) => {
    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${QBO_ACCESS_TOKEN}`,
        },
    });
};

const SANDBOX_URL = "https://sandbox-quickbooks.api.intuit.com";

const realmId = "4620816365217536430";

export const getCompanyInfo = async () => {
    const company_info_url = `/v3/company/${realmId}/companyinfo/${realmId}`;
    const url = SANDBOX_URL + company_info_url;
    return await get(url);
};

export const getCustomers = async (count: number = 10) => {
    const customer_url = `/v3/company/${realmId}/query?query=select * from Customer startposition 1 maxresults ${count}`;
    const url = SANDBOX_URL + customer_url;
    return await get(url);
};

export const getInvoices = async (count: number = 10) => {
    const invoice_url = `/v3/company/${realmId}/query?query=select * from Invoice startposition 1 maxresults ${count}`;
    const url = SANDBOX_URL + invoice_url;
    return await get(url);
};

const MONGODB_URL = process.env.MONGODB_URL || "";

export const collections: {
    companyInfo?: Collection<any>;
    customers?: Collection<any>;
    invoices?: Collection<any>;
} = {};

export const connectDB = async () => {
    const client = new MongoClient(MONGODB_URL);

    await client.connect();

    const db = client.db("qbo");

    const companyInfoCollection = db.collection<any>("companyInfo");
    const customerCollection = db.collection<any>("customers");
    const invoicesCollection = db.collection<any>("invoices");

    collections.companyInfo = companyInfoCollection;
    collections.customers = customerCollection;
    collections.invoices = invoicesCollection;

    console.log("DB Connected");
};
