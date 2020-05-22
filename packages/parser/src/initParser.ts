import { Q3LogInit } from "@q3log/types";
import parserFactory from "./util/parserFactory";
import extractDataString from "./util/extractDataString";

export const initParser = parserFactory<Q3LogInit>(
  new RegExp("^InitGame: \\\\(.+)"),
  ([dataString]: string[]): Q3LogInit => {
    const data = extractDataString(dataString);
    return {
      mapname: data.mapname,
      ...data,
    }
  }
);
