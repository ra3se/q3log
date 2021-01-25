import DiscordClient, { DiscordResponse } from "./DiscordClient";
import { AxiosResponse } from "axios";

type SpamFilter = (message: string) => Promise<AxiosResponse<DiscordResponse>>;
type Resolver = (value: PromiseLike<AxiosResponse<DiscordResponse>>) => void;

export default (client: DiscordClient, timeout: number): SpamFilter => {
  let hookLastMessage = Date.now();
  let hookMessage = "";
  let hookTimeout: NodeJS.Timeout;
  let pastMessages: string[] = [];

  setInterval(() => {
    pastMessages.shift();
  }, 10e3);

  function awaitHookSend(resolve: Resolver): void {
    if (hookTimeout !== undefined) {
      clearTimeout(hookTimeout);
    }

    if (Date.now() - hookLastMessage > timeout && hookMessage.length > 0) {
      resolve(client.send(hookMessage));

      hookLastMessage = Date.now();
      // Remember the last 10 messages sent
      pastMessages = pastMessages.concat(hookMessage.split("\n")).slice(-10);
      hookMessage = "";
    } else {
      hookTimeout = setTimeout(() => awaitHookSend(resolve), 1e3);
    }
  }

  return async (message: string) => {
    if (
      message !== undefined &&
      pastMessages.find((x) => x === message) === undefined
    ) {
      hookMessage += `${hookMessage.length > 0 ? "\n" : ""}${message}`;
    }

    return new Promise((resolve) => awaitHookSend(resolve));
  };
};
