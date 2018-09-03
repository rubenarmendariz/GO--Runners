
function Background(game) {
    this.game = game;

    this.img = new Image();
    this.img.src = 'images/road.png';
    this.garden = new Image();
    this.garden.src = 'images/cesped.png';
    this.img2 = new Image();
    this.img2.src = 'images/road.png';
    this.garden2 = new Image();
    this.garden2.src = 'images/cesped.png';
    this.grada = new Image();
    this.grada.src= 'images/grada.png';
    //this.x = 0;
    //this.y = 0;

}
Background.prototype.draw = function () {
    this.img.onload = function () {
        for(i=0; i<13 ;i++){
            this.game.ctx.drawImage(this.grada,     0+i*80, 140, 80, 70);
            this.game.ctx.drawImage(this.garden2,    0+i*80, 210, 80, 30);
            this.game.ctx.drawImage(this.img2,      0+i*80, 240, 80, 120);
            this.game.ctx.drawImage(this.garden,    0+i*80, 360, 80, 120);
            this.game.ctx.drawImage(this.img,       0+i*80, 480, 80, 120);
            
            
            

        }
    }.bind(this);
};


