import { Q3LogKill, Q3Gender, Q3World, Q3Event, Q3Module } from '@q3log/types'
import parserFactory from './util/parserFactory'
import generateKillMessage from './util/generateKillMessage'

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
  ]): Q3LogKill | undefined => {
    const definedModule: Q3Module | undefined = Object.values(Q3Module).find(x => x === q3module)
    const killMessage: string | undefined = definedModule !== undefined ? generateKillMessage({
      attacker,
      attackerIndex,
      gender: Q3Gender.NEUTER,
      q3module: definedModule,
      target,
      targetIndex
    }) : undefined

    return killMessage !== undefined ? {
      name: Q3Event.KILL,
      arenaIndex,
      attacker,
      attackerIndex,
      attackerScore: attackerScore(attackerIndex, targetIndex, attacker),
      message: killMessage,
      q3module: q3module,
      modIndex: moduleIndex,
      target,
      targetIndex,
      targetScore: attacker === Q3World ? -1 : 0
    } : undefined
  }
)
