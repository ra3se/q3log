import { clientConnectParser } from "./clientConnectParser"
import { Q3Event } from "@q3log/types"

test("Not an clientConnect event", () => {
  expect(clientConnectParser("foo")).toBeUndefined()
})

test("A proper clientConnect event", () => {
  expect(
    clientConnectParser("ClientConnect: 3 ESK^2i (127.0.0.1)")
  ).toStrictEqual({
    ip: "127.0.0.1",
    player: "ESK^2i",
    playerIndex: "3",
    name: Q3Event.CLIENT_CONNECT
  })
})
