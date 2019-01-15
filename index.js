import anime from './node_modules/animejs/lib/anime.es.js';
import cloudSvg from "./assets/cloud.svg";

const cloudElement = document.createElement("span");
const clouds = document.querySelectorAll(".cloud").length;

cloudElement.setAttribute("class", "cloud");
cloudElement.innerHTML = cloudSvg;

if (clouds == 0) {
    document.body.appendChild(cloudElement);    
}

anime({
  targets: '.drop',
  translateY: 250,
  duration: 1000,
  loop: true
});
