//import "style.css";

const body = document.querySelector("body");

function colorBody() {
  const width = window.innerWidth;
  //console.log(width);

  if (width < 840) {
    body.style.backgroundColor = "blue";
  } else if (width >= 840 && width < 1200) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

function init() {
    window.addEventListener("resize", colorBody);
}

init();