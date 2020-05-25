import parser from "@q3log/parser"
import prettyPrint from "./prettyPrint"
import { Q3Event } from "@q3log/types"

export default (line: string): string => {
  const event = parser(line)

  switch (event.name) {
    case Q3Event.SAY:
      return prettyPrint("^7", event.player, "^7:^2 ", event.message)
    case Q3Event.SAY_TEAM:
      return prettyPrint("^5", event.player, "^7:^2 ", event.message)
    case Q3Event.ROUND:
      return prettyPrint(
        "^2",
        `Round ${event.roundIndex} of ${event.roundTotal}`
      )
    case Q3Event.BROADCAST:
      return prettyPrint(event.message)
    case Q3Event.INIT:
      if (event.data.mapname) {
        return prettyPrint("^7", "Map changed to ", event.data.mapname)
      }
      break
    case Q3Event.KILL:
      return prettyPrint(event.message)
    default:
      return line
  }

  return line
}
