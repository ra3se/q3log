import { broadcastParser, determineBroadcast } from "./broadcastParser";
import { Q3Event } from "@q3log/types";

test("Not an broadcast event", () => {
  expect(broadcastParser("foo")).toBe(null);
});

test("A proper broadcast event", () => {
  expect(
    broadcastParser('broadcast: print "Team 1\'s name reset to Red Team.\\n"')
  ).toStrictEqual({
    message: "Team 1's name reset to Red Team.",
    name: Q3Event.BROADCAST,
  });
});

test("Determine event is a broadcast one", () => {
  expect(determineBroadcast({
    message: "Team 1's name reset to Red Team.",
    name: Q3Event.BROADCAST,
  })).toBe(true);
});

test("Determine event is not a broadcast one", () => {
  expect(
    determineBroadcast({
      name: Q3Event.INIT,
      data: {}
    })
  ).toBe(false);
});
