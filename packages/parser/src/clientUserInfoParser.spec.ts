import { clientUserInfoParser } from './clientUserInfoParser'
import { Q3Event } from '@q3log/types'

test('Not an clientUserinfo event', () => {
  expect(clientUserInfoParser('foo')).toBeUndefined()
})

test('A proper clientUserinfo event', () => {
  expect(
    clientUserInfoParser([
      'ClientUserinfoChanged: 4 ',
      "n\\^4>> ^7peaz^1'^0fuv",
      '\\t\\6045629',
      '\\rt\\6045629',
      '\\model\\sarge/default'
    ].join(''))
  ).toStrictEqual({
    data: {
      model: 'sarge/default',
      n: "^4>> ^7peaz^1'^0fuv",
      rt: '6045629',
      t: '6045629'
    },
    playerIndex: '4',
    name: Q3Event.CLIENT_USERINFO_CHANGED
  })
})
