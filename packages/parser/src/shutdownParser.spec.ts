import { shutdownParser } from "./shutdownParser";

test("Not an shutdown event", () => {
  expect(shutdownParser("foo")).toBe(null);
});

test("A proper shutdown event", () => {
  expect(shutdownParser("ShutdownGame:")).toStrictEqual({});
});
