import { RestartButton } from "../componentes/RestartButton"
export class Congratulations extends Phaser.Scene{
    constructor(){
        super({key:'congratulations'})
    }
    preload(){
        this.preload.image('congratulations','images/congratulations.png');
        this.RestartButton.preload;
    }
    create(){
        this.add.image(410,250,'background');
        this.RestartButton.create();
        this.gameoverImage = this.add.image(400,90,'congratulations');
    }
}