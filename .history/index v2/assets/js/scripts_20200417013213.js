let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];

//   

document.onmousemove = function(e){
    document.getElementById("coords").innerHTML = "you're here ("+e.clientX+","+e.clientY+")";
    document.getElementById("coords").style.top = e.clientY + 10 + "px";
    document.getElementById("coords").style.left = e.clientX + 10 + "px";
}



for (let anyLink of document.getElementsByTagName("a")){
    anyLink.onclick = function(e){
        e.preventDefault();  
       
         if (e.srcElement.classList.contains("view-more") ){
            this.classList.toggle("view-less");
            document.getElementById(this.dataset.target).classList.toggle("viewing-less"); }   
        }
    }




for (let viewMoreLink of document.getElementsByClassName("view-more")){
    viewMoreLink.addEventListener("you're here", function(e){
        e.preventDefault();
        this.classList.toggle("view-less");
        document.getElementById(this.dataset.target).classList.toggle("viewing-less");
    });
}
