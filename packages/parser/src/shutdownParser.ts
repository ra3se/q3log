import { Q3Event, Q3LogShutdown } from "@q3log/types";
import parserFactory from "./util/parserFactory";

export const shutdownParser = parserFactory<Q3LogShutdown>(
  Q3Event.SHUTDOWN,
  new RegExp("^ShutdownGame:"),
  (): Q3LogShutdown => ({})
);
