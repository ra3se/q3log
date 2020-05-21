import parser from "@q3log/parser";
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

const determineClientConnect = (data: any): data is Q3LogClientConnect => true;
const determineClientDisconnect = (data: any): data is Q3LogClientDisconnect => true;
const determineClientUserInfo = (data: any): data is Q3LogClientUserInfo => true;
const determineInit = (data: any): data is Q3LogInit => true;
const determineKill = (data: any): data is Q3LogKill => true;
const determineRound = (data: any): data is Q3LogRound => true;
const determineShutdown = (data: any): data is Q3LogShutdown => true;

export default (): Function => {
  const counter = new SummaryCounter();

  return (line: string): string => {
    const event = parser(line);

    const endRound: boolean =
      determineRound(event.data) && event.data.roundIndex === "22";

    const firstRound: boolean =
      determineRound(event.data) && event.data.roundIndex === "1";

    // determineClientConnect(event.data) && counter.connect(event.data);
    // determineClientDisconnect(event.data) && counter.disconnect(event.data);
    // determineClientUserInfo(event.data) && counter.info(event.data);
    // determineKill(event.data) && counter.kill(event.data);

    if (
      determineShutdown(event.data) ||
      determineInit(event.data) ||
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
