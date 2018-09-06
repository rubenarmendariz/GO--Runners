
function Background(game,player) {
    this.game = game;
    this.player = player;
    this.positionFrame = 0;
    this.vallaindex = 0;
    this.wHurdles = 160;
    this.hHurdles = 569;
  
    var images = {
        road: 'images/road.png',
        garden: 'images/cesped.png',
        publi: 'images/publi.png',
        grada: 'images/grada.png',
        gradaTop: 'images/grada-top.png',
        sky:'images/sky.png',
        score:'images/score.png',
        text:'images/200.png',
        hurdles: 'images/hurdles-2.png'
    };

    this.loadedImages = {};
    var that = this;
    Object.keys(images).forEach( function(e) {
        var imagen = new Image();
        imagen.src = images[e];
        that.loadedImages[e] = imagen;
    });  

    
}


//draw para pintar la primera vez sino hago draw2 pierdo imagen de fondo
Background.prototype.draw = function () {

};

Background.prototype.draw2 = function () {
    var img = this.loadedImages;
    var ctx = this.game.ctx;
    var frm = this.positionFrame;
    var cWidth = this.game.canvas.width;
    for(var i=0; i<13 ;i++){           
        ctx.drawImage(img.publi, i*80, 280, 80, 10);
        ctx.drawImage(img.grada, frm+i*80, 290, 80, 50);
        ctx.drawImage(img.grada, frm+i*80+cWidth, 290, 80, 50);
        ctx.drawImage(img.publi, i*80, 340, 80, 100);
        ctx.drawImage(img.garden, frm+i*80, 440, 80, 10);
        ctx.drawImage(img.garden, frm+i*80+cWidth, 440, 80, 10);
        ctx.drawImage(img.garden, frm+i*80, 550, 80, 100);
        ctx.drawImage(img.garden, frm+i*80+cWidth, 550, 80, 100);
        ctx.drawImage(img.road, 0+i*80, 450, 80, 100);
        ctx.drawImage(img.road, 0+i*80, 650, 80, 100);
        
    }
        
    ctx.drawImage(img.sky, frm, 0, 1000, 280);
    ctx.drawImage(img.sky, frm+cWidth, 0, 1000, 280);
    ctx.drawImage(img.score,50,20,900,240)
    ctx.drawImage(img.text, frm+275, 375, 500,15)
    ctx.drawImage(img.text, frm+275+cWidth, 375, 500,15)
    //ctx.drawImage(this.hurdles, frm+1000, 569, 80, 194);
    
    //Valla levantada
    
    ctx.drawImage(img.hurdles,41*this.vallaindex,0,41,46,frm+1000, this.hHurdles, this.wHurdles, 194);

    this.moveFrame();
    // this.player.draw()
};

Background.prototype.moveFrame = function() {
   if (this.positionFrame < -this.game.canvas.width) {
        this.positionFrame = 0;
   }
}


Background.prototype.hurdlesFrame = function(isCollision) {    
    if (isCollision) {
         this.vallaindex = 1;

        } else { 
            this.vallaindex = 0;
    }
}