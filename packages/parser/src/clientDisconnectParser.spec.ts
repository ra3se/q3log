import { clientDisconnectParser } from "./clientDisconnectParser"
import { Q3Event } from "@q3log/types"

test("Not an clientDisconnect event", () => {
  expect(clientDisconnectParser("foo")).toBeNull()
})

test("A proper clientDisconnect event", () => {
  expect(clientDisconnectParser("ClientDisconnect: 2")).toStrictEqual({
    playerIndex: "2",
    name: Q3Event.CLIENT_DISCONNECT,
  })
})
