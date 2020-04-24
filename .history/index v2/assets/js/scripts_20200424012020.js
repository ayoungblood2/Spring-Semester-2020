
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];


document.onmousemove = function(e){
    document.getElementById("coords").innerHTML = "you're here ("+e.clientX+","+e.clientY+")";
    document.getElementById("coords").style.top = e.clientY + 10 + "px";
    document.getElementById("coords").style.left = e.clientX + 10 + "px";
 
}

// image sources in array. image[0] will have first image src, image[3] will have last src
var images = [
    "/index v2/classes/core/project1/Avery_Portmanteu_BW.png",
    "/index v2/classes/core/project1/Avery_Slang_BW.png",
    "/index v2/classes/core/project1/Avery_Schadenfreude_BW.png",
    "/index v2/classes/core/project1/Alvin Retronym_BW.png",
    "/index v2/classes/core/project1/Alvin001_BW.png",
    "/index v2/classes/core/project1/Alvin002_BW.png",
    "/index v2/classes/core/project1/COLLUDE_MC_BW.png",
    "/index v2/classes/core/project1/emergent_photo_Mengjie_BW.png",
    "/index v2/classes/core/project1/FOMO_MC_BW.png",
    "/index v2/classes/core/project1/Gaslighting_Photo_Mao_BW.png",
    "/index v2/classes/core/project1/Iterate_Print_Cat_BW.png",
    "/index v2/classes/core/project1/Literal_Hannah_Printed_BW.png",
    "/index v2/classes/core/project1/Meta_Photo_Cat_BW.png",
    "/index v2/classes/core/project1/Oxymoron_Print_Mao_BW.png",
  ]
  
  var images2 = [
    "/index v2/classes/core/project1/book/cover2-color.png",
    "/index v2/classes/core/project1/book/gif/24words-v1.gif",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview55.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview2.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview3.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview4.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview5.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview6.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview7.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview8.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview9.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview10.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview11.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview12.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview13.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview14.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview15.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview16.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview17.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview18.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview19.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview20.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview21.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview40.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview40.jpg",
    "/index v2/classes/core/project1/finals/spreads/word-book-finalreviews-preview41.jpg",
  ]
  
  var step = 0;
  changeImage(); // set first image src after page loads
   
  
  function changeImage() {
    if (!images.length) return; // images.length is number of items in array (should be 4)

    document.getElementById('imgClickAndChange').src = images[step];

    step++;
    if (step == images.length) step = 0;
  }

  changeImage2();

  // set first image src after page loads

  function changeImage2() {
    if (!images2.length) return; // images.length is number of items in array (should be 4)

    document.getElementById('imgClickAndChange2').src = images2[step];

    step++;
    if (step == images2.length) step = 0;
  }