// Kill: 7 5 7 5: tores killed ^7O(^0EDVN^7)--o^4< by MOD_ROCKET_SPLASH

import generateKillMessage from './generateKillMessage'
import { Q3Gender, Q3Module, Q3World } from '@q3log/types'

describe('generateKillMessage()', () => {
  test('target another player', () => {
    return expect(
      generateKillMessage({
        attacker: 'Tesla',
        attackerIndex: '7',
        gender: Q3Gender.NEUTER,
        q3module: Q3Module.ROCKET_SPLASH,
        target: 'Edison',
        targetIndex: '5'
      })
    ).toBe("^7Edison ^7almost dodged ^7Tesla^7's rocket")
  })

  test('target her self', () => {
    return expect(
      generateKillMessage({
        attacker: 'Tesla',
        attackerIndex: '7',
        gender: Q3Gender.FEMALE,
        q3module: Q3Module.PLASMA_SPLASH,
        target: 'Tesla',
        targetIndex: '7'
      })
    ).toBe('^7Tesla ^7melted herself')
  })

  test('target him self', () => {
    return expect(
      generateKillMessage({
        attacker: 'Tesla',
        attackerIndex: '7',
        gender: Q3Gender.MALE,
        q3module: Q3Module.PLASMA_SPLASH,
        target: 'Tesla',
        targetIndex: '7'
      })
    ).toBe('^7Tesla ^7melted himself')
  })

  test('target it self', () => {
    return expect(
      generateKillMessage({
        attacker: 'Tesla',
        attackerIndex: '7',
        gender: Q3Gender.NEUTER,
        q3module: Q3Module.BFG_SPLASH,
        target: 'Tesla',
        targetIndex: '7'
      })
    ).toBe('^7Tesla ^7should have used a smaller gun')
  })

  test('fell victim of the world', () => {
    return expect(
      generateKillMessage({
        attacker: Q3World,
        attackerIndex: '0',
        gender: Q3Gender.MALE,
        q3module: Q3Module.WATER,
        target: 'Tesla',
        targetIndex: '7'
      })
    ).toBe('^7Tesla ^7sank like a rock')
  })
})
