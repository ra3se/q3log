import { Q3Event, Q3LogInit } from "@q3log/types";
import parserFactory from "./util/parserFactory";
import extractDataString from "./util/extractDataString";

export const initParser = parserFactory<Q3LogInit>(
  Q3Event.INIT,
  new RegExp("^InitGame: \\\\(.+)"),
  ([dataString]: string[]): Q3LogInit => extractDataString(dataString)
);
