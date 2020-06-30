import DiscordClient from './DiscordClient'

export default (client: DiscordClient): (message: string) => void => {
  let hookLastMessage = Date.now()
  let hookMessage = ''
  let hookTimeout: number
  let pastMessages: string[] = []

  setInterval(() => {
    pastMessages.shift()
  }, 10e3)

  return function awaitHookSend (message: string): void {
    if (message !== undefined && pastMessages.find((x) => x === message) === undefined) {
      hookMessage += `${hookMessage.length > 0 ? '\n' : ''}${message}`
    }

    if (hookTimeout !== undefined) {
      clearTimeout(hookTimeout)
    }

    if (Date.now() - hookLastMessage > 5e3 && hookMessage.length > 0) {
      hookLastMessage = Date.now()
      // Remember the last 10 messages sent
      pastMessages = pastMessages.concat(hookMessage.split('\n')).slice(-10)
      hookMessage = ''

      void client.send(hookMessage)
    } else {
      hookTimeout = setTimeout(awaitHookSend, 1e3)
    }
  }
}
