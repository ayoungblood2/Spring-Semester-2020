
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];


document.onmousemove = function(e){
    document.getElementById("coords").innerHTML = "you're here ("+e.clientX+","+e.clientY+")";
    document.getElementById("coords").style.top = e.clientY + 10 + "px";
    document.getElementById("coords").style.left = e.clientX + 10 + "px";
 
}





// ON MOUSE-HOVER IMAGES APPEAR

$(document).ready(function(){
    $("Nav-list").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });

  
  