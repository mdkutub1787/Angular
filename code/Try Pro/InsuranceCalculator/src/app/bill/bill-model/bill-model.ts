

export class BillModel {

    fire!: number;
    rsd!: number;
    netpremium!: number;
    tax!: number;
    grosspremium!: number;

    policies!: {
        id: number;
        policyNumber: number | undefined;
        bankName: string | undefined;
        branchName: string | undefined;
        shopName: string | undefined;
        proprietorName: string | undefined;
        address: string | undefined;
        sumInsured: number | undefined

    }


}