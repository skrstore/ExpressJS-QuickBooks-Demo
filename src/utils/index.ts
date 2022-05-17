import axios from "axios";

const QBO_ACCESS_TOKEN = process.env.QBO_ACCESS_TOKEN;
const QBO_SANDBOX_URL = process.env.QBO_SANDBOX_URL;
const QBO_REALM_ID = process.env.QBO_REALM_ID;

const get = async (url: string) => {
    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${QBO_ACCESS_TOKEN}`,
        },
    });
};

export const getCompanyInfo = async () => {
    const company_info_url = `/v3/company/${QBO_REALM_ID}/companyinfo/${QBO_REALM_ID}`;
    const url = QBO_SANDBOX_URL + company_info_url;
    return await get(url);
};

export const getCustomers = async (count: number = 10) => {
    const customer_url = `/v3/company/${QBO_REALM_ID}/query?query=select * from Customer startposition 1 maxresults ${count}`;
    const url = QBO_SANDBOX_URL + customer_url;
    return await get(url);
};

export const getInvoices = async (count: number = 10) => {
    const invoice_url = `/v3/company/${QBO_REALM_ID}/query?query=select * from Invoice startposition 1 maxresults ${count}`;
    const url = QBO_SANDBOX_URL + invoice_url;
    return await get(url);
};
