import { questionText } from "./question.js";

const root = document.querySelector("#root");

function loadText(){
    let arr = questionText();
    let str =  `${arr[0]}`;
    return str;
};

root.innerHTML=loadText();