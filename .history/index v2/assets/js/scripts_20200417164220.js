let avgX = [];
let avgY = [];
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];
let strokeWidth = 65;
let lines = 0;
let palette = ["#ff3030", "#ffff00", "#00b05b"];
let randomColor = palette[Math.floor(Math.random() * palette.length)];

//   document.addEventListener("DOMContentLoaded",function(){
//     let node = document.querySelector('.preload-transitions');
//     node.classList.remove('preload-transitions');
//   });

document.documentElement.style.setProperty('--primary', randomColor);
if (randomColor == "#ffff00"){
    document.getElementById("coords").style.color = 'black';
}


if (document.getElementById('svg') != null){

document.getElementById("svg").setAttribute("viewBox" , "0 0 " + window.innerWidth + " " + window.innerHeight);
document.getElementById("svg").setAttribute("height", window.innerHeight);
document.getElementById("svg").setAttribute("width", window.innerWidth); 

window.onresize = function(){
    document.getElementById("svg").setAttribute("viewBox" , "0 0 " + window.innerWidth + " " + window.innerHeight);
    document.getElementById("svg").setAttribute("height", window.innerHeight);
    document.getElementById("svg").setAttribute("width", window.innerWidth); 
}

}


function findAvg(arr){
    sum = arr.reduce(function(a, b) { return a + b; });
    avg = sum / arr.length;
    return avg;
}

document.onmousemove = function(e){
    document.getElementById("coords").innerHTML = "click("+e.clientX+","+e.clientY+")";
    document.getElementById("coords").style.top = e.clientY + 10 + "px";
    document.getElementById("coords").style.left = e.clientX + 10 + "px";

    // avgX.push(e.clientX);
    // avgY.push(e.clientY);
    // document.getElementById("avg").style.left = findAvg(avgX) + "px";
    // document.getElementById("avg").style.top = findAvg(avgY) + "px";
}
