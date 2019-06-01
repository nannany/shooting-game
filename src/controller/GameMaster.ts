import * as PIXI from 'pixi.js'
import KeyboardManager from "../infra/KeyboardManager";
import {MyAircraft} from "../domain/aircraft/MyAircraft";

/**
 * ゲームマネージャクラス
 */
export default class GameMaster {
  static createGame(app: PIXI.Application) {

    let ENEMY_BULLET_VIEW: string = 'contents/img/bullet_blue.png';
    let 

    let myAircraftView: MyAircraftView = new myAircraftView(MyAircraft.getInstance,,0,0,5);

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
