import { sayEventCommon } from './sayEventCommon'

describe('sayEventCommon()', () => {
  test('Should assing array to object', () => {
    expect(sayEventCommon(['first', 'second', 'third', 'forth'])).toStrictEqual({
      playerIndex: 'first',
      arenaIndex: 'second',
      player: 'third',
      message: 'forth'
    })
  })
})
