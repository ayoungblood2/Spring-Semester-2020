
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];


document.onmousemove = function(e){
    document.getElementById("coords").innerHTML = "you're here ("+e.clientX+","+e.clientY+")";
    document.getElementById("coords").style.top = e.clientY + 10 + "px";
    document.getElementById("coords").style.left = e.clientX + 10 + "px";
 
}

// image sources in array. image[0] will have first image src, image[3] will have last src
var images = [
    "/index v2/classes/core/project1/book/Screen Shot 2020-04-16 at 5.20.37 PM.png",
    "/index v2/classes/core/project1/book/Screen Shot 2020-04-16 at 5.20.47 PM.png",
    "/index v2/classes/core/project1/Avery_Portmanteu_BW.png",
    "/index v2/classes/core/project1/Avery_Slang_BW.png,"
    "/index v2/classes/core/project1/Avery_Schadenfreude_BW.png"
  ]
  
  var step = 0;
  changeImage(); // set first image src after page loads
  
  function changeImage() {
    // exit if no images, or step = number of items in array (4)
    if (typeof images == "undefined" ||  step == images.length) return;     
  
    document.getElementById('imgClickAndChange').src = images[step];
    step++;
  }