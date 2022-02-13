let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let s = 1;

setInterval(function(){
    var eTopPos = div2.offsetTop;
    div2.style.top = (eTopPos + 10) + 'px';

    var eLeftPos = div1.offsetLeft;
    div1.style.left = (eLeftPos + 10) + 'px';
}, 1000);
