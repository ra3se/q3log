import { Q3Event, Q3LogBroadcast, Q3LogEvent } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const broadcastParser = parserFactory(
  new RegExp('^broadcast: print "([^"]+)"'),
  ([message]: string[]): Q3LogBroadcast => ({
    name: Q3Event.BROADCAST,
    message: message.replace("\\n", ""),
  })
);

export const determineBroadcast = (event: Q3LogEvent): event is Q3LogBroadcast =>
  event.name === Q3Event.BROADCAST;
