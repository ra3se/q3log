import {
  Q3LogKill,
  Q3LogClientConnect,
  Q3LogClientDisconnect,
  Q3LogClientUserInfo,
} from "@q3log/types";

import _ from "lodash";
import crypto from "crypto";

interface Q3RA3Player {
  id: string;
  index: string | undefined;
  name?: string;
  connected: boolean;
  stats?: { [key: string]: string };
}

interface Q3RA3SummaryData {
  start: Date;
  end: Date;
  players: Q3RA3Player[];
}

const incOnPath = <T>(
  object: Q3RA3Player,
  path: _.Many<string | number | symbol>,
  amount: number
): T => _.set<T>(object, path, (_.get(object, path, 0) as number) + amount);

const hash = (string: string): string =>
  crypto.createHash("md5").update(string).digest("hex");

export default class SummaryCounter {
  private data: Q3RA3SummaryData = {
    start: new Date(Date.now()),
    end: new Date(Date.now()),
    players: [],
  };

  private resetPlayerStats(player: Q3RA3Player): Q3RA3Player {
    return Object.assign(player, {
      stats: {
        kills: 0,
        deaths: 0,
        score: 0,
      },
    });
  }

  private findPlayer(
    playerIndex: string,
    ip?: string
  ): Q3RA3Player | undefined {
    let player = this.data.players.find(({ index }) => playerIndex === index);

    if (ip !== undefined && player === undefined) {
      player = this.resetPlayerStats({
        id: hash(ip),
        index: playerIndex,
        connected: true,
      });
      this.data.players.push(player);
    }

    return player;
  }

  public connect(event: Q3LogClientConnect): void {
    const player = this.findPlayer(event.playerIndex, event.ip);
    if (player !== undefined) {
      player.name = event.player;
    }
  }

  public disconnect(event: Q3LogClientDisconnect): void {
    const player = this.findPlayer(event.playerIndex);
    if (player !== undefined) {
      player.index = undefined;
      player.connected = false;
    }
  }

  public info(event: Q3LogClientUserInfo): void {
    const player = this.findPlayer(event.playerIndex);
    if (player !== undefined && event.data.n !== undefined) {
      player.name = event.data.n;
    }
  }

  public kill(event: Q3LogKill): void {
    const attackerPlayer = this.findPlayer(event.attackerIndex);
    const targetPlayer = this.findPlayer(event.attackerIndex);

    if (targetPlayer !== undefined) {
      incOnPath<Q3RA3Player>(targetPlayer, ["stats", "deaths"], 1);
      incOnPath<Q3RA3Player>(
        targetPlayer,
        ["stats", "score"],
        event.targetScore
      );
    }

    if (attackerPlayer !== undefined) {
      if (
        targetPlayer !== undefined &&
        targetPlayer.index !== attackerPlayer.index
      ) {
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
    this.data.end = new Date(Date.now());
    const result = JSON.stringify(this.data);
    this.reset();
    return result;
  }

  public reset(): void {
    this.data = {
      start: new Date(),
      end: new Date(),
      players: [],
    };
  }
}
