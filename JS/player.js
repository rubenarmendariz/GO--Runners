function Player(game) {
    this.game = game;
    this.player = new Image();
    this.player.src = 'images/Player1.png'

  // Posicion
  this.x = this.game.canvas.width * 0,05;
  //posicion suelo
  this.y0 = this.game.canvas.height * 0.79;
  this.y = this.y0;

  // Nº de imagenes
  this.player.frames = 7;
  this.player.frameIndex = 0;
  //medidas de personaje
  this.w = 50;
  this.h = 120;
  

}

Player.prototype.draw = function(){
    this.game.ctx.drawImage(
        this.player,
        this.player.frameIndex * Math.floor(this.player.width / this.player.frames),
        0,
        Math.floor(this.player.width / this.player.frames),
        this.player.height,
        this.x,
        this.y,
        this.w,
        this.h
      );
}

Player.prototype.move = function() {
    // Aumenta la velocidad en el eje y.
    var gravity = 0.4;
  
    // solo salta cuando el personaje está en el suelo
    if (this.y >= this.y0) {
      this.vy = 1;
      this.y = this.y0;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }
    console.log(this.x)
  };

  var jump = "w";
  var runA = "a";
  var runS ="b";

  Player.prototype.setListeners = function() {
   
  };