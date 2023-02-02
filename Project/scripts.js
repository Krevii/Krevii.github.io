let aElement = document.getElementsByClassName("text-contain");
let groundScroll = document.getElementsByClassName("scroll-background");
let hederTextUp = document.getElementsByClassName("header-up-text");
let tempScrollY = scrollY;
let LastScrollY = 0,
    ticking = false;

function update() {
    ticking = false;

    for (let i = 0; i < aElement.length; i++) {
        aElement[i].style = `transform: translate3d(${0}px,${LastScrollY/10}px,0px);`;
        groundScroll[0].style = `transform: translate3d(${0}px,${LastScrollY/5}px,0px);`;
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


let cardSection = document.getElementsByClassName("card-section");
let textContain = document.getElementsByClassName("text-contain");

let HeaderRoadMap = document.getElementsByClassName("header-roadmap");
let roadMap = document.getElementsByClassName("roadmap");
let sliderScroll = document.getElementsByClassName("slider");
let header = document.getElementById("header");

let scrollRoadMap = 0;

let animationScroll = ()=>{
    let animionStartPositon = (window.innerHeight / window.innerHeight) + window.scrollY;
    //main text
    if (animionStartPositon >= (cardSection[0].offsetTop - cardSection[0].offsetHeight)) {
        cardSection[0].classList.add("card-section-active");
    }
    else{
        cardSection[0].classList.remove("card-section-active"); 
    }
    //about scroll content
    if (animionStartPositon >= (textContain[0].offsetTop - textContain[0].offsetHeight)) {
        textContain[0].classList.add("text-contain-active");
    }
    else{
        textContain[0].classList.remove("text-contain-active"); 
    }
    //roadmap scroll
    if ((window.innerHeight / window.innerHeight) + window.scrollY >= (HeaderRoadMap[0].offsetTop - HeaderRoadMap[0].offsetHeight)) {
        // roadMap[0].style = `height: 100vh;`;
        header.classList.add("header-active");
        if (GetScrollDirection(tempScrollY) > 0) {
            sliderScroll[0].style = `transform: translate(${tempScrollY - scrollY}px, ${0}px);`
        }
        else{
            sliderScroll[0].style = `transform: translate(${tempScrollY - scrollY}px, ${0}px);`
        }
    }
    else{
        tempScrollY = scrollY;
        header.classList.remove("header-active");
    }

}

function GetScrollDirection(scrollYPos){
    let direction = 1;
    if (scrollYPos > scrollY) {
        direction = -1;
    }
    return direction; 
}

animationScroll();
onScroll();

document.addEventListener("DOMContentLoaded", (e)=>{

    window.scrollBy(0,0);
    scrollTo(0,0);
    tempScrollY = scrollY;
    window.addEventListener("scroll", (e)=>{
        onScroll();
        animationScroll();
    });

})