import DiscordClient from "./DiscordClient"

export default (client: DiscordClient): {(message: string): void} => {
  let hookLastMessage = Date.now()
  let hookMessage = ""
  let hookTimeout: number
  let pastMessages: string[] = []

  setInterval(() => {
    pastMessages.shift()
  }, 10e3)

  return function awaitHookSend (message: string): void {
    if (message && !pastMessages.find((x) => x === message)) {
      hookMessage += `${hookMessage.length > 0 ? "\n" : ""}${message}`
    }

    if (hookTimeout) {
      clearTimeout(hookTimeout)
    }

    if (Date.now() - hookLastMessage > 5e3 && hookMessage.length > 0) {
      client.send(hookMessage)
      hookLastMessage = Date.now()
      // Remember the last 10 messages sent
      pastMessages = pastMessages.concat(hookMessage.split("\n")).slice(-10)
      hookMessage = ""
    } else {
      hookTimeout = setTimeout(awaitHookSend, 1e3)
    }
  }
}
