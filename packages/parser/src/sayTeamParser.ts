import { Q3Event, Q3LogSayTeam } from '@q3log/types'
import parserFactory from './util/parserFactory'
import { sayEventCommon } from './util/sayEventCommon'

export const sayTeamParser = parserFactory(
  new RegExp('^sayteam: (\\d+) (\\d+): ([^:]+): (.+)'),
  (data: string[]): Q3LogSayTeam => ({
    name: Q3Event.SAY_TEAM,
    ...sayEventCommon(data)
  })
)
