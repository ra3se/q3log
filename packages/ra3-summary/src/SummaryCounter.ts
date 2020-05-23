import {
  Q3LogKill,
  Q3LogClientConnect,
  Q3LogClientDisconnect,
  Q3LogClientUserInfo
} from "@q3log/types";

import _ from "lodash";
import crypto from "crypto";

type Q3RA3Player = {
  id: string;
  index: string | null;
  name?: string;
  connected: boolean;
  stats?: {};
};

type Q3RA3SummaryData = {
  start: Date;
  end: Date;
  players: Q3RA3Player[];
};

const incOnPath = <T>(
  object: object,
  path: _.Many<string | number | symbol>,
  amount: number
): T => _.set<T>(object, path, _.get(object, path, 0) + amount);

const hash = (str: string): string =>
  crypto.createHash("md5").update(str).digest("hex");

export default class SummaryCounter {
  private data: Q3RA3SummaryData = {
    start: new Date(),
    end: new Date(),
    players: []
  };

  private resetPlayerStats(player: Q3RA3Player): Q3RA3Player {
    return Object.assign(player, {
      stats: {
        kills: 0,
        deaths: 0,
        score: 0
      }
    });
  }

  private findPlayer(playerIndex: string, ip?: string): Q3RA3Player | undefined {
    let player = this.data.players.find(({ index }) => playerIndex === index);

    if (ip && !player) {
      player = this.resetPlayerStats({
        id: hash(ip),
        index: playerIndex,
        connected: true
      });
      this.data.players.push(player);
    }

    return player;
  }

  public connect(event: Q3LogClientConnect): void {
    const player = this.findPlayer(event.playerIndex, event.ip);
    if (player) {
      player.name = event.player;
    }
  }

  public disconnect(event: Q3LogClientDisconnect): void {
    const player = this.findPlayer(event.playerIndex);
    if (player) {
      player.index = null;
      player.connected = false;
    }
  }

  public info(event: Q3LogClientUserInfo): void {
    const player = this.findPlayer(event.playerIndex);
    if (player && event.data.n) {
      player.name = event.data.n;
    }
  }

  public kill(event: Q3LogKill): void {
    const attackerPlayer = this.findPlayer(event.attackerIndex);
    const targetPlayer = this.findPlayer(event.attackerIndex);

    if (targetPlayer) {
      incOnPath<Q3RA3Player>(targetPlayer, ["stats", "deaths"], 1);
      incOnPath<Q3RA3Player>(
        targetPlayer,
        ["stats", "score"],
        event.targetScore
      );
    }

    if (attackerPlayer) {
      if (targetPlayer && targetPlayer.index !== attackerPlayer.index) {
        incOnPath<Q3RA3Player>(attackerPlayer, ["stats", "kills"], 1);
      }

      incOnPath<Q3RA3Player>(
        attackerPlayer,
        ["stats", "score"],
        event.attackerScore
      );
    }
  }

  public summary(): string {
    const result = JSON.stringify(this.data);
    this.reset();
    return result;
  }

  public reset(): void {
    this.data = {
      start: new Date(),
      end: new Date(),
      players: []
    };
  }
}
