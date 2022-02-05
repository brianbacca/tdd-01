import { IContractor } from "../interface/IContract";

export class ContractModel {
  constructor(public contract: IContractor) {
    Object.assign(this, contract);
  }
  getId(): string {
    return this.contract.id;
  }
  getInit(): Date {
    return this.contract.date_init;
  }

  getExpirationDate(): Date {
    return this.contract.expirantion_date;
  }

  getMoth(): number {
    return this.contract.month;
  }
  getMonthlyCost(): number {
    return this.contract.monthlyCost;
  }
}

export class ContractPrime extends ContractModel {
  monthlyDiscount(): number {
    return this.contract.monthlyCost * 0.10
  }
}
