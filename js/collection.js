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


// sort and filter buttons
let filterBtn = document.querySelector(".filter-btn");
let sortBtn = document.querySelector(".sort-btn");
let mainFeaturedBlock = document.querySelector(".new-featured-clothess-main-wrapper");
let filterBlock = document.querySelector(".new-featured-clothess-filter-wrapper")
let fileterClick = false;
filterBtn.addEventListener("click", () => {
    fileterClick = !fileterClick;
    
    if (fileterClick === true) {
        mainFeaturedBlock.style.gridTemplateColumns = "15% 82%";
        mainFeaturedBlock.style.gap = "50px";
        filterBlock.style.overflowY = "auto"
        filterBlock.style.visibility = "visible"
        filterBtn.innerHTML = `Hide Filters <img src="src/filter.png" alt="">`
    } else {
        mainFeaturedBlock.style.gridTemplateColumns = "0% 100%";
        mainFeaturedBlock.style.gap = "0";
        filterBlock.style.overflowY = "hidden";
        filterBlock.style.visibility = "hidden"
        filterBtn.innerHTML = `Show Filters <img src="src/filter.png" alt="">`
    }
})

// filters nav links
let filterNavBlock = document.querySelectorAll(".filter-nav-expand-blocks");
let filterNavUlLinks = document.querySelectorAll(".filter-nav-ul");
let navArrow = document.querySelectorAll(".nav-arrow")

filterNavUlLinks.forEach((link, index) => {
    let click = false;

    link.addEventListener("click", () => {
        click = !click;
        if (click === true) {
            filterNavBlock[index].style.height = "230px";
            navArrow[index].style.transform = `rotate(${180}deg)`;
        } else {
            filterNavBlock[index].style.height = "40px";
            navArrow[index].style.transform = `rotate(${0}deg)`
        }
    })
})
