import { clientDisconnectParser } from "./clientDisconnectParser";

test("Not an clientDisconnect event", () => {
  expect(clientDisconnectParser("foo")).toBe(null);
});

test("A proper clientDisconnect event", () => {
  expect(clientDisconnectParser("ClientDisconnect: 2")).toStrictEqual({
    playerIndex: "2",
  });
});
