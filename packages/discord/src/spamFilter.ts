import DiscordClient from "./DiscordClient"

export default (client: DiscordClient): Function => {
  let pastMessages: string[] = []
  let hookMessage = ""
  const hookLastMessage = Date.now()
  let hookTimeout: number

  return function awaitHookSend(message: string): void {
    if (message && !pastMessages.find((x) => x === message)) {
      hookMessage += `${hookMessage.length > 0 ? "\n" : ""}${message}`
    }

    if (hookTimeout) {
      clearTimeout(hookTimeout)
    }

    if (Date.now() - hookLastMessage > 5e3 && hookMessage.length > 0) {
      client.send(hookMessage)
      // Remember the last 10 messages sent
      pastMessages = pastMessages.concat(hookMessage.split("\n")).slice(-10)
      hookMessage = ""
    } else {
      hookTimeout = setTimeout(awaitHookSend, 1e3)
    }
  }
}
