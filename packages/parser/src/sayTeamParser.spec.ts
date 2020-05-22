import { sayTeamParser } from "./sayTeamParser";

test("Not an sayTeam event", () => {
  expect(sayTeamParser("foo")).toBe(null);
});

test("A proper sayTeam event", () => {
  expect(
    sayTeamParser("sayteam: 0 1: FATPOOPZ: men det va da fan")
  ).toStrictEqual({
    arenaIndex: "1",
    message: "men det va da fan",
    player: "FATPOOPZ",
    playerIndex: "0",
  });
});
