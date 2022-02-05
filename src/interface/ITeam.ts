export interface ISoccerPlay {
  attacker: (name: string) => void;
}

export interface ITeam {
  position: (name: string, tShirt: number, skils: any[]) => void;
}
