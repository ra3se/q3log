// Kill: 7 5 7 5: tores killed ^7O(^0EDVN^7)--o^4< by MOD_ROCKET_SPLASH

import killMessage from "./killMessage"
import { Q3Gender, Q3Module } from "@q3log/types"

describe("killMessage()", () => {
  test("colorize and stringify kill message", () => {
    return expect(
      killMessage({
        attacker: "tores",
        attackerIndex: "7",
        gender: Q3Gender.NEUTER,
        q3module: Q3Module.ROCKET_SPLASH,
        target: "^7O(^0EDVN^7)--o^4<",
        targetIndex: "5"
      })
    ).toBe("^7^7O(^0EDVN^7)--o^4< ^7almost dodged ^7tores^7's rocket")
  })
})

