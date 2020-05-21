import { Q3Event, Q3LogKill, Q3Gender, Q3World } from "@q3log/types";
import parserFactory from "./util/parserFactory";
import killMessage from "./util/killMessage";

export const killParser = parserFactory<Q3LogKill>(
  Q3Event.KILL,
  new RegExp(
    "^Kill: (\\d+) (\\d+) (\\d+) (\\d+): (.+) killed (.+) by ([A-Z_]+)"
  ),
  ([
    attackerIndex,
    targetIndex,
    modIndex,
    arenaIndex,
    attacker,
    target,
    mod,
  ]: string[]): Q3LogKill => ({
    arenaIndex,
    attacker,
    attackerIndex,
    attackerScore:
      attackerIndex === targetIndex ? -1 : attacker === Q3World ? 0 : 1,
    message: killMessage(
      attacker,
      attackerIndex,
      Q3Gender.NEUTER,
      mod,
      target,
      targetIndex
    ),
    mod,
    modIndex,
    target,
    targetIndex,
    targetScore: attacker === Q3World ? -1 : 0,
  })
);
