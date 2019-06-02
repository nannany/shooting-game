import * as PIXI from 'pixi.js'

/**
 * PixiのSpriteのadd、removeをする。compositeして使われる想定
 */
export default class PixiSpriteManager {
    private stage: PIXI.Container;

    constructor(stage: PIXI.Container) {
        this.stage = stage;
    }

    /**
     * stageにspriteを登録する.
     *
     * @param sprite
     */
    public addChildSprite(sprite: PIXI.Sprite) {
        this.stage.addChild(sprite);
    }

    /**
     * spriteをstageから削除する
     *
     * @param sprite
     */
    public removeChildSprite(sprite: PIXI.Sprite) {
        this.stage.removeChild(sprite);
    }
}
