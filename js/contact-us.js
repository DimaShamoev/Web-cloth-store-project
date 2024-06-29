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

// contact us validation
let nameInput = document.querySelector(".name-input");
let warnName = document.querySelector(".warn-name-validation");
let topicSelect = document.querySelector(".reseon-select");
let topicWarn = document.querySelector(".warn-topic-validation");
let txtBox = document.querySelector(".text-box");
let warnTxtBox = document.querySelector(".warn-txt-box-validation");
let SendBtn = document.querySelector(".create-acc-btn");
let numbers = /\d/;

SendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    if (numbers.test(nameInput.value) || nameInput.value.trim() === "") {
        warnName.classList.add("active");
        isValid = false;
    } else {
        warnName.classList.remove("active");
    }

    if (topicSelect.value === "00") {
        topicWarn.classList.add("active");
        isValid = false;
    } else {
        topicWarn.classList.remove("active");
    }

    if (txtBox.value.trim() === "") {
        warnTxtBox.classList.add("active");
        isValid = false;
    } else {
        warnTxtBox.classList.remove("active");
    }

    if (isValid) {
        window.location.href = "index.html";
    }

})