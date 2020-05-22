import parser, { determineEvent } from "@q3log/parser";
import { Q3LogClientConnect } from "@q3log/types";
import DiscordClient from "./DiscordClient";
import spamFilter from "./spamFilter";
import stripColor from "@q3log/parser";

type Q3DiscordHookOptions = {
  id: string;
  token: string;
};

export default (line: string, options: Q3DiscordHookOptions): string => {
  const event = parser(line);
  const client = new DiscordClient(options.id, options.token);
  const sendMessage = spamFilter(client);

  determineEvent<Q3LogClientConnect>(event) &&
    sendMessage(`${stripColor(event.player)} connected`);

  return line;
};
