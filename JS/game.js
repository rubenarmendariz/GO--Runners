
function Game(canvadId) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
}

Game.prototype.start=function(){
    var player = new Player(this);
    var background = new Background(this,player);

    background.draw();
    this.move();
}
Game.prototype.draw = function() {
    this.background.draw();
}
Game.prototype.move = function() {
    
    this.player.move();
}
