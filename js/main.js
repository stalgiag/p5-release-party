const box = document.getElementById("info-box");
const flyer = document.getElementById("flyer");
const infoL = document.getElementById("info-tile-container-left");
const infoR = document.getElementById("info-tile-container-right");
let mouseIsOver = true, isMobile = false;
let mX, mY;

window.onload = () => {
   if (typeof window.orientation !== 'undefined') {
      isMobile = true;
      box.style.visibility = "visible"
      infoR.style.visibility = "hidden";
      infoL.style.visibility = "hidden";
      return;
   }
}

let mouseEnter = function (xOffset) {
   box.scrollTop = 0;
   mouseIsOver = true;
   box.style.visibility = "visible";
   box.style.left = mX + xOffset + 'px';
   const overflow = (mY + box.offsetHeight) - document.documentElement.scrollHeight;
   if (overflow > 0) {
      box.style.top = mY - overflow + 'px';
   } else {
      box.style.top = mY + 'px';
   }
}

infoR.onmouseenter = () => {
   mouseEnter(-400);
}
infoL.onmouseenter = () => {
   mouseEnter(-100);
}

flyer.onmouseenter = function () {
   if (isMobile) { return; }
   mouseIsOver = false;
   box.style.visibility = "hidden"
};

// flyer.onmouseout = function () {
//    if (isMobile) { return; }

// }

window.addEventListener('mousemove', function (e) {
   if (isMobile) { return; }
   mX = e.pageX;
   mY = e.pageY;
});