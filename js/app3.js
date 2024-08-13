import { VideoList } from "./emotion.js";

const root = document.querySelector("#root");

function loadVideo(){
    let arr = emotionVideo();
    let str =  `${arr[0]}`;
    return str;
};

root.innerHTML=loadVideo();