var i=0;
var s=10;
var images =[];
var time = 5000;
 //image list
 images[0] = 'image1p.jpg';
 images[1] = 'image2p.jpg';
 images[2] = 'image3p.jpg';
 images[3] = 'image4p.jpg';
 images[4] = 'image5p.jpg';
 //countdown
var sec = setInterval(function(){
    s--;
    document.getElementById("timer").textContent = s;
    if(s <=0){
        clearInterval(sec);
    }
},1000)

 //function to change image
 function changeImg(){
    document.slide.src =images[i];
    if(i<images.length -1&&s<=0){
       i++; 
    } else{
        i=0;
    }
    setTimeout("changeImg()", time);
 }
 window.onload=changeImg;
 
