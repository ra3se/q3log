import { Q3LogKill, Q3Gender, Q3World, Q3Event } from '@q3log/types'
import parserFactory from './util/parserFactory'
import killMessage from './util/killMessage'

const attackerScore = (attackerIndex: string,
  targetIndex: string,
  attacker: string): number => {
  if (attackerIndex === targetIndex) {
    return -1
  } else if (attacker === Q3World) {
    return 0
  } else {
    return 1
  }
}

export const killParser = parserFactory(
  new RegExp(
    '^Kill: (\\d+) (\\d+) (\\d+) (\\d+): (.+) killed (.+) by ([A-Z_]+)'
  ),
  ([
    attackerIndex,
    targetIndex,
    moduleIndex,
    arenaIndex,
    attacker,
    target,
    q3module
  ]: string[]): Q3LogKill => ({
    name: Q3Event.KILL,
    arenaIndex,
    attacker,
    attackerIndex,
    attackerScore: attackerScore(attackerIndex, targetIndex, attacker),
    message: killMessage({
      attacker,
      attackerIndex,
      gender: Q3Gender.NEUTER,
      q3module,
      target,
      targetIndex
    }),
    q3module: q3module,
    modIndex: moduleIndex,
    target,
    targetIndex,
    targetScore: attacker === Q3World ? -1 : 0
  })
)
