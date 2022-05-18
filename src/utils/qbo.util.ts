import axios from "axios";

const QBO_ACCESS_TOKEN = process.env.QBO_ACCESS_TOKEN;
const QBO_SANDBOX_URL = process.env.QBO_SANDBOX_URL;
const QBO_REALM_ID = process.env.QBO_REALM_ID;

const get = async (url: string) => {
    return await axios.get(QBO_SANDBOX_URL + url, {
        headers: {
            Authorization: `Bearer ${QBO_ACCESS_TOKEN}`,
        },
    });
};

export const getCompanyInfo = async () => {
    const company_info_url = `/v3/company/${QBO_REALM_ID}/companyinfo/${QBO_REALM_ID}`;
    return await get(company_info_url);
};

export const getCustomerCount = async () => {
    const customer_url = `/v3/company/${QBO_REALM_ID}/query?query=select count(*) from Customer`;
    return await get(customer_url);
};

export const getCustomers = async (patchStart: number, patchSize: number) => {
    console.log("Customer Patch:: Start: ", patchStart, "Size :", patchSize);

    const customer_url = `/v3/company/${QBO_REALM_ID}/query?query=select * from Customer startposition ${patchStart} maxresults ${patchSize}`;
    const result = await get(customer_url);
    console.log("Result : Customer: Start", patchStart);

    return result;
};

export const getCustomersNew = (patchStart: number, patchSize: number) => {
    console.log("getCustomersNew");

    return () => {
        return getCustomers(patchStart, patchSize);
    };
};

export const getInvoiceCount = async () => {
    const invoice_url = `/v3/company/${QBO_REALM_ID}/query?query=select count(*) from Invoice`;
    return await get(invoice_url);
};

export const getInvoices = async (patchStart: number, patchSize: number) => {
    console.log("Invoice Patch:: Start: ", patchStart, "Size :", patchSize);
    const invoice_url = `/v3/company/${QBO_REALM_ID}/query?query=select * from Invoice startposition ${patchStart} maxresults ${patchSize}`;
    const result = await get(invoice_url);
    console.log("Result : Invoices: Start", patchStart);
    return result;
};

export const getInvoicesNew = async (patchStart: number, patchSize: number) => {
    console.log("getInvoicesNew");

    return () => {
        return getInvoices(patchStart, patchSize);
    };
};
