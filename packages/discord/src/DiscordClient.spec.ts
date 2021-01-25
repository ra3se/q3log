import * as axiosOriginal from "axios";
import DiscordClient from "./DiscordClient";

jest.mock("axios");

const mocked = axiosOriginal as jest.Mocked<typeof axiosOriginal>;
const axios = mocked.default;

beforeEach(() => {
  axios.mockClear();
});

describe("DiscordClient", () => {
  test("send", async () => {
    const client = new DiscordClient("foo", "bar");
    (axios.post as jest.Mock).mockImplementationOnce(
      async () => await Promise.resolve({})
    );
    await expect(client.send("simple")).resolves.toEqual({});

    expect(axios.post).toHaveBeenCalledWith(
      "https://discordapp.com/api/webhooks/foo/bar",
      {
        content: "simple",
      }
    );
  });
});
