
function Game(canvadId) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.counter = 1;
    this.score = 0;
    this.reset();
    this.fps = 60;
    this.framesCounter = 0;
    this.soundGame = new Audio();
    this.soundGame.src = "audio/game.mp3"
    this.soundGame.play();
    this.sfx = new Audio();
    this.sfx.src = "audio/sfx.mp3";
    this.sec = 0;
    this.time = this.sec + " : " + this.framesCounter;
};


Game.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.draw2();
    this.player.draw();
};


Game.prototype.reset = function () {
    this.player = new Player(this);
    this.background = new Background(this, this.player);
};


Game.prototype.start = function () {
    this.background.draw2();
    this.interval = setInterval(function () {
        this.draw();
        this.isCollision();
        this.moveAll();
        this.framesCounter++;
        this.ctx.fillText(this.score, 200, 108);
        this.ctx.fillText(this.time, 657, 175);
        this.time = this.sec + ":" + this.framesCounter;
        this.ctx.fillStyle = 'white';
        this.ctx.font = "40px arcadeclassic"
        if (this.framesCounter > 99) {
            this.framesCounter = 0
            this.sec++
        }
    }.bind(this), 1000 / this.fps);
};


var jump = "w";
var runA = "a";
var runS = "b";
Game.prototype.moveAll = function () {
    document.onkeyup = function (event) {

        if (event.key === jump && this.player.y == this.player.y0) {
            //this.player.player = this.player.jump;
            this.player.player.src = 'images/jump1.png';
            this.player.y -= 125;
            this.player.vy -= 10;
            this.background.positionFrame -= 50;
            this.player.isJumping = true;
            this.player.animateImg();

            setTimeout(function () {
                this.player.player.src = 'images/player2.png';
                this.player.y += 125;
                this.background.positionFrame -= 50;
                this.player.isJumping = false;
                this.player.animateImg();

            }.bind(this), 600);

        } else if (event.key == 'a') {
            this.player.x += 2;
            this.counter += 2;
            this.background.positionFrame -= 35;
            this.player.animateImg();


        } else if (event.key == 's') {
            this.player.x += 2;
            this.counter += 2;
            this.background.positionFrame -= 35;
            this.player.animateImg();
        }
    }.bind(this);
};


Game.prototype.isCollision = function () {
    var collision = false;
    if (this.player.x > this.background.positionFrame + 1000
        && this.player.x < (this.background.positionFrame + 1000 + this.background.wHurdles)
        && this.player.y + 23 >= this.background.hHurdles) {
        if (this.background.counter == this.background.end) {
            clearInterval(this.interval);
            this.background.endIndex = 1;
            this.background.draw2();
            this.player.draw();
            
            


        } else {
            this.background.hurdlesFrame(true)
            this.player.x -= 3;
        }
    } else {
        this.score++;
        this.background.hurdlesFrame(false)
    }
};
