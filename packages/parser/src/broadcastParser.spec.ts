import { broadcastParser } from "./broadcastParser";

test("Not an broadcast event", () => {
  expect(broadcastParser("foo")).toBe(null);
});

test("A proper broadcast event", () => {
  expect(
    broadcastParser('broadcast: print "Team 1\'s name reset to Red Team.\\n"')
  ).toStrictEqual({
    message: "Team 1's name reset to Red Team.",
  });
});
