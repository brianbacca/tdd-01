import { penHelper } from "../helpers/pen-model-helper";
import { Pen } from "../models/pen-model";

describe("Pen", () => {
  test("write", () => {
    const pen = new Pen({
      message: "Hello World",
    });

    expect(pen.write()).toBe("Hello World");
  });

   it("Food Helper", () => {
     const pendHelper = new penHelper();

     expect(pendHelper).toEqual(pendHelper);
   });
});
