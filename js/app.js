import { loveCard } from "./love.js";

const root = document.querySelector("#root");

function loadImage(){
    let arr = loveCard();
    let str =  `${arr[0]}`;
    return str;
};

root.innerHTML=loadImage();
