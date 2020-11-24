
class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }
    preload(){
        
        switch(currentChar){
            case "Arosh":
                this.load.sprite("character", 'Midia/AroshSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Crusher":
                this.load.sprite("character", 'Midia/CrusherSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Elnarhis":
                this.load.sprite("character", 'Midia/ElnarhisSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Helenna":
                this.load.sprite("character", 'Midia/HelennaSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Nittin":
                this.load.sprite("character", 'Midia/NittinSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Pogglier":
                this.load.sprite("character", 'Midia/PogglierSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Ryukto":
                this.load.sprite("character", 'Midia/RyuktoSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
            case "Tennuka":
                this.load.sprite("character", 'Midia/TennukaSprite.pgn', {frameWidth:10,frameHeight:10});
                this.load.sprite("bg", '', {frameWidth:0,frameHeight:0});
                break;
        }
    }

    create(){
        this.character = this.add.sprite(10,10,"character");
        this.bg = this.add.image(0,0,"bg")
    }
    update(){

    }
}