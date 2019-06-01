import { MyAircraft } from "../domain/aircraft/MyAircraft";

class MyAircraftView {

  myAircraft: MyAircraft;

  sprite: PIXI.Sprite;

  // 弾の発射間隔
  launchInterval: number;

  // フレーム数がインクリメントされていく
  counter: number;

  // 移動速度
  speed: number;

  constructor(myAircraft: MyAircraft, sprite: PIXI.Sprite, launchInterval: number, counter: number, speed: number) {
    this.myAircraft = MyAircraft.getInstance();
    this.sprite = sprite;
    this.launchInterval = launchInterval;
    this.counter = counter;
    this.speed = speed;
  }

  moveLeft(): void {
    this.myAircraft.$vx = -1 * this.speed;
  }

  stopLeft(): void {
    this.myAircraft.$vx = 0;
  }

  moveUp(): void {
    this.myAircraft.$vy = -1 * this.speed;
  }

  stopUp(): void {
    this.myAircraft.$vy = 0;
  }

  moveRight(): void {
    this.myAircraft.$vx = this.speed;
  }

  stopRight(): void {
    this.myAircraft.$vx = 0;
  }

  moveDown(): void {
    this.myAircraft.$vy = this.speed;
  }

  stopDown(): void {
    this.myAircraft.$vy = 0;
  }

  play(): void {
    this.myAircraft.adjustPosition();

    this.sprite.x = this.myAircraft.$x;
    this.sprite.y = this.myAircraft.$y;
    this.counter++;
  }

  public static class MyAircraftViewBuilder {
  let myAircraft: MyAircraft = MyAircraft.getInstance();
  private sprite: PIXI.Sprite;
  private launchInterval: number;
  private counter: number;
   private speed: number;

  MyAircraftViewBuilder


    public MyAircraftViewBuilder setInterval
}
}
