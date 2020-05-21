import { sayTeamParser } from "./sayTeamParser";
import { Q3Event } from "@q3log/types";

test("Not an sayTeam event", () => {
  expect(sayTeamParser("foo")).toBe(null);
});

test("A proper sayTeam event", () => {
  expect(
    sayTeamParser("sayteam: 0 1: FATPOOPZ: men det va da fan")
  ).toStrictEqual({
    data: {
      arenaIndex: "1",
      message: "men det va da fan",
      player: "FATPOOPZ",
      playerIndex: "0",
    },
    event: Q3Event.SAY_TEAM,
  });
});
