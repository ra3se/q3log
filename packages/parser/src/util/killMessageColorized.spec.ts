// Kill: 7 5 7 5: tores killed ^7O(^0EDVN^7)--o^4< by MOD_ROCKET_SPLASH

import killMessageColorized from "./killMessageColorized";
import { Q3Gender, Q3Mod } from "@q3log/types";

test("colorize and stringify kill message", () =>
  expect(
    killMessageColorized(
      "tores",
      "7",
      Q3Gender.NEUTER,
      Q3Mod.ROCKET_SPLASH,
      "^7O(^0EDVN^7)--o^4<",
      "5"
    )
  ).toBe("^7^7O(^0EDVN^7)--o^4< ^7almost dodged ^7tores^7's rocket"));
