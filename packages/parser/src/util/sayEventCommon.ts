export const sayEventCommon = ([
  playerIndex,
  arenaIndex,
  player,
  message,
]: string[]): {
  playerIndex: string;
  arenaIndex: string;
  player: string;
  message: string;
} => ({ playerIndex, arenaIndex, player, message });
