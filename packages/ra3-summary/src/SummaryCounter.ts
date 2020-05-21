import {
  Q3LogKill,
  Q3LogClientConnect,
  Q3LogClientDisconnect,
  Q3LogClientUserInfo,
} from "@q3log/types";

export default class SummaryCounter {
  private data: { [key: string]: string } = {};
  // private players: string[];

  // public connect(event: Q3LogClientConnect): void {}

  // public disconnect(event: Q3LogClientDisconnect): void {}

  // public info(event: Q3LogClientUserInfo): void {}

  // public kill(event: Q3LogKill): void {}

  public summary(): string {
    return JSON.stringify(this.data);
  }

  public reset(): void {
    this.data = {};
  }
}
