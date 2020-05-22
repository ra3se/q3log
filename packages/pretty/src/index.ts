import { determineEvent } from "@q3log/parser";
import parser from "@q3log/parser";
import prettyPrint from "./prettyPrint";
import {
  Q3LogInit,
  Q3LogRound,
  Q3LogKill,
  Q3LogSay,
  Q3LogBroadcast,
  Q3LogTeamSay,
} from "@q3log/types";

export default (line: string): string => {
  const event = parser(line);

  if (determineEvent<Q3LogSay>(event)) {
    return prettyPrint("^7", event.player, "^7:^2 ", event.message);
  }

  if (determineEvent<Q3LogTeamSay>(event)) {
    return prettyPrint("^5", event.player, "^7:^2 ", event.message);
  }

  if (determineEvent<Q3LogRound>(event)) {
    return prettyPrint("^7", `Round ${event.roundIndex} of ${event.roundTotal}`);
  }

  if (determineEvent<Q3LogBroadcast>(event)) {
    return prettyPrint(event.message);
  }

  if (determineEvent<Q3LogInit>(event)) {
    return prettyPrint("^7", "Map changed to ", event.mapname);
  }

  if (determineEvent<Q3LogKill>(event)) {
    return prettyPrint(event.message);
  }

  return line;
};
