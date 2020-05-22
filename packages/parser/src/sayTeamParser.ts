import { Q3LogTeamSay } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const sayTeamParser = parserFactory<Q3LogTeamSay>(
  new RegExp("^sayteam: (\\d+) (\\d+): ([^:]+): (.+)"),
  ([playerIndex, arenaIndex, player, message]: string[]): Q3LogTeamSay => ({
    playerIndex,
    arenaIndex,
    player,
    message,
  })
);
