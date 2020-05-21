import { Q3Event, Q3LogClientConnect } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const clientConnectParser = parserFactory<Q3LogClientConnect>(
  Q3Event.CLIENT_CONNECT,
  new RegExp("^ClientConnect: (\\d+) (.+) \\((.+)\\)"),
  ([playerIndex, player, ip]: string[]): Q3LogClientConnect => ({
    playerIndex,
    player,
    ip,
  })
);
