import { Q3LogBroadcast } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const broadcastParser = parserFactory<Q3LogBroadcast>(
  new RegExp('^broadcast: print "([^"]+)"'),
  ([message]: string[]): Q3LogBroadcast => ({
    message: message.replace("\\n", ""),
  })
);
