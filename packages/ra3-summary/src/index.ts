import parser from "@q3log/parser";
import { Q3Event } from "@q3log/types";
import SummaryCounter from "./SummaryCounter";

export default (): Function => {
  const counter = new SummaryCounter();

  return (line: string): string => {
    const event = parser(line);

    switch (event.name) {
      case Q3Event.INIT:
      case Q3Event.SHUTDOWN:
        return counter.summary();
      case Q3Event.ROUND:
        if (event.roundIndex === "22") {
          return counter.summary();
        } else if (event.roundIndex === "1") {
          counter.reset();
        }
        break;
      case Q3Event.CLIENT_CONNECT:
        counter.connect(event);
        break;
      case Q3Event.CLIENT_DISCONNECT:
        counter.disconnect(event);
        break;
      case Q3Event.CLIENT_USERINFO_CHANGED:
        counter.info(event);
        break;
      case Q3Event.KILL:
        counter.kill(event);
        break;
    }

    return line;
  };
};
