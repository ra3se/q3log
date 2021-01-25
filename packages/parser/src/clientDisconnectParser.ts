import { Q3Event, Q3LogClientDisconnect } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const clientDisconnectParser = parserFactory(
  new RegExp("^ClientDisconnect: (\\d+)"),
  ([playerIndex]: string[]): Q3LogClientDisconnect => ({
    name: Q3Event.CLIENT_DISCONNECT,
    playerIndex,
  })
);
