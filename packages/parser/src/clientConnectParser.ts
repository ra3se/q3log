import { Q3LogClientConnect } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const clientConnectParser = parserFactory<Q3LogClientConnect>(
  new RegExp("^ClientConnect: (\\d+) (.+) \\((.+)\\)"),
  ([playerIndex, player, ip]: string[]): Q3LogClientConnect => ({
    playerIndex,
    player,
    ip,
  })
);
