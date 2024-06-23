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

// registration form validation
let emailInput = document.querySelector(".email-input");
let passInput1 = document.querySelector(".pass-input-1");
let passInput2 = document.querySelector(".pass-input-2");
let nameInput = document.querySelector(".name-input");
let lastNameInput = document.querySelector(".lastname-input");
let createAccBtn = document.querySelector(".create-acc-btn");

let warnEmail = document.querySelector(".invalid-email-txt");
let warnPass1 = document.querySelector(".invalid-pass-txt-1");
let warnPass2 = document.querySelector(".invalid-pass-txt-2");
let warnName = document.querySelector(".invalid-name-txt");
let warnLastName = document.querySelector(".invalid-surname-txt");
let numbers = /\d/;

let monthSelect = document.querySelector(".month-select")
let warnMonth = document.querySelector(".invalid-month-txt");
let daySelect = document.querySelector(".day-select");
let warnDay = document.querySelector(".invalid-day-txt");
let yearSelect = document.querySelector(".select-year")
let warnYear = document.querySelector(".invalid-year-txt");

createAccBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!(emailInput.value.includes("@") && (emailInput.value.includes("gmail.com") || emailInput.value.includes("hotmail.com") || emailInput.value.includes("outlook.com")))) {
        warnEmail.classList.add('active');
    } else {
        warnEmail.classList.remove('active');
    }

    if ((passInput1.value).length < 7 || passInput1.value !== passInput2.value) {
        warnPass1.classList.add("active");
    } else {
        warnPass1.classList.remove("active")
    }

    if ((passInput2.value).length < 7 || passInput2.value !== passInput1.value) {
        warnPass2.classList.add("active");
    } else {
        warnPass2.classList.remove("active")
    }

    if (numbers.test(nameInput.value)) {
        warnName.classList.add("active")
    } else {
        warnName.classList.remove("active")
    }

    if (numbers.test(lastNameInput.value)) {
        warnLastName.classList.add("active")
    } else {
        warnLastName.classList.remove("active")
    }

    if (monthSelect.value === "00") {
        warnMonth.classList.add("active")
    } else {
        warnMonth.classList.remove("active")
    }

    if (daySelect.value === "00") {
        warnDay.classList.add("active")
    } else {
        warnDay.classList.remove("active")
    }

    let selectedYear = parseInt(yearSelect.value, 10);
    if (yearSelect.value === "0000" || selectedYear > 2006) {
        warnYear.classList.add("active");
    } else {
        warnYear.classList.remove("active");
    }

    if (!(warnEmail.classList.contains('active')) &&
        !(warnPass1.classList.contains('active')) &&
        !(warnPass2.classList.contains('active')) &&
        !(warnName.classList.contains('active')) &&
        !(warnLastName.classList.contains('active')) &&
        !(warnMonth.classList.contains('active')) &&
        !(warnDay.classList.contains('active')) &&
        !(warnYear.classList.contains('active'))) {
            window.location.href = "index.html"
        }
})

let eyeIcons = document.querySelectorAll(".bx-low-vision");
let passInputs = document.querySelectorAll(".pass-input");
let eyeIconClicked = false;

eyeIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        let eyeActive = icon.classList.contains("active-eye");

        if (eyeActive) {
            icon.classList.remove("active-eye");
            passInputs[index].type = "password";
        } else {
            icon.classList.add("active-eye");
            passInputs[index].type = "text";
        }
    });
});
