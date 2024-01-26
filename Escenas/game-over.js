import { RestartButton } from "../componentes/RestartButton"
export class Gameover extends Phaser.Scene{
    constructor(){
        super({key:'gameover'}),
        this.RestartButton = new RestartButton(this);
    }
    preload(){
        this.preload.image('gameover','images/gameover.png');
        this.RestartButton.preload;
    }
    create(){
        this.add.image(410,250,'background');
        this.RestartButton.create();
        this.gameoverImage = this.add.image(400,90,'gameover');
    }
}