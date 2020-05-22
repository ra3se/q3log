export type Q3LogEvent<T> = {
  event: string;
  data?: T;
};

// TODO: Change into this and flatten data ->
// type Q3LogEvent =
//   | Q3LogInit
//   | Q3LogShutdown
//   | Q3LogClientConnect
//   | Q3LogClientDisconnect
//   | Q3LogSay
//   | Q3LogClientUserInfo
//   | Q3LogRound;

export type Q3LogInit = {
  [key: string]: string;
};

export type Q3LogShutdown = {};

export type Q3LogClientConnect = {
  playerIndex: string;
  player: string;
  ip: string;
};

export type Q3LogClientDisconnect = {
  playerIndex: string;
};

export type Q3LogSay = {
  playerIndex: string;
  arenaIndex: string;
  player: string;
  message: string;
};

export type Q3LogClientUserInfo = {
  [key: string]: string;
  playerIndex: string;
};

export type Q3LogRound = {
  roundIndex: string;
  roundTotal: string;
};

export type Q3LogKill = {
  arenaIndex: string;
  attacker: string;
  attackerIndex: string;
  attackerScore: number;
  message: string[];
  mod: string;
  modIndex: string;
  target: string;
  targetIndex: string;
  targetScore: number;
};

export type Q3LogBroadcast = {
  message: string;
};
