import { initParser } from "./initParser";

test("Not an init event", () => {
  expect(initParser("foo")).toBe(null);
});

test("A proper init event", () => {
  expect(
    initParser(
      "InitGame: \\sv_dlURL\\ra3.lorio.se/game\\sv_allowDownload\\1\\capturelimit\\8\\g_maxGameClients\\0\\sv_maxclients\\16\\timelimit\\30\\fraglimit\\0\\dmflags\\0\\sv_hostname\\Super Best Friends\\sv_minRate\\0\\sv_maxRate\\0\\sv_dlRate\\100\\sv_minPing\\0\\sv_maxPing\\0\\sv_floodProtect\\0\\version\\ioq3 1.36+u20160122+dfsg1-1/Ubuntu linux-x86 Jan 22 2016\\com_gamename\\Quake3Arena\\com_protocol\\71\\g_gametype\\8\\mapname\\ra3map20\\sv_privateClients\\0\\location\\0\\gamename\\arena\\g_needpass\\0\\g_version\\RA3 1.76a Feb  3 2006 22:55:45\\g_timeLeft\\27"
    )
  ).toStrictEqual({
    "sv_dlURL": "ra3.lorio.se/game",
    "sv_allowDownload": "1",
    capturelimit: "8",
    "g_maxGameClients": "0",
    "sv_maxclients": "16",
    timelimit: "30",
    fraglimit: "0",
    dmflags: "0",
    "sv_hostname": "Super Best Friends",
    "sv_minRate": "0",
    "sv_maxRate": "0",
    "sv_dlRate": "100",
    "sv_minPing": "0",
    "sv_maxPing": "0",
    "sv_floodProtect": "0",
    version: "ioq3 1.36+u20160122+dfsg1-1/Ubuntu linux-x86 Jan 22 2016",
    "com_gamename": "Quake3Arena",
    "com_protocol": "71",
    "g_gametype": "8",
    mapname: "ra3map20",
    "sv_privateClients": "0",
    location: "0",
    gamename: "arena",
    "g_needpass": "0",
    "g_version": "RA3 1.76a Feb  3 2006 22:55:45",
    "g_timeLeft": "27",
  });
});
