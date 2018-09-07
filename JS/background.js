
function Background(game, player) {
    this.game = game;
    this.player = player;
    this.positionFrame = 0;
    this.vallaindex = 0;
    this.wHurdles = 160;
    this.hHurdles = 569;
    this.endIndex = 0;
    this.wEnd = 160;
    this.hEnd = 520;
    this.counter = -1;
    this.end = 8; //Distancio meta
    this.sumHurdles = true;
    var images = {
        road: 'images/road.png',
        garden: 'images/cesped.png',
        publi: 'images/publi.png',
        grada: 'images/grada.png',
        gradaTop: 'images/grada-top.png',
        sky: 'images/sky.png',
        score: 'images/score.png',
        text: 'images/200.png',
        hurdles: 'images/hurdles-2.png',
        end: 'images/end.png'
    };

    this.loadedImages = {};
    var that = this;
    Object.keys(images).forEach(function (e) {
        var imagen = new Image();
        imagen.src = images[e];
        that.loadedImages[e] = imagen;
    });
}


Background.prototype.draw2 = function () {
    var img = this.loadedImages;
    var ctx = this.game.ctx;
    var frm = this.positionFrame;
    var cWidth = this.game.canvas.width;
    for (var i = 0; i < 13; i++) {
        ctx.drawImage(img.publi, i * 80, 280, 80, 10);
        ctx.drawImage(img.grada, frm + i * 80, 290, 80, 50);
        ctx.drawImage(img.grada, frm + i * 80 + cWidth, 290, 80, 50);
        ctx.drawImage(img.publi, i * 80, 340, 80, 100);
        ctx.drawImage(img.garden, frm + i * 80, 440, 80, 10);
        ctx.drawImage(img.garden, frm + i * 80 + cWidth, 440, 80, 10);
        ctx.drawImage(img.garden, frm + i * 80, 550, 80, 100);
        ctx.drawImage(img.garden, frm + i * 80 + cWidth, 550, 80, 100);
        ctx.drawImage(img.road, 0 + i * 80, 450, 80, 100);
        ctx.drawImage(img.road, 0 + i * 80, 650, 80, 100);
    }

    ctx.drawImage(img.sky, frm, 0, 1000, 280);
    ctx.drawImage(img.sky, frm + cWidth, 0, 1000, 280);
    ctx.drawImage(img.score, 50, 20, 900, 240)
    ctx.drawImage(img.text, frm + 275, 375, 500, 15)
    ctx.drawImage(img.text, frm + 275 + cWidth, 375, 500, 15)

    if (this.counter == this.end) {
        ctx.drawImage(img.end, 24 * this.endIndex, 0, 25, 41, frm + cWidth, 574, 100, 177)
    } else {
        ctx.drawImage(img.hurdles, 41 * this.vallaindex, 0, 41, 46, frm + 1000, this.hHurdles, this.wHurdles, 194);
        if (this.sumHurdles && this.player.x < frm + 1000) {
            this.counter += 1;
            this.sumHurdles = false;

        } if (this.sumHurdles == false && this.player.x > frm + 1000) {
            this.sumHurdles = true;
            
        }
    }

    this.moveFrame();

};

Background.prototype.moveFrame = function () {
    if (this.positionFrame < -this.game.canvas.width) {
        this.positionFrame = 0;
    }
}


Background.prototype.hurdlesFrame = function (isCollision) {
    if (isCollision) {
        this.vallaindex = 1;
        this.endIndex = 1;
    } else {
        this.vallaindex = 0;
        this.endIndex = 0
    }
}
