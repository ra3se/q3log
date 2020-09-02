import * as axiosOriginal from 'axios'
import discord from '.'

jest.mock('axios')

const mocked = axiosOriginal as jest.Mocked<typeof axiosOriginal>
const axios = mocked.default

beforeEach(() => {
  axios.mockClear()
})

describe('Discord', () => {
  test('CLIENT_CONNECT', async () => {
    (axios.post as jest.Mock).mockImplementationOnce(async () => await Promise.resolve({}))
    const client = await discord({ id: 'foo', token: 'bar', timeout: 1 })

    await client('ClientConnect: 3 ESK^2i (127.0.0.1)')

    expect(axios.post).toHaveBeenCalledWith(
      'https://discordapp.com/api/webhooks/foo/bar', { content: 'ESKi connected' }
    )
  })
})
