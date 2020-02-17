const box = document.getElementById("info-box");
const flyer = document.getElementById("flyer");
let mouseIsOver = true, isMobile = false;
let mX, mY;

window.onload = () => {
   if (typeof window.orientation !== 'undefined') {
      isMobile = true;
      box.style.visibility = "visible"
      return;
   }
}

flyer.onmouseenter = function () {
   if (isMobile) { return; }
   mouseIsOver = true;
   box.style.visibility = "hidden"
};

flyer.onmouseout = function () {
   if (isMobile) { return; }
   mouseIsOver = false;
   box.style.visibility = "visible"
   box.style.left = mX;
   box.style.top = mY;
}

window.addEventListener('mousemove', function (e) {
   if(isMobile){return;}
   mX = e.pageX - 100 + 'px';
   mY = e.pageY + 'px';
});