import { AddressType } from "./common.type";

export interface CustomerType {
    Taxable: true;
    BillAddr: AddressType;
    ShipAddr: AddressType;
    Job: false;
    BillWithParent: false;
    Balance: 239;
    BalanceWithJobs: 239;
    CurrencyRef: { value: "USD"; name: "United States Dollar" };
    PreferredDeliveryMethod: "Print";
    domain: "QBO";
    sparse: false;
    Id: "1";
    SyncToken: "0";
    MetaData: {
        CreateTime: "2022-04-13T16:48:43-07:00";
        LastUpdatedTime: "2022-04-20T13:39:32-07:00";
    };
    GivenName: "Amy";
    FamilyName: "Lauterbach";
    FullyQualifiedName: "Amy's Bird Sanctuary";
    CompanyName: "Amy's Bird Sanctuary";
    DisplayName: "Amy's Bird Sanctuary";
    PrintOnCheckName: "Amy's Bird Sanctuary";
    Active: true;
    PrimaryPhone: { FreeFormNumber: "(650) 555-3311" };
    PrimaryEmailAddr: { Address: "Birds@Intuit.com" };
}
