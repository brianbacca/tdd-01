import { ITeam,ISoccerPlay } from "../interface/ITeam";

export class Team implements ITeam, ISoccerPlay {
  position(name: string, tShirt: number, skills: any[]) {
    return [name, tShirt, skills];
  }

  // attacker(name:string){
  //   return name
  // }

  attacker(name: string) {
    name = "attacker";
    return name;
  }
}
