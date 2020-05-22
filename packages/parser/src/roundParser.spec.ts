import { roundParser } from "./roundParser";

test("Not an round event", () => {
  expect(roundParser("foo")).toBe(null);
});

test("A proper round event", () => {
  expect(roundParser("Running round 3 of 20")).toStrictEqual({
    roundIndex: "3",
    roundTotal: "20",
  });
});
