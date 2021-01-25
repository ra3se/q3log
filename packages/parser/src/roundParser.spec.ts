import { roundParser } from "./roundParser";
import { Q3Event } from "@q3log/types";

test("Not an round event", () => {
  expect(roundParser("foo")).toBeUndefined();
});

test("A proper round event", () => {
  expect(roundParser("Running round 3 of 20")).toStrictEqual({
    roundIndex: "3",
    roundTotal: "20",
    name: Q3Event.ROUND,
  });
});
