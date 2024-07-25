
export class BillModel {

    fire!: number;
    rsd!: number;
    netpremium!: number;
    tax!: number;
    grosspremium!: number;

    policies!: {
        id: number;
        policyNumber: number;
        bankName: string;
        branchName: string;
        shopName: string;
        proprietorName: string;
        address: string;
        sumInsured: number;
    }
}