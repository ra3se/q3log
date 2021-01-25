import { killParser } from "./killParser";
import { Q3Module, Q3Event } from "@q3log/types";

test("Not an kill event", () => {
  expect(killParser("foo")).toBeUndefined();
});

test("A proper kill event", () => {
  expect(
    killParser("Kill: 2 1 10 2: fittoter killed ouch! by MOD_RAILGUN")
  ).toStrictEqual({
    name: Q3Event.KILL,
    arenaIndex: "2",
    attacker: "fittoter",
    attackerIndex: "2",
    attackerScore: 1,
    message: "^7ouch! ^7was railed by ^7fittoter",
    q3module: Q3Module.RAILGUN,
    modIndex: "10",
    target: "ouch!",
    targetIndex: "1",
    targetScore: 0,
  });
});

test("Suicide should result in a negative score", () => {
  expect(
    killParser("Kill: 2 2 10 2: fittoter killed fittoter by MOD_ROCKET_SPLASH")
  ).toStrictEqual({
    name: Q3Event.KILL,
    arenaIndex: "2",
    attacker: "fittoter",
    attackerIndex: "2",
    attackerScore: -1,
    message: "^7fittoter ^7blew itself up",
    q3module: Q3Module.ROCKET_SPLASH,
    modIndex: "10",
    target: "fittoter",
    targetIndex: "2",
    targetScore: 0,
  });
});

test("Killed by world", () => {
  expect(
    killParser("Kill: 0 2 10 2: <world> killed fittoter by MOD_WATER")
  ).toStrictEqual({
    name: Q3Event.KILL,
    arenaIndex: "2",
    attacker: "<world>",
    attackerIndex: "0",
    attackerScore: 0,
    message: "^7fittoter ^7sank like a rock",
    q3module: Q3Module.WATER,
    modIndex: "10",
    target: "fittoter",
    targetIndex: "2",
    targetScore: -1,
  });
});
