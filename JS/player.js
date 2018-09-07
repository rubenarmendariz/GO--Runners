function Player(game) {
    this.game = game;
    this.player = new Image();
    this.player.src = 'images/player2.png'
    this.jump = new Image();
    this.jump.src = 'images/jump1.png'
    this.isJumping = false;
  // Posicion
  this.x = this.game.canvas.width * 0.05;
  //posicion suelo
  this.y0 = this.game.canvas.height * 0.73;
  this.y = this.y0;

  // Nº de imagenes
  this.player.frames = 7;
  this.player.frameIndex = 0;
  //medidas de personaje
  this.w = 130;
  this.h = 180;
   
}

Player.prototype.draw = function(){
    if(!this.isJumping) {

    this.game.ctx.drawImage(this.player,
        this.player.frameIndex * Math.floor(this.player.width / this.player.frames),
        0,
        Math.floor(this.player.width / this.player.frames),
        this.player.height,
        this.x,
        this.y,
        this.w,
        this.h
      );
      //this.animateImg();
    } else {
      this.game.ctx.drawImage(this.player, this.x, this.y, this.w, this.h);
    }
};


  

  Player.prototype.animateImg = function() {
    if (this.game.counter % 1 === 0) {
         this.player.frameIndex += 1;
  
    //cuando llegue a la ultima posicion volver al principio
      if (this.player.frameIndex > 6) this.player.frameIndex = 1;
    }
  };