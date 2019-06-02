import PixiSpriteManager from './PixiSpriteManager';
import * as PIXI from 'pixi.js'
import { MyAircraftView } from '../MyAircraftView';

export default class MyAircraftViewFactroy {

  private pixiSpriteManager: PixiSpriteManager;

  // この情報をここに持たせていいのか？？
  readonly MY_AIRCRAFT_IMAGE_PATH: string = 'images/shuttle.gif'

  readonly MY_AIRCRAFT_SPRITE: PIXI.Sprite = PIXI.Sprite.from(this.MY_AIRCRAFT_IMAGE_PATH);

  readonly MY_AIRCRAFT_LAUNCH_INTERVAL: number = 10;

  readonly MY_AIRCRAFT_SPEED: number = 5;

  public createMyAircraftView(): MyAircraftView {

    this.pixiSpriteManager.addChildSprite(this.MY_AIRCRAFT_SPRITE);

    let myAircraftView: MyAircraftView = new MyAircraftView(this.MY_AIRCRAFT_SPRITE, this.MY_AIRCRAFT_LAUNCH_INTERVAL, this.MY_AIRCRAFT_SPEED);

    return myAircraftView;
  }

  constructor(stage: PIXI.Container) {
    this.pixiSpriteManager = new PixiSpriteManager(stage);
  }
}
