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

// mail validation
let emailInput = document.querySelector(".email-input");
let sendLinkBtn = document.querySelector(".send-link-btn");
let emailWarn = document.querySelector(".invalid-email-txt");

sendLinkBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!(emailInput.value.includes("@") && (emailInput.value.includes("gmail.com") || emailInput.value.includes("hotmail.com") || emailInput.value.includes("outlook.com")))) {
        emailWarn.classList.add('active-email');
    } else {
        emailWarn.classList.remove('active-email');
    }

    if (!emailWarn.classList.contains("active-email")) {
        window.location.href = "index.html";
    }
})