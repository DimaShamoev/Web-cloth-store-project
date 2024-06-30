// aside menu
let sideMenuBlock = document.querySelector(".side-menu");
let menuBtn = document.querySelector(".menu-btn");
let overlay = document.querySelector(".overlay");
let exitBtn = document.querySelector(".exit");

menuBtn.addEventListener("click", () => {
    sideMenuBlock.classList.add("active");
    overlay.classList.add("active");
    document.querySelector("body").style.minHeight = "100vh"
    document.querySelector("body").style.overflow = "hidden"

})

overlay.addEventListener("click", () => {
    sideMenuBlock.classList.remove("active");
    overlay.classList.remove("active");
    document.querySelector("body").style.minHeight = "auto"
    document.querySelector("body").style.overflow = "auto"
})

exitBtn.addEventListener("click", () => {
    sideMenuBlock.classList.remove("active");
    overlay.classList.remove("active");
    document.querySelector("body").style.minHeight = "auto";
    document.querySelector("body").style.overflow = "auto";
})


// nev arrival slider
let slideTrack = document.querySelector(".new-arrivals-wrapper");
let nextButton = document.querySelector(".new-arrival-btn-next");
let prevButton = document.querySelector(".new-arrival-btn-prev");
let gap = 40;

nextButton.addEventListener("click", () => {
    let nextImgWidth = slideTrack.firstElementChild.clientWidth + gap;
    slideTrack.style.transition = "transform 0.5s ease-out";
    slideTrack.style.transform = `translateX(-${nextImgWidth}px)`;

    setTimeout(() => {
        slideTrack.style.transition = "none";
        slideTrack.appendChild(slideTrack.firstElementChild);
        slideTrack.style.transform = `translateX(${0}px)`;
    }, 500);
});

prevButton.addEventListener("click", () => {
    let prevImgWidth = slideTrack.lastElementChild.clientWidth + gap;
    slideTrack.style.transition = "transform 0.5s ease-out";
    slideTrack.style.transform = `translateX(${prevImgWidth}px)`;

    setTimeout(() => {
        slideTrack.style.transition = "none";
        slideTrack.insertBefore(slideTrack.lastElementChild, slideTrack.firstElementChild);
        slideTrack.style.transform = `translateX(${0}px)`;
    }, 500);
});