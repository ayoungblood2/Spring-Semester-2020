let avgX = [];
let avgY = [];
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];
let strokeWidth = 65;
let lines = 0;
// let titles = ["(ï¾‰â—•ãƒ®â—•)ï¾‰*:ï½¥ï¾Ÿâœ§", "(â˜žï¾Ÿâˆ€ï¾Ÿ)â˜ž", "à¼¼ ã¤ â—•_â—• à¼½ã¤", "(â–€Ì¿Ä¹Ì¯â–€Ì¿ Ì¿)", "á•¦(Ã’_Ã“Ë‡)á•¤", "â˜œ(Ëšâ–½Ëš)â˜ž", "â˜œ(âŒ’â–½âŒ’)â˜ž", "(ãƒŽà² ç›Šà² )ãƒŽå½¡â”»â”â”»"];
let palette = ["#ff3030", "#ffff00", "#00b05b"];
let randomColor = palette[Math.floor(Math.random() * palette.length)];

//   document.addEventListener("DOMContentLoaded",function(){
//     let node = document.querySelector('.preload-transitions');
//     node.classList.remove('preload-transitions');
//   });

// document.documentElement.style.setProperty('--primary', randomColor);
// if (randomColor == "#ffff00"){
//     document.getElementById("coords").style.color = 'black';
// }


// document.title = titles[Math.floor(Math.random() * titles.length)];

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
    document.getElementById("coords").innerHTML = "you're here ("+e.clientX+","+e.clientY+")";
    document.getElementById("coords").style.top = e.clientY + 10 + "px";
    document.getElementById("coords").style.left = e.clientX + 10 + "px";

    // avgX.push(e.clientX);
    // avgY.push(e.clientY);
    // document.getElementById("avg").style.left = findAvg(avgX) + "px";
    // document.getElementById("avg").style.top = findAvg(avgY) + "px";
}

document.onclick = function(e){
    if (e.target.tagName != 'A'){

        document.getElementById("save").style.opacity = 1;

        document.onkeypress = function(){
            var x = event.which || event.keyCode;
            if (x==115){
                saveImage();
            }
            // console.log("The Unicode value is: " + x);
        }
        let newDiv = document.createElement("DIV");
        newDiv.classList.add("point");
        newDiv.style.left = e.clientX - 4 + "px";
        newDiv.style.top = e.clientY - 4 + "px";
        document.body.appendChild(newDiv);

        let newCoords = document.createElement("DIV");
        newCoords.classList.add("coords");
        newCoords.innerHTML = "("+e.clientX+","+e.clientY+")";
        newCoords.style.top = e.clientY + 10 + "px";
        newCoords.style.left = e.clientX + 10 + "px";
        document.body.appendChild(newCoords);

        console.log(lines);
        if(lines >= 10){
            document.getElementById("svg").innerHTML = '';
        }


// for (let anyLink of document.getElementsByTagName("a")){
//     anyLink.onclick = function(e){
//         e.preventDefault();  
//         if (e.srcElement.id == "save"){
//             saveImage();
//         } else if (e.srcElement.classList.contains("collapse") ){
//             let imagesDivId = this.getAttribute("data-target");
//             this.classList.toggle("show-minus");
//             document.getElementById(imagesDivId).classList.toggle("hide");
//         } else if (e.srcElement.classList.contains("view-more") ){
//             this.classList.toggle("view-less");
//             document.getElementById(this.dataset.target).classList.toggle("viewing-less");
//         } else {
//             document.getElementsByClassName("active")[0].classList.remove("active");
//             if (this.parentElement.classList.contains("nav") || this.parentElement.classList.contains("footer")){
//                 document.getElementsByTagName("body")[0].classList.add("transition"); 
//             }    
//             this.classList.add("active");            // prevent default anchor behavior
//             var goTo = this.getAttribute("href"); // store anchor href
//             let _this = this;
//             // do something while timeOut ticks ... 

//             setTimeout(function(){
//                 // window.location = goTo;
//                 if (_this.getAttribute("target") == "_blank"){
//                     window.open(
//                         goTo,
//                         '_blank' // <- This is what makes it open in a new window.
//                     );
//                 } else {
//                     window.location = goTo;
//                 }
//             }, 800); 
//         }
//     }
// }



for (let viewMoreLink of document.getElementsByClassName("view-more")){
    viewMoreLink.addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle("view-less");
        document.getElementById(this.dataset.target).classList.toggle("viewing-less");
    });
}