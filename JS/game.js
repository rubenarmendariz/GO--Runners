
function Game(canvadId) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.fps
    this.counter = 1;
}

Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.draw2();
    this.player.draw();
}

Game.prototype.start=function(){
    this.player = new Player(this);
    this.background = new Background(this,this.player);
    this.background.draw();

    this.draw();
    this.moveAll();
    this.framesCounter++;

    // controlamos que frameCounter no sea superior a 1000
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
};

var jump = "w";
var runA = "a";
var runS ="b";
Game.prototype.moveAll = function() {
    document.onkeyup = function(event) {
        
        if (event.key === jump && this.player.y == this.player.y0) {
            this.player.y -= 30;
            this.player.vy -= 10;
            this.draw();

        } else if (event.key == 'a') {
            this.player.x +=2;
            this.counter +=2; 
            this.draw();

        
        } else if (event.key == 's') {
            this.player.x +=2;
            this.counter +=2;
            this.draw();
            
        }
      }.bind(this);
}

