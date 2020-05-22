import {
  Q3Event,
  Q3LogEvent,
  Q3LogSay,
  Q3LogInit,
  Q3LogShutdown,
  Q3LogClientConnect,
  Q3LogClientDisconnect,
  Q3LogClientUserInfo,
  Q3LogRound,
  Q3LogKill,
  Q3LogBroadcast,
} from "@q3log/types";

import { broadcastParser } from "./broadcastParser";
import { clientConnectParser } from "./clientConnectParser";
import { clientDisconnectParser } from "./clientDisconnectParser";
import { clientUserInfoParser } from "./clientUserInfoParser";
import { initParser } from "./initParser";
import { killParser } from "./killParser";
import { roundParser } from "./roundParser";
import { sayParser } from "./sayParser";
import { sayTeamParser } from "./sayTeamParser";
import { shutdownParser } from "./shutdownParser";

export { broadcastParser };
export { clientConnectParser };
export { clientDisconnectParser };
export { clientUserInfoParser };
export { initParser };
export { killParser };
export { roundParser };
export { sayParser };
export { sayTeamParser };
export { shutdownParser };

export default (
  line: string
): Q3LogEvent<
  | Q3LogBroadcast
  | Q3LogClientConnect
  | Q3LogClientDisconnect
  | Q3LogClientUserInfo
  | Q3LogInit
  | Q3LogKill
  | Q3LogRound
  | Q3LogSay
  | Q3LogShutdown
  | string
> =>
  broadcastParser(line) ||
  clientConnectParser(line) ||
  clientDisconnectParser(line) ||
  clientUserInfoParser(line) ||
  initParser(line) ||
  killParser(line) ||
  roundParser(line) ||
  sayParser(line) ||
  sayTeamParser(line) ||
  shutdownParser(line) || { event: Q3Event.UNKNOWN, data: line };
