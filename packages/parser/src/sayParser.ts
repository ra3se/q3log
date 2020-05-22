import { Q3Event, Q3LogSay } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const sayParser = parserFactory<Q3LogSay>(
  Q3Event.SAY,
  new RegExp("^say: (\\d+) (\\d+): ([^:]+): (.+)"),
  ([playerIndex, arenaIndex, player, message]: string[]): Q3LogSay => ({
    playerIndex,
    arenaIndex,
    player,
    message,
  })
);
