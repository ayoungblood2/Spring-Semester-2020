let avgX = [];
let avgY = [];
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];

//   

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
