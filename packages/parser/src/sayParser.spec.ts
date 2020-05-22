import { sayParser } from "./sayParser";
import { Q3Event } from "@q3log/types";

test("Not an say event", () => {
  expect(sayParser("foo")).toBe(null);
});

test("A proper say event", () => {
  expect(sayParser("say: 0 1: FATPOOPZ: men det va da fan")).toStrictEqual({
    data: {
      arenaIndex: "1",
      message: "men det va da fan",
      player: "FATPOOPZ",
      playerIndex: "0",
    },
    event: Q3Event.SAY,
  });
});
