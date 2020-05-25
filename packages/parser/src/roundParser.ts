import { Q3Event, Q3LogRound } from "@q3log/types"
import parserFactory from "./util/parserFactory"

export const roundParser = parserFactory(
  new RegExp("^Running round (\\d+) of (\\d+)"),
  ([roundIndex, roundTotal]: string[]): Q3LogRound => ({
    name: Q3Event.ROUND,
    roundIndex,
    roundTotal,
  })
)
