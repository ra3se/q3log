import { Q3Event, Q3LogBroadcast } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const broadcastParser = parserFactory<Q3LogBroadcast>(
  Q3Event.BROADCAST,
  new RegExp('^broadcast: print "([^"]+)"'),
  ([message]: string[]): Q3LogBroadcast => ({
    message: message.replace("\\n", ""),
  })
);
