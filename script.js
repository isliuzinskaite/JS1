"use strict";

function changeContent(index){
    var sections = document.querySelectorAll("section");
    var spans = document.querySelectorAll("span");
    var buttons = document.querySelectorAll("button");

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("display");
        sections[i].classList.remove("transform");
        spans[i].classList.remove("opacity");
        buttons[i].classList.remove("active");
    }

    var element = document.querySelectorAll("section")[index];
    element.classList.add("display");
    buttons[index].classList.add("active");

    setTimeout(function(){
        element.classList.add("transform");
        spans[index].classList.add("opacity");
    }, 100);
}

