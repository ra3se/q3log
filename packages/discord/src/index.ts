import parser from "@q3log/parser";
import { Q3LogClientConnect } from "@q3log/types";
import DiscordClient from "./discordClient";
import spamFilter from "./spamFilter";
import stripColor from "@q3log/parser";

type Q3DiscordHookOptions = {
  id: string;
  token: string;
};

const determineClientConnect = (data: any): data is Q3LogClientConnect => true;

export default (line: string, options: Q3DiscordHookOptions): string => {
  const result = parser(line);
  const client = new DiscordClient(options.id, options.token);
  const sendMessage = spamFilter(client);

  if (determineClientConnect(result.data)) {
    sendMessage(`${stripColor(result.data.player)} connected`);
  }

  return line;
};
