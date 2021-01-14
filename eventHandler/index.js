const title = document.querySelector('h1');
const colors = ["purple", "orange", "pink", "skyblue"];

const superEventHandler = {
    mouseHere: function(){
        title.style.color = colors[0];
        title.innerHTML = "The mouse is here!";
    },
    mouseOver: function(){
        title.style.color = colors[1];
        title.innerHTML = "The mouse is over!";
    },
    resizeWindow: function(){
        title.style.color = colors[2];
        title.innerHTML = "You just resized the window!";
    },
    rightClicked: function(){
        title.style.color = colors[3];
        title.innerHTML = "You just clicked with right click button!";
    }
}

title.addEventListener("mouseenter", superEventHandler.mouseHere);
title.addEventListener("mouseleave", superEventHandler.mouseOver);
window.addEventListener("resize", superEventHandler.resizeWindow);
window.addEventListener("contextmenu", superEventHandler.rightClicked);