
function Game(canvadId) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
}

Game.prototype.start=function(){
    var background = new Background(this);

    background.draw();
}