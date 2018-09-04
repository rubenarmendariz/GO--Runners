
function Game(canvadId) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
}

Game.prototype.draw = function(player,background) {
    background.draw();
    player.draw();
}

Game.prototype.start=function(){
    var player = new Player(this);
    var background = new Background(this,player);

    this.draw(player,background);
    this.moveAll(player,background);
}

var counter = 0;
Game.prototype.moveAll = function(player,background) {
    document.onkeyup = function(event) {
        
        if (event.key === jump && player.y == player.y0) {
          player.y -= 5;
          player.vy -= 10;
        } else if (event.key == 'a') {
            player.x +=2;
            counter +=1; 
        
        } else if (event.key == 's') {
            player.x +=2;
            counter +=1;
            
        }
        console.log(counter);
        this.draw(player,background);
      }.bind(this);
    
}
