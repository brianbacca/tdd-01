import { penHelper } from "../helpers/pen-model-helper";

export class Pen {
  constructor(public readonly pen: penHelper) {}

  write(): string {
    return this.pen.message;
  }
}
