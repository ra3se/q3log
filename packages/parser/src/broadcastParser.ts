import { Q3Event, Q3LogBroadcast } from '@q3log/types'
import parserFactory from './util/parserFactory'

export const broadcastParser = parserFactory(
  new RegExp('^broadcast: print "([^"]+)"'),
  ([message]: string[]): Q3LogBroadcast => ({
    name: Q3Event.BROADCAST,
    message: message.replace('\\n', '')
  })
)
