import { Q3Event, Q3LogSay } from "@q3log/types";
import parserFactory from "./util/parserFactory";
import { sayEventCommon } from "./util/sayEventCommon";

export const sayParser = parserFactory(
  new RegExp("^say: (\\d+) (\\d+): ([^:]+): (.+)"),
  (data: string[]): Q3LogSay => ({
    name: Q3Event.SAY,
    ...sayEventCommon(data),
  })
);
