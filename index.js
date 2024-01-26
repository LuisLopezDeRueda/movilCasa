import { Game } from './Escenas/game.js';
import { Congratulations } from './Escenas/congratulations.js';
import { Gameover } from './Escenas/game-over.js';

const config ={
    type: Phaser.AUTO,
    with: 800,
    height: 500,
    scene: [Game,Congratulations,Gameover],
    physics:{
        default: 'arcade',
        arcade:{
           // gravity: {y:400},
            debug: false
        }
    }
}
var game = new Phaser.Game(config);