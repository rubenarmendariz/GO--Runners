window.onload = function() {
    
    
    document.getElementById('btn').addEventListener('click',function(){
      document.getElementById("game").id = "active";
      document.getElementById("btn").id = "none"
      var game = new Game("canvas"); 
      game.start();  
 
    })
  };