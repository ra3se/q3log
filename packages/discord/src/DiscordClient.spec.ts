import * as axiosOriginal from 'axios'
import DiscordClient from './DiscordClient'

const token = 'bar'
const identifier = 'foo'
const client = new DiscordClient(identifier, token)

jest.mock('axios')

const mocked = axiosOriginal as jest.Mocked<typeof axiosOriginal>
const axios = mocked.default

beforeEach(() => {
  axios.mockClear()
})

describe('DiscordClient', () => {
  test('send', async () => {
    (axios.post as jest.Mock).mockImplementationOnce(async () => await Promise.resolve({}))
    await expect(client.send('simple')).resolves.toEqual({})

    expect(axios.post).toHaveBeenCalledWith(
      `https://discordapp.com/api/webhooks/${identifier}/${token}`, { content: 'simple' }
    )
  })
})
