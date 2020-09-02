import parser, { stripColor } from '@q3log/parser'
import { Q3Event } from '@q3log/types'
import DiscordClient from './DiscordClient'
import spamFilter from './spamFilter'
import { AxiosResponse } from 'axios'
import { DiscordResponse } from './DiscordResponse.type'

interface Q3DiscordHookOptions {
  id: string
  token: string
  timeout?: number
}

export default (
  options: Q3DiscordHookOptions
): ((line: string) => Promise<AxiosResponse<DiscordResponse>> | undefined) => {
  const client = new DiscordClient(options.id, options.token)
  const sendMessage = spamFilter(client,
    options.timeout !== undefined ? options.timeout : 5e3)

  return (line: string) => {
    const event = parser(line)

    switch (event.name) {
      case Q3Event.CLIENT_CONNECT:
        return sendMessage(`${stripColor(event.player)} connected`)
      default:
        return undefined
    }
  }
}
