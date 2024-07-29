

export class BillModel {
    "id"!: string;
    "fire"!: number
    "rsd"!: number;
    "netPremium"!: number;
    "tax"!: number;
    "grossPremium"!: number;

    policies!: {
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