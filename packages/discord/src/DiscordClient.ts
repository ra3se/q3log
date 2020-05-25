/**
 * Documentation https://discord.com/developers/docs/resources/webhook#execute-webhook
 */

import axios, { AxiosResponse } from "axios"

type DiscordResponse = {};

type DiscordHookData = {
  content?: string;
  username?: string;
  embeds?: DiscordHookEmbedData[];
  avatar_url?: string;
};

type DiscordHookEmbedData = {
  title?: string;
  description?: string;
  url?: string;
  color?: string;
  image?: { url: string };
  author?: { name: string; url?: string; icon_url?: string };
  footer?: { text: string; icon_url: string };
};

export default class DiscordClient {
  constructor(id: string, token: string) {
    this.id = id
    this.token = token
    this.data = {}
  }

  private id: string;
  private token: string;
  private data: DiscordHookData;

  public content(content: string): this {
    this.data.content = content
    return this
  }

  public embed(data: DiscordHookEmbedData): this {
    this.data.embeds = this.data.embeds || []
    if (this.data.embeds.length === 10) {
      throw new Error("Max number of embedded rich content is 10")
    }
    this.data.embeds.push(data)
    return this
  }

  public username(name: string): this {
    this.data.username = name
    return this
  }

  public avatar(url: string): this {
    this.data["avatar_url"] = url
    return this
  }

  public async send(content: string): Promise<AxiosResponse<DiscordResponse>> {
    if (content) {
      this.content(content)
    }

    if (Object.keys(this.data).length === 0) {
      throw new Error("No data for discord webhook")
    }

    return axios
      .post(
        `https://discordapp.com/api/webhooks/${this.id}/${this.token}`,
        this.data
      )
      .then((response) => {
        this.data = {}
        return response
      })
  }
}
