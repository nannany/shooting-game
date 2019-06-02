import {Entity} from "../Entity";

export abstract class Aircraft extends Entity {

  constructor(x: number, y: number, vx: number, vy: number) {
    super(x, y, vx, vy);
  }
  public adjustPosition(): void {
    this.$x += this.$vx;
    this.$y += this.$vy;
  }
}
