import parser, { determineEvent } from "@q3log/parser";
import {
  Q3LogInit,
  Q3LogRound,
  Q3LogShutdown,
  Q3LogKill,
  Q3LogClientUserInfo,
  Q3LogClientConnect,
  Q3LogClientDisconnect,
} from "@q3log/types";
import SummaryCounter from "./SummaryCounter";

export default (): Function => {
  const counter = new SummaryCounter();

  return (line: string): string => {
    const event = parser(line);

    const endRound: boolean =
      determineEvent<Q3LogRound>(event) && event.roundIndex === "22";

    const firstRound: boolean =
      determineEvent<Q3LogRound>(event) && event.roundIndex === "1";

    determineEvent<Q3LogKill>(event) && counter.kill(event);
    determineEvent<Q3LogClientUserInfo>(event) && counter.info(event);
    determineEvent<Q3LogClientDisconnect>(event) && counter.disconnect(event);
    determineEvent<Q3LogClientConnect>(event) && counter.connect(event);

    if (
      determineEvent<Q3LogShutdown>(event) ||
      determineEvent<Q3LogInit>(event) ||
      endRound
    ) {
      return `ra3summary: ${counter.summary()}`;
    }

    if (firstRound) {
      counter.reset();
    }

    return line;
  };
};
