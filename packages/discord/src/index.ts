import parser, { stripColor } from "@q3log/parser"
import { Q3Event } from "@q3log/types"
import DiscordClient from "./DiscordClient"
import spamFilter from "./spamFilter"

type Q3DiscordHookOptions = {
  id: string;
  token: string;
};

export default (line: string, options: Q3DiscordHookOptions): string => {
  const event = parser(line)
  const client = new DiscordClient(options.id, options.token)
  const sendMessage = spamFilter(client)

  switch (event.name) {
    case Q3Event.CLIENT_CONNECT:
      sendMessage(`${stripColor(event.player)} connected`)
      break
  }

  return line
}
