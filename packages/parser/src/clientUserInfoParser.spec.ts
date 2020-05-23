import { clientUserInfoParser } from "./clientUserInfoParser";
import { Q3Event } from "@q3log/types";

test("Not an clientUserinfo event", () => {
  expect(clientUserInfoParser("foo")).toBe(null);
});

test("A proper clientUserinfo event", () => {
  expect(
    clientUserInfoParser(
      "ClientUserinfoChanged: 4 n\\^4>> ^7peaz^1'^0fuv\\t\\6045629\\rt\\6045629\\model\\sarge/default\\c1\\3\\c2\\0\\hc\\100\\w\\0\\l\\0\\a\\0\\ec\\1067"
    )
  ).toStrictEqual({
    data: {
      a: "0",
      c1: "3",
      c2: "0",
      ec: "1067",
      hc: "100",
      l: "0",
      model: "sarge/default",
      n: "^4>> ^7peaz^1'^0fuv",
      rt: "6045629",
      t: "6045629",
      w: "0",
    },
    playerIndex: "4",
    name: Q3Event.CLIENT_USERINFO_CHANGED,
  });
});
