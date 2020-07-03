import { broadcastParser } from './broadcastParser'
import { Q3Event } from '@q3log/types'

test('Not an broadcast event', () => {
  expect(broadcastParser('foo')).toBeUndefined()
})

test('A proper broadcast event', () => {
  expect(
    broadcastParser("broadcast: print \"Team 1's name reset to Red Team.\\n\"")
  ).toStrictEqual({
    message: "Team 1's name reset to Red Team.",
    name: Q3Event.BROADCAST
  })
})
