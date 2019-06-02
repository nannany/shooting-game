import { MyAircraft } from "../domain/aircraft/MyAircraft";

export class MyAircraftView {

  myAircraft: MyAircraft =MyAircraft.getInstance() ;

  sprite: PIXI.Sprite;

  // 弾の発射間隔
  launchInterval: number;

  // フレーム数がインクリメントされていく
  counter: number=0;

  // 移動速度
  speed: number;

  constructor( sprite: PIXI.Sprite, launchInterval: number, speed: number) {
    this.sprite = sprite;
    this.launchInterval = launchInterval;
    this.speed = speed;
  }

  // todo ビルダー作る。このコンストラクタだけだとどの属性が何番目の引数に当たるか迷う。

  moveLeft(): void {
    this.myAircraft.$vx = -1 * this.speed;
  }

  stopLeft(): void { this.myAircraft.$vx = 0;
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
}
