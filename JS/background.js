
function Background(game,player) {
    this.game = game;
    this.player = player;

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
    //this.x = 0;
    //this.y = 0;

}
Background.prototype.draw = function () {
    this.sky.onload = function () {
        this.draw2();
            this.player.draw()
    }.bind(this);
};

Background.prototype.draw2 = function () {
        for(i=0; i<13 ;i++){           
            this.game.ctx.drawImage(this.publiUpper,     0+i*80, 280, 80, 10);
            this.game.ctx.drawImage(this.grada,          0+i*80, 290, 80, 50);
            this.game.ctx.drawImage(this.publi,          0+i*80, 340, 80, 100);
            this.game.ctx.drawImage(this.garden2,        0+i*80, 440, 80, 10);
            this.game.ctx.drawImage(this.img2,           0+i*80, 450, 80, 100);
            this.game.ctx.drawImage(this.garden,         0+i*80, 550, 80, 100);
            this.game.ctx.drawImage(this.img,            0+i*80, 650, 80, 100);
            }
            this.game.ctx.drawImage(this.sky,0, 0, 1000, 280);
            // this.player.draw()
};
