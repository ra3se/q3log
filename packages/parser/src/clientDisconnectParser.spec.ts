import { clientDisconnectParser } from "./clientDisconnectParser";
import { Q3Event } from "@q3log/types";

test("Not an clientDisconnect event", () => {
  expect(clientDisconnectParser("foo")).toBe(null);
});

test("A proper clientDisconnect event", () => {
  expect(clientDisconnectParser("ClientDisconnect: 2")).toStrictEqual({
    data: {
      playerIndex: "2",
    },
    event: Q3Event.CLIENT_DISCONNECT,
  });
});
