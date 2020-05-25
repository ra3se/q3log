import { Q3Event, Q3LogClientConnect, Q3LogEvent } from "@q3log/types"
import parserFactory from "./util/parserFactory"

export const clientConnectParser = parserFactory(
  new RegExp("^ClientConnect: (\\d+) (.+) \\((.+)\\)"),
  ([playerIndex, player, ip]: string[]): Q3LogClientConnect => ({
    name: Q3Event.CLIENT_CONNECT,
    playerIndex,
    player,
    ip,
  })
)

export const determineClientConnect = (event: Q3LogEvent): event is Q3LogClientConnect =>
  event.name === Q3Event.CLIENT_CONNECT
