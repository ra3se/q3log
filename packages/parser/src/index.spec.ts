import parser from ".";
import { Q3Event, Q3Module } from "@q3log/types";

test("Should return unknown event", () => {
  expect(parser("foo")).toStrictEqual({
    name: Q3Event.UNKNOWN,
    line: "foo",
  });
});

test("Should return broadcast event", () => {
  expect(parser('broadcast: print "ESK^2i^7 connected\\n"')).toStrictEqual({
    name: Q3Event.BROADCAST,
    message: "ESK^2i^7 connected",
  });
});

test("Should return a clientConnect event", () => {
  expect(parser("ClientConnect: 3 ESK^2i (127.0.0.1)")).toStrictEqual({
    ip: "127.0.0.1",
    player: "ESK^2i",
    playerIndex: "3",
    name: Q3Event.CLIENT_CONNECT,
  });
});

test("Should return a clientDisconnect event", () => {
  expect(parser("ClientDisconnect: 2")).toStrictEqual({
    playerIndex: "2",
    name: Q3Event.CLIENT_DISCONNECT,
  });
});

test("Should return a clientUserinfo event", () => {
  expect(
    parser(
      [
        "ClientUserinfoChanged: 4 ",
        "n\\^4>> ^7peaz^1'^0fuv",
        "\\t\\6045629",
        "\\rt\\6045629",
        "\\model\\sarge/default",
      ].join("")
    )
  ).toStrictEqual({
    data: {
      model: "sarge/default",
      n: "^4>> ^7peaz^1'^0fuv",
      rt: "6045629",
      t: "6045629",
    },
    playerIndex: "4",
    name: Q3Event.CLIENT_USERINFO_CHANGED,
  });
});

test("Should return a init event", () => {
  expect(
    parser(
      [
        "InitGame: \\sv_dlURL\\ra3.lorio.se/game",
        "\\sv_allowDownload\\1",
        "\\capturelimit\\8",
        "\\g_maxGameClients\\0",
        "\\sv_maxclients\\16",
        "\\timelimit\\30",
        "\\fraglimit\\0",
        "\\dmflags\\0",
        "\\sv_hostname\\Super Best Friends",
        "\\sv_minRate\\0",
        "\\sv_maxRate\\0",
        "\\sv_dlRate\\100",
        "\\sv_minPing\\0",
        "\\sv_maxPing\\0",
        "\\sv_floodProtect\\0",
        "\\version\\ioq3 1.36+u20160122+dfsg1-1/Ubuntu linux-x86 Jan 22 2016",
        "\\com_gamename\\Quake3Arena",
        "\\com_protocol\\71",
        "\\g_gametype\\8",
        "\\mapname\\ra3map20",
        "\\sv_privateClients\\0",
        "\\location\\0",
        "\\gamename\\arena",
        "\\g_needpass\\0",
        "\\g_version\\RA3 1.76a Feb  3 2006 22:55:45",
        "\\g_timeLeft\\27",
      ].join("")
    )
  ).toStrictEqual({
    data: {
      sv_dlURL: "ra3.lorio.se/game",
      sv_allowDownload: "1",
      capturelimit: "8",
      g_maxGameClients: "0",
      sv_maxclients: "16",
      timelimit: "30",
      fraglimit: "0",
      dmflags: "0",
      sv_hostname: "Super Best Friends",
      sv_minRate: "0",
      sv_maxRate: "0",
      sv_dlRate: "100",
      sv_minPing: "0",
      sv_maxPing: "0",
      sv_floodProtect: "0",
      version: "ioq3 1.36+u20160122+dfsg1-1/Ubuntu linux-x86 Jan 22 2016",
      com_gamename: "Quake3Arena",
      com_protocol: "71",
      g_gametype: "8",
      mapname: "ra3map20",
      sv_privateClients: "0",
      location: "0",
      gamename: "arena",
      g_needpass: "0",
      g_version: "RA3 1.76a Feb  3 2006 22:55:45",
      g_timeLeft: "27",
    },
    name: Q3Event.INIT,
  });
});

test("Should return a kill event", () => {
  expect(
    parser("Kill: 2 1 10 2: fittoter killed ouch! by MOD_RAILGUN")
  ).toStrictEqual({
    name: Q3Event.KILL,
    arenaIndex: "2",
    attacker: "fittoter",
    attackerIndex: "2",
    attackerScore: 1,
    message: "^7ouch! ^7was railed by ^7fittoter",
    q3module: Q3Module.RAILGUN,
    modIndex: "10",
    target: "ouch!",
    targetIndex: "1",
    targetScore: 0,
  });
});

test("Should return a round event", () => {
  expect(parser("Running round 3 of 20")).toStrictEqual({
    roundIndex: "3",
    roundTotal: "20",
    name: Q3Event.ROUND,
  });
});

test("Should return a say event", () => {
  expect(parser("say: 0 1: FATPOOPZ: men det va da fan")).toStrictEqual({
    arenaIndex: "1",
    message: "men det va da fan",
    player: "FATPOOPZ",
    playerIndex: "0",
    name: Q3Event.SAY,
  });
});

test("Should return a sayTeam event", () => {
  expect(parser("sayteam: 0 1: FATPOOPZ: men det va da fan")).toStrictEqual({
    arenaIndex: "1",
    message: "men det va da fan",
    player: "FATPOOPZ",
    playerIndex: "0",
    name: Q3Event.SAY_TEAM,
  });
});

test("Should return a shutdown event", () => {
  expect(parser("ShutdownGame:")).toStrictEqual({
    name: Q3Event.SHUTDOWN,
  });
});
