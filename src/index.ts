import * as PIXI from 'pixi.js'
import GameMaster from './controller/GameMaster';

const app = new PIXI.Application();
document.body.appendChild(app.view);

GameMaster.createGame(app);
