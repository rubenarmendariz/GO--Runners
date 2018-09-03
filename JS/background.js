
function Background(game) {
    this.game = game;

    this.img = new Image();
    this.img.src = 'images/road.png';
    this.garden = new Image();
    this.garden.src = 'images/cesped.png';
    this.grada = new Image();
    this.grada.src= 'images/grada.png';
    //this.x = 0;
    //this.y = 0;

}
Background.prototype.draw = function () {
    this.img.onload = function () {
        for(i=0; i<13 ;i++){
            this.game.ctx.drawImage(this.grada, 0+i*80, 220, 80, 80);
            this.game.ctx.drawImage(this.garden, 0+i*80, 300, 80, 150);
            this.game.ctx.drawImage(this.img, 0+i*80, 450, 80, 150);
            
            
            

        }
    }.bind(this);
};


