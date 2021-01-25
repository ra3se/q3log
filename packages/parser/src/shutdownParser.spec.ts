import { shutdownParser } from "./shutdownParser";
import { Q3Event } from "@q3log/types";

test("Not an shutdown event", () => {
  expect(shutdownParser("foo")).toBeUndefined();
});

test("A proper shutdown event", () => {
  expect(shutdownParser("ShutdownGame:")).toStrictEqual({
    name: Q3Event.SHUTDOWN,
  });
});
