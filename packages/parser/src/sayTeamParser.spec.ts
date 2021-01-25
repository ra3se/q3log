import { sayTeamParser } from "./sayTeamParser";
import { Q3Event } from "@q3log/types";

test("Not an sayTeam event", () => {
  expect(sayTeamParser("foo")).toBeUndefined();
});

test("A proper sayTeam event", () => {
  expect(
    sayTeamParser("sayteam: 0 1: FATPOOPZ: men det va da fan")
  ).toStrictEqual({
    arenaIndex: "1",
    message: "men det va da fan",
    player: "FATPOOPZ",
    playerIndex: "0",
    name: Q3Event.SAY_TEAM,
  });
});
