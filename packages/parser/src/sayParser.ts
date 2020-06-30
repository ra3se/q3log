import { Q3Event, Q3LogSay } from "@q3log/types"
import parserFactory from "./util/parserFactory"

export const sayParser = parserFactory(
  new RegExp("^say: (\\d+) (\\d+): ([^:]+): (.+)"),
  ([playerIndex, arenaIndex, player, message]: string[]): Q3LogSay => ({
    name: Q3Event.SAY,
    playerIndex,
    arenaIndex,
    player,
    message
  })
)
