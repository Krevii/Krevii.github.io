let aElement = document.getElementsByClassName("text-contain");
let groundScroll = document.getElementsByClassName("scroll-background");
let hederTextUp = document.getElementsByClassName("header-up-text");
let sliderScroll = document.getElementsByClassName("slider");

let LastScrollY = 0,
    ticking = false;

let scrolll = 0;
function update() {
    ticking = false;
    for (let i = 0; i < aElement.length; i++) {
        aElement[i].style = `transform: translate3d(${0}px,${LastScrollY/10}px,0px);`;
        groundScroll[0].style = `transform: translate3d(${0}px,${LastScrollY/5}px,0px);`;
        if (scrollY >= 3200) {
            scrolll = -1 *(scrollY - 3200) * 1.9;
            sliderScroll[0].style = `transform: translate3d(${scrolll}px,0px,0px);`
        }
    }
    for (let i = 0; i < hederTextUp.length; i++) {
        hederTextUp[i].style = `transform: translate3d(${0}px,${-LastScrollY}px,0px);`
        
    }
}

function onScroll() {
    LastScrollY = scrollY;
    requestTick();
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update)    
    }

    ticking = true;
}

window.addEventListener("scroll", onScroll);
