export class Root {
    
    billNo: string;
    date: string;
    insured: Insured;
    sumInsured: number;
    stockInsured: string;
    interestInsured: string;
    situation: Situation;
    period: Period;
    premium: Premium;

    constructor(billNo: string, date: string, 
        insured: Insured, sumInsured: number, stockInsured: string, interestInsured: string, 
        situation: Situation, period: Period, premium: Premium) {
            
        this.billNo = billNo;
        this.date = date;
        this.insured = insured;
        this.sumInsured = sumInsured;
        this.stockInsured = stockInsured;
        this.interestInsured = interestInsured;
        this.situation = situation;
        this.period = period;
        this.premium = premium;
    }
}

export class Insured {
    name: string;
    policyholder: string;
    address: string;

    constructor(name: string, policyholder: string, address: string) {
        this.name = name;
        this.policyholder = policyholder;
        this.address = address;
    }
}

export class Situation {
    location: string;
    construction: string;
    usedAs: string;
    owner: string;

    constructor(location: string, construction: string, usedAs: string, owner: string) {
        this.location = location;
        this.construction = construction;
        this.usedAs = usedAs;
        this.owner = owner;
    }
}

export class Period {
    from: string;
    to: string;

    constructor(from: string, to: string) {
        this.from = from;
        this.to = to;
    }
}

export class Premium {
    rate: number;
    firePremium: number;
    vat: number;
    grossPremium: number;

    constructor(rate: number, firePremium: number, vat: number, grossPremium: number) {
        this.rate = rate;
        this.firePremium = firePremium;
        this.vat = vat;
        this.grossPremium = grossPremium;
    }
}


