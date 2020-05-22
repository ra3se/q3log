import { Q3Event, Q3LogSay } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const sayTeamParser = parserFactory<Q3LogSay>(
  Q3Event.SAY_TEAM,
  new RegExp("^sayteam: (\\d+) (\\d+): ([^:]+): (.+)"),
  ([playerIndex, arenaIndex, player, message]: string[]): Q3LogSay => ({
    playerIndex,
    arenaIndex,
    player,
    message,
  })
);
