
function Game(canvadId) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.counter = 0;
};

Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.draw2();
    this.player.draw();
};

Game.prototype.start=function() {
    this.player = new Player(this);
    this.background = new Background(this,this.player);
    this.background.draw();
    this.draw();
    this.moveAll();
    this.framesCounter++;
 };
    
var jump = "w";
var runA = "a";
var runS ="b";
Game.prototype.moveAll = function() {
    document.onkeyup = function(event) {
        
        if (event.key === jump && this.player.y == this.player.y0) {
            //this.player.player = this.player.jump;
            this.player.player.src = 'images/jump1.png';
            this.player.y -= 100;
            this.player.vy -= 10;
            this.background.positionFrame -= 40;
            this.player.isJumping = true;
            this.draw();

            setTimeout(function() {
                
                this.player.player.src = 'images/player2.png';
                this.player.y += 100;
                this.background.positionFrame -= 40;
                this.player.isJumping = false;
                this.draw();
            }.bind(this), 500);
        } else if (event.key == 'a') {
            this.player.x +=3;
            this.counter +=2; 
            this.background.positionFrame -= 10;
            this.draw();

        
        } else if (event.key == 's') {
            this.player.x +=3;
            this.counter +=2;
            this.background.positionFrame -= 10;
            this.draw();
            
        }
    }.bind(this);
   
    
};

