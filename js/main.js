var box = document.getElementById("info-box");
var flyer = document.getElementById("flyer");
var mouseIsOver = true;

    flyer.onmouseenter = function()   {
        mouseIsOver = true;
        box.style.visibility = "hidden"
     };
     flyer.onmouseout = function()   {
        mouseIsOver = false;
        box.style.visibility = "visible"
     }

window.addEventListener('mousemove', function(e){
        box.style.left = e.pageX + "px";
        box.style.top = e.pageY + "px";
});