import { Q3Event, Q3LogClientUserInfo } from "@q3log/types";
import parserFactory from "./util/parserFactory";
import extractDataString from "./util/extractDataString";

export const clientUserInfoParser = parserFactory<Q3LogClientUserInfo>(
  Q3Event.CLIENT_USERINFO_CHANGED,
  new RegExp("^ClientUserinfoChanged: (\\d+) (.+)"),
  ([playerIndex, dataString]: string[]): Q3LogClientUserInfo => ({
    playerIndex,
    ...extractDataString(dataString),
  })
);
