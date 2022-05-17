import { AddressType } from "./common.type";

export interface InvoiceType {
    AllowIPNPayment: false;
    AllowOnlinePayment: false;
    AllowOnlineCreditCardPayment: false;
    AllowOnlineACHPayment: false;
    domain: "QBO";
    sparse: false;
    Id: "67";
    SyncToken: "2";
    MetaData: {
        CreateTime: "2022-04-20T12:40:06-07:00";
        LastUpdatedTime: "2022-04-20T13:39:32-07:00";
    };
    CustomField: [{ DefinitionId: "1"; Name: "Crew #"; Type: "StringType" }];
    DocNumber: "1021";
    TxnDate: "2022-03-30";
    CurrencyRef: { value: "USD"; name: "United States Dollar" };
    LinkedTxn: [{ TxnId: "101"; TxnType: "Payment" }];
    Line: [
        {
            Id: "1";
            LineNum: 1;
            Description: "2 cubic ft. bag";
            Amount: 150;
            DetailType: "SalesItemLineDetail";
            SalesItemLineDetail: {
                ItemRef: { value: "15"; name: "Soil" };
                UnitPrice: 10;
                Qty: 15;
                TaxCodeRef: { value: "TAX" };
            };
        },
        {
            Id: "2";
            LineNum: 2;
            Description: "Rock Fountain";
            Amount: 275;
            DetailType: "SalesItemLineDetail";
            SalesItemLineDetail: {
                ItemRef: { value: "5"; name: "Rock Fountain" };
                UnitPrice: 275;
                Qty: 1;
                TaxCodeRef: { value: "TAX" };
            };
        },
        {
            Amount: 425;
            DetailType: "SubTotalLineDetail";
            SubTotalLineDetail: {};
        }
    ];
    TxnTaxDetail: {
        TxnTaxCodeRef: { value: "2" };
        TotalTax: 34;
        TaxLine: [
            {
                Amount: 34;
                DetailType: "TaxLineDetail";
                TaxLineDetail: {
                    TaxRateRef: { value: "3" };
                    PercentBased: true;
                    TaxPercent: 8;
                    NetAmountTaxable: 425;
                };
            }
        ];
    };
    CustomerRef: { value: "1"; name: "Amy's Bird Sanctuary" };
    CustomerMemo: {
        value: "Thank you for your business and have a great day!";
    };
    BillAddr: AddressType;
    ShipAddr: AddressType;
    SalesTermRef: { value: "3"; name: "Net 30" };
    DueDate: "2022-04-29";
    TotalAmt: 459;
    ApplyTaxAfterDiscount: false;
    PrintStatus: "NotSet";
    EmailStatus: "NotSet";
    BillEmail: { Address: "Birds@Intuit.com" };
    Balance: 239;
}
