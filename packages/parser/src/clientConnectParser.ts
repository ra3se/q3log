import { Q3Event, Q3LogClientConnect } from '@q3log/types'
import parserFactory from './util/parserFactory'

export const clientConnectParser = parserFactory(
  new RegExp('^ClientConnect: (\\d+) (.+) \\((.+)\\)'),
  ([playerIndex, player, ip]: string[]): Q3LogClientConnect => ({
    name: Q3Event.CLIENT_CONNECT,
    playerIndex,
    player,
    ip
  })
)
