import SummaryCounter from './SummaryCounter'
import { Q3Event } from '@q3log/types'

describe('new SummaryCounter()', () => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() =>
      new Date('2019-05-14T11:01:58.135Z').valueOf()
    )
  const sum = new SummaryCounter()
  const result = JSON.parse(sum.summary())

  test('Should have correct start date', () => {
    expect(result.start).toBe('2019-05-14T11:01:58.135Z')
  })

  test('Should have correct end date', () => {
    expect(result.end).toBe('2019-05-14T11:01:58.135Z')
  })
})

test('Should register player connection', () => {
  const sum = new SummaryCounter()
  sum.connect({
    name: Q3Event.CLIENT_CONNECT,
    player: 'eldamar',
    ip: '127.0.0.1',
    playerIndex: '0'
  })

  expect(JSON.parse(sum.summary()).players).toStrictEqual([
    {
      connected: true,
      id: 'f528764d624db129b32c21fbca0cb8d6',
      index: '0',
      name: 'eldamar',
      stats: {
        deaths: 0,
        kills: 0,
        score: 0
      }
    }
  ])
})
