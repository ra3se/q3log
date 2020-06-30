import { Q3Event, Q3LogEvent } from '@q3log/types'

import { broadcastParser } from './broadcastParser'
import { clientConnectParser } from './clientConnectParser'
import { clientDisconnectParser } from './clientDisconnectParser'
import { clientUserInfoParser } from './clientUserInfoParser'
import { initParser } from './initParser'
import { killParser } from './killParser'
import { roundParser } from './roundParser'
import { sayParser } from './sayParser'
import { sayTeamParser } from './sayTeamParser'
import { shutdownParser } from './shutdownParser'

export { broadcastParser }
export { clientConnectParser }
export { clientDisconnectParser }
export { clientUserInfoParser }
export { initParser }
export { killParser }
export { roundParser }
export { sayParser }
export { sayTeamParser }
export { shutdownParser }

export { default as stripColor } from './util/stripColor'

export default (line: string): Q3LogEvent =>
  broadcastParser(line) ??
  clientConnectParser(line) ??
  clientDisconnectParser(line) ??
  clientUserInfoParser(line) ??
  initParser(line) ??
  killParser(line) ??
  roundParser(line) ??
  sayParser(line) ??
  sayTeamParser(line) ??
  shutdownParser(line) ?? {
    name: Q3Event.UNKNOWN,
    line
  }
