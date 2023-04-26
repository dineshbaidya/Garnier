console.log('script is running');
const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll('.icons');
const firstImg = carousel.querySelectorAll('img')[0];

const prevDiv = document.getElementById('prev-icon-div');

const nextDiv = document.getElementById('next-icon-div');

console.log(prevDiv);console.log(nextDiv);

const scroll = firstImg.offsetWidth +8;
const scrollPrev = firstImg.offsetWidth+8;
let scrollWidth = carousel.scrollWidth - carousel.offsetWidth;
let firstImgWidth = firstImg.offsetWidth+8;

window.onload = function() {
arrowIcons[0].style.display= carousel.scrollLeft == 0 ? "none" : "block";
prevDiv.style.backgroundImage= carousel.scrollLeft == 0 ? "linear-gradient(grey,grey)" : "linear-gradient(rgb(125, 197, 6),rgb(137, 212, 12) )";
}

const showHideIcons = () =>{
arrowIcons[0].style.display= carousel.scrollLeft == 0 ? "none" : "block";
prevDiv.style.backgroundImage= carousel.scrollLeft == 0 ? "linear-gradient(grey,grey)" : "linear-gradient(rgb(125, 197, 6),rgb(137, 212, 12) )";
arrowIcons[1].style.display= carousel.scrollLeft == scrollWidth ? "none" : "block";
nextDiv.style.backgroundImage= carousel.scrollLeft == scrollWidth ? "linear-gradient(grey,grey)" : "linear-gradient(rgb(125, 197, 6),rgb(137, 212, 12) )";
}
function nextClick() {
carousel.scrollLeft += scroll*5;
setInterval(()=> showHideIcons(), 100);
}
function prevClick() {
if(carousel.scrollLeft==2326){
carousel.scrollLeft -= scrollPrev*3;
}else{
carousel.scrollLeft -= scrollPrev*5;
setInterval(()=> showHideIcons(), 100);
}
}

console.log(carousel.scrollLeft);