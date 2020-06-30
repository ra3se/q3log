import { Q3Event, Q3LogClientDisconnect, Q3LogEvent } from "@q3log/types"
import parserFactory from "./util/parserFactory"

export const clientDisconnectParser = parserFactory(
  new RegExp("^ClientDisconnect: (\\d+)"),
  ([playerIndex]: string[]): Q3LogClientDisconnect => ({
    name: Q3Event.CLIENT_DISCONNECT,
    playerIndex
  })
)

export const determineClientDisconnect = (
  event: Q3LogEvent
): event is Q3LogClientDisconnect => event.name === Q3Event.CLIENT_DISCONNECT
