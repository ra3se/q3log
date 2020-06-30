import { Q3Event, Q3LogClientUserInfo } from "@q3log/types"
import parserFactory from "./util/parserFactory"
import extractDataString from "./util/extractDataString"

export const clientUserInfoParser = parserFactory(
  new RegExp("^ClientUserinfoChanged: (\\d+) (.+)"),
  ([playerIndex, dataString]: string[]): Q3LogClientUserInfo => ({
    name: Q3Event.CLIENT_USERINFO_CHANGED,
    data: extractDataString(dataString),
    playerIndex
  })
)
