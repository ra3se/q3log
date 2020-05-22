import { clientConnectParser } from "./clientConnectParser";

test("Not an clientConnect event", () => {
  expect(clientConnectParser("foo")).toBe(null);
});

test("A proper clientConnect event", () => {
  expect(
    clientConnectParser("ClientConnect: 3 ESK^2i (127.0.0.1)")
  ).toStrictEqual({
    ip: "127.0.0.1",
    player: "ESK^2i",
    playerIndex: "3",
  });
});
