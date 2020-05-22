import { Q3LogClientDisconnect } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const clientDisconnectParser = parserFactory<Q3LogClientDisconnect>(
  new RegExp("^ClientDisconnect: (\\d+)"),
  ([playerIndex]: string[]) => ({ playerIndex })
);
