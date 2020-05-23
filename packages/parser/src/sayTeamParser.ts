import { Q3Event, Q3LogSayTeam } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const sayTeamParser = parserFactory(
  new RegExp("^sayteam: (\\d+) (\\d+): ([^:]+): (.+)"),
  ([playerIndex, arenaIndex, player, message]: string[]): Q3LogSayTeam => ({
    name: Q3Event.SAY_TEAM,
    playerIndex,
    arenaIndex,
    player,
    message,
  })
);
