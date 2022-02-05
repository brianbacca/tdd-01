import { Bird, Eagle, Penguin } from "../models/bird-model";

describe("Bird", () => {
  it("should Fly", () => {
    const bird = new Bird({
      name: "Eagle",
      age: 21,
      origien: "North American",
    });

    expect(bird.fly()).toEqual("Eagle");
  });

  it("should Fly", () => {
    const eagle = new Eagle({
      name: "Eagle",
      age: 21,
      origien: "North American",
    });

    expect(eagle.fly()).toEqual("Eagle");
  });
  it("shouldt'n  Fly but can swim and walk", () => {
    const peguin = new Penguin({
      name: "peguin",
      age: 11,
      origien: "Antartida",
    });

    expect(peguin.getBird()).toEqual(peguin);
    expect(peguin.fly()).toEqual(new Error("I cant fly"));
    expect(peguin.swim()).toBe("I can swim");
    expect(peguin.walk()).toBe("I can walk");
  });
});
