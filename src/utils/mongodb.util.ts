import { Collection, MongoClient } from "mongodb";

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
};

