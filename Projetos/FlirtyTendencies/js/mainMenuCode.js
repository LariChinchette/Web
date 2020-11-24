var game;
window.onload = function(){
    var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    parent: 'phaser-game',
    scebe: [MainScene]
};
game = new Phaser.Game(config);
}