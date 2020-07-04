import stripColor from './stripColor'

describe('stripColor()', () => {
  test('Should remove color from string', () => {
    expect(stripColor('^7this ^3line ^2of ^1colors')).toBe('this line of colors')
  })
})
