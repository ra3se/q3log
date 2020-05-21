import { Q3Event, Q3LogRound } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const roundParser = parserFactory<Q3LogRound>(
  Q3Event.ROUND,
  new RegExp("^Running round (\\d+) of (\\d+)"),
  ([roundIndex, roundTotal]: string[]): Q3LogRound => ({
    roundIndex,
    roundTotal,
  })
);
