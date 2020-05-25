import { Q3Event, Q3LogShutdown } from "@q3log/types"
import parserFactory from "./util/parserFactory"

export const shutdownParser = parserFactory(
  new RegExp("^ShutdownGame:"),
  (): Q3LogShutdown => ({ name: Q3Event.SHUTDOWN })
)
