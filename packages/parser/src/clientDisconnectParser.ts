import { Q3Event, Q3LogClientDisconnect } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const clientDisconnectParser = parserFactory<Q3LogClientDisconnect>(
  Q3Event.CLIENT_DISCONNECT,
  new RegExp("^ClientDisconnect: (\\d+)"),
  ([playerIndex]: string[]) => ({ playerIndex })
);
