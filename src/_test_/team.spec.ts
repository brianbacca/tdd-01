import { Team } from "../models/team-module";

describe("Team class", () => {
  it("Position", () => {
    const team = new Team();
    const position = {
      name: "goalkeeper",
      tShirt: 1,
      skills: ["kick hard", "run fast", "jump high"],
    };

    expect(
      team.position(position.name, position.tShirt, position.skills)
    ).toEqual(["goalkeeper", 1, ["kick hard", "run fast", "jump high"]]);
  });
    it("Position ", () => {
      const team = new Team();
      const position = {
        name: "Center MidField",
        tShirt: 2,
        skills: ["Kick hard", "Run fast"],
      };

      expect(
        team.position(position.name, position.tShirt, position.skills)
      ).toEqual(["Center MidField", 2, ["Kick hard", "Run fast"]]);
    });
  // it("Soccer Play", () => {
  //   const soccerPlay = new Team();
  //   const attacker = {
  //     name: "pedrin",
  //   };
  //   expect(soccerPlay.attacker(attacker.name)).toEqual("pedrin");
  // });

  it("Soccer Play", () => {
    const soccerPlay = new Team();
    expect(soccerPlay.attacker("")).toBe("attacker");
  });
});
