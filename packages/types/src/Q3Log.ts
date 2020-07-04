import { Q3Event } from './Q3Event'

interface Q3LogEventBase<T> {
  name: T
}

interface Q3LogSayEventBase<T> extends Q3LogEventBase<T> {
  playerIndex: string
  arenaIndex: string
  player: string
  message: string
}

export type Q3LogEvent =
  | Q3LogBroadcast
  | Q3LogClientConnect
  | Q3LogClientDisconnect
  | Q3LogClientUserInfo
  | Q3LogInit
  | Q3LogRound
  | Q3LogSay
  | Q3LogSayTeam
  | Q3LogShutdown
  | Q3LogUnknown
  | Q3LogKill

export interface Q3LogInit extends Q3LogEventBase<Q3Event.INIT> {
  data: { [key: string]: string }
}

export type Q3LogShutdown = Q3LogEventBase<Q3Event.SHUTDOWN>

export interface Q3LogClientConnect
  extends Q3LogEventBase<Q3Event.CLIENT_CONNECT> {
  playerIndex: string
  player: string
  ip: string
}

export interface Q3LogClientDisconnect
  extends Q3LogEventBase<Q3Event.CLIENT_DISCONNECT> {
  playerIndex: string
}

export interface Q3LogSay extends Q3LogSayEventBase<Q3Event.SAY> {}

export interface Q3LogSayTeam extends Q3LogSayEventBase<Q3Event.SAY_TEAM> {}

export interface Q3LogClientUserInfo
  extends Q3LogEventBase<Q3Event.CLIENT_USERINFO_CHANGED> {
  data: { [key: string]: string }
  playerIndex: string
}

export interface Q3LogRound extends Q3LogEventBase<Q3Event.ROUND> {
  roundIndex: string
  roundTotal: string
}

export interface Q3LogKill extends Q3LogEventBase<Q3Event.KILL> {
  arenaIndex: string
  attacker: string
  attackerIndex: string
  attackerScore: number
  message: string
  q3module: string
  modIndex: string
  target: string
  targetIndex: string
  targetScore: number
}

export interface Q3LogBroadcast extends Q3LogEventBase<Q3Event.BROADCAST> {
  message: string
}

export interface Q3LogUnknown extends Q3LogEventBase<Q3Event.UNKNOWN> {
  line: string
}
