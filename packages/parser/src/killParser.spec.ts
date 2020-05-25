import { killParser } from "./killParser"
import { Q3Mod, Q3Event } from "@q3log/types"

test("Not an kill event", () => {
  expect(killParser("foo")).toBe(null)
})

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
    mod: Q3Mod.RAILGUN,
    modIndex: "10",
    target: "ouch!",
    targetIndex: "1",
    targetScore: 0,
  })
})
