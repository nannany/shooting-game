import * as PIXI from 'pixi.js'
import KeyboardManager from "../infra/KeyboardManager";
import {MyAircraftView} from "./MyAircraftView";
import MyAircraftViewFactory from "./factory/MyAircraftViewFactory";

/**
 * ゲームマネージャクラス
 */
export default class GameMaster {
  static createGame(app: PIXI.Application) {

    const ENEMY_BULLET_IMAGE_PATH: string = 'public/images/bullet_blue.png';

    const myAircraftViewFactory = new MyAircraftViewFactory(app.stage);

    let myAircraftView: MyAircraftView = myAircraftViewFactory.createMyAircraftView();

    let keyboardManager: KeyboardManager = new KeyboardManager();

    keyboardManager.left.pushPressHandler((event: any) => {
      myAircraftView.moveLeft()
    });
    keyboardManager.left.pushReleaseHandler((event: any) => {
      if (!keyboardManager.right.isDown) {
        myAircraftView.stopLeft();
      }
    });
    keyboardManager.up.pushPressHandler((event: any) => {
      myAircraftView.moveUp()
    });
    keyboardManager.up.pushReleaseHandler((event: any) => {
      if (!keyboardManager.down.isDown) {
        myAircraftView.stopUp();
      }
    });

    keyboardManager.right.pushPressHandler((event: any) => {
      myAircraftView.moveRight()
    });
    keyboardManager.right.pushReleaseHandler((event: any) => {
      if (!keyboardManager.left.isDown) {
        myAircraftView.stopRight();
      }
    });

    keyboardManager.down.pushPressHandler((event: any) => {
      myAircraftView.moveDown()
    });
    keyboardManager.down.pushReleaseHandler((event: any) => {
      if (!keyboardManager.up.isDown) {
        myAircraftView.stopDown();
      }
    });

    // 移動処理を定義
    let state = (delta: any) => {
      myAircraftView.play();
    };

    //Start the game loop
    app.ticker.add(delta => state(delta));

  }
}
