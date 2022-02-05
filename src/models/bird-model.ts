import { IBird } from "../interface/IBird";

export class Bird {
  constructor(public ibird: IBird) {
    Object.assign(this, ibird);
  }

  getBird(){
    return Object.assign(this, this.ibird);
  }

  fly(): any {
    return this.ibird.name;
  }
}

export class Eagle extends Bird{
  fly(){
    return this.ibird.name
  }

}
export class Penguin extends Bird{
  fly(){
    return new Error("I cant fly")
  }

  walk(){
    return 'I can walk'
  }
  swim(){
    return "I can swim"
  }
}