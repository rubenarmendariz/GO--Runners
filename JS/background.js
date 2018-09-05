
function Background(game,player) {
    this.game = game;
    this.player = player;
    
    this.positionFrame = 0;
    //console.log(this.positionFrame);
    this.img = new Image();
    this.img.src = 'images/road.png';
    this.garden = new Image();
    this.garden.src = 'images/cesped.png';
    this.img2 = new Image();
    this.img2.src = 'images/road.png';
    this.garden2 = new Image();
    this.garden2.src = 'images/cesped.png';
    this.publi = new Image();
    this.publi.src = 'images/publi.png';
    this.grada = new Image();
    this.grada.src = 'images/grada.png';
    this.publiUpper = new Image();
    this.publiUpper.src = 'images/grada-top.png';
    this.sky = new Image();
    this.sky.src = 'images/sky.png'
    this.score = new Image();
    this.score.src = 'images/score.png'
    this.text = new Image();
    this.text.src = 'images/200.png'
}


//draw para pintar la primera vez sino hago draw2 pierdo imagen de fondo
Background.prototype.draw = function () {
    this.text.onload = function () {//pongo penultima imagen.onload para que me cargue todas....sino falla
        this.draw2();
        this.player.draw()
    }.bind(this);
};

Background.prototype.draw2 = function () {
    for(i=0; i<13 ;i++){           
        this.game.ctx.drawImage(this.publiUpper, 0+i*80, 280, 80, 10);
        this.game.ctx.drawImage(this.grada, this.positionFrame+i*80, 290, 80, 50);
        this.game.ctx.drawImage(this.grada, this.positionFrame+i*80+this.game.canvas.width, 290, 80, 50);
        this.game.ctx.drawImage(this.publi, 0+i*80, 340, 80, 100);
        this.game.ctx.drawImage(this.garden2, this.positionFrame+i*80, 440, 80, 10);
        this.game.ctx.drawImage(this.garden2, this.positionFrame+i*80+this.game.canvas.width, 440, 80, 10);
        this.game.ctx.drawImage(this.img2, 0+i*80, 450, 80, 100);
        this.game.ctx.drawImage(this.garden, this.positionFrame+i*80, 550, 80, 100);
        this.game.ctx.drawImage(this.garden, this.positionFrame+i*80+this.game.canvas.width, 550, 80, 100);
        this.game.ctx.drawImage(this.img, 0+i*80, 650, 80, 100);
        }
        this.game.ctx.drawImage(this.sky, this.positionFrame, 0, 1000, 280);
        this.game.ctx.drawImage(this.sky, this.positionFrame+this.game.canvas.width, 0, 1000, 280);
        this.game.ctx.drawImage(this.score,50,20,900,240)
        this.game.ctx.drawImage(this.text, this.positionFrame+275, 375, 500,15)
        this.game.ctx.drawImage(this.text, this.positionFrame+275+this.game.canvas.width, 375, 500,15)
        this.moveFrame();
        // this.player.draw()
};

Background.prototype.moveFrame = function() {
   if (this.positionFrame < -this.game.canvas.width) { this.positionFrame = 0;
  };
  
}