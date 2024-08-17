
export class ReceiptModel {
    "id"!: string;


    bill!: {
        "id": string | undefined;
        "fire": number | undefined;
        "rsd": number | undefined;
        "netPremium": number | undefined;
        "tax": number | undefined;
        "grossPremium": number | undefined;

        policies: {
            "id": string | undefined;
            "billNo": number | undefined;
            "date": Date | undefined;
            "bankName": string | undefined;
            "policyholder": string | undefined;
            "address": string | undefined;
            "stockInsured": string | undefined;
            "sumInsured": number | undefined;
            "interestInsured": string | undefined;
            "coverage": string | undefined;
            "location": string | undefined;
            "construction": string | undefined;
            "owner": string | undefined;
            "usedAs": string | undefined;
            "periodFrom": string | undefined;
            "periodTo": string | undefined;
        }
    }
}

