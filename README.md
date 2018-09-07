# GO--Runners
Project #1: The Game



¿Cuál ha sido el mayor problema técnico al que me he enfrentado?

VALLAS Vs META

----GAME---

COLISION
Game.prototype.isCollision = function () {
    var collision = false;
    if (this.player.x > this.background.positionFrame + 1000
        && this.player.x < (this.background.positionFrame + 1000 + this.background.wHurdles)
        && this.player.y + 23 >= this.background.hHurdles) {
        if (this.background.counter == this.background.end) {
            clearInterval(this.interval);
            this.background.endIndex = 1; ********
            this.background.draw2();
            this.player.draw();
            this.end.play();
            
            } else {
            this.background.hurdlesFrame(true)
            this.player.x -= 3;
        }
    } else {
        this.score++;
        this.background.hurdlesFrame(false)
    }
};

APARICION DE META
------BACKGROUND-----

this.counter = -1
This.sumHurdles = True




 if (this.counter == this.end) {
        ctx.drawImage(img.end, 24 * this.endIndex, 0, 25, 41, frm + cWidth, 574, 100, 177) ¡¡¡meta!!!+++++
    } else {
        ctx.drawImage(img.hurdles, 41 * this.vallaindex, 0, 41, 46, frm + 1000, this.hHurdles, this.wHurdles, 194);
        if (this.sumHurdles && this.player.x < frm + 1000) {
            this.counter += 1;
            this.sumHurdles = false;  ******ya no suma mas!

        } if (this.sumHurdles == false && this.player.x > frm + 1000) { ***** hagamos que entre de nuevo
            this.sumHurdles = true;
            
        }
    }
    
    
    
    
    ¿Cuál ha sido el mayor problema técnico al que me he enfrentado?
    
    
    Cuenta atrás de inicio, 2 players, animacion grada.
    
    
