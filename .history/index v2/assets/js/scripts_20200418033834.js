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





// var btn = document.querySelector('button');
// // var svg = document.querySelector('svg');
// var svg = document.getElementById('svg');
// var canvas = document.querySelector('canvas');

// function triggerDownload (imgURI) {
//   var evt = new MouseEvent('click', {
//     view: window,
//     bubbles: false,
//     cancelable: true
//   });

//   var a = document.createElement('a');
//   a.setAttribute('download', 'MY_COOL_IMAGE.png');
//   a.setAttribute('href', imgURI);
//   a.setAttribute('target', '_blank');

//   a.dispatchEvent(evt);
// }

// btn.addEventListener('click', function () {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   var data = (new XMLSerializer()).serializeToString(svg);
//   var DOMURL = window.URL || window.webkitURL || window;

//   var img = new Image();
//   var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
//   var url = DOMURL.createObjectURL(svgBlob);

//   img.onload = function () {
//     ctx.drawImage(img, 0, 0);
//     DOMURL.revokeObjectURL(url);

//     var imgURI = canvas
//         .toDataURL('image/png')
//         .replace('image/png', 'image/octet-stream');

//     triggerDownload(imgURI);
//   };

//   img.src = url;
// });




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
//         } 
//             if (this.parentElement.classList.contains("nav") || this.parentElement.classList.contains("footer")){
//                 document.getElementsByTagName("body")[0].classList.add("transition"); 
//             }    
           
//     }}






function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}


// for (let viewMoreLink of document.getElementsByClassName("view-more")){
//     viewMoreLink.addEventListener("click", function(e){
//         e.preventDefault();
//         this.classList.toggle("view-less");
//         document.getElementById(this.dataset.target).classList.toggle("viewing-less");
//     });
// }

function saveImage(){
            let w = Math.max(document.documentElement.clientWidth, window.innerWidth);
            let h = Math.max(document.documentElement.clientHeight, window.innerHeight);

            html2canvas(document.body, {
            width: w,
            height: h
            }).then(function(canvas) {
                // document.body.appendChild(canvas);
                // canvas.backgroundColor = "#eeeeee";                
                var svg = document.getElementById('svg');
                var img = document.querySelector('img');
                // var canvas = document.querySelector('canvas');

                // get svg data
                var xml = new XMLSerializer().serializeToString(svg);

                // make it base64
                var svg64 = btoa(xml);
                var b64Start = 'data:image/svg+xml;base64,';

                // prepend a "header"
                var image64 = b64Start + svg64;
                // set it as the source of the img element
                img.src = image64;

                // draw the image onto the canvas
                canvas.getContext('2d').drawImage(img, 0, 0);

                saveAs(canvas.toDataURL(), 'img-final-final-final.png');
            });   
}