import { ContractModel, ContractPrime } from "../models/contract-model";

describe("Class ContractModel", () => {
  it("Contract 12 month regular", () => {
    const contract = new ContractModel({
      id: "#001",
      date_init: new Date(2019),
      expirantion_date: new Date(2020),
      month: 12,
      monthlyCost: 500,
    });
    expect(contract.getId()).toBe("#001");
    expect(contract.getInit()).toEqual(new Date(2019));
    expect(contract.getExpirationDate()).toEqual(new Date(2020));
    expect(contract.getMoth()).toBe(12);
    expect(contract.getMonthlyCost()).toBe(500);
  });

  it("monthlyDescount contract Prime 24 moths", () => {
    const contractPrime = new ContractPrime({
      id: "#001",
      date_init: new Date(2019),
      expirantion_date: new Date(2021),
      month: 24,
      monthlyCost: 500,
    });

    expect(contractPrime.monthlyDiscount()).toBe(50);
    expect(contractPrime.getExpirationDate()).toEqual(new Date(2021));
    expect(contractPrime.getMoth()).toBe(24);
  });
});
