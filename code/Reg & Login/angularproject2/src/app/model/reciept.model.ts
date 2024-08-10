
export class ReceiptModel {
    "id"!: string;
    "totalPremium"!: number;

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
            "sumInsured": number | undefined;
            "stockInsured": string | undefined;
            "interestInsured": string | undefined;
            "usedAs": string | undefined;
        }
    }
}

