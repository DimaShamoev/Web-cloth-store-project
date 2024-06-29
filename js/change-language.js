let georgianLanguage = document.querySelector(".geo-language");
let englishLanguage = document.querySelector(".eng-language");
let spanishLanguage = document.querySelector(".esp-language");

georgianLanguage.addEventListener("click", () => {
    // main page nav
    document.querySelector(".main-link-home").textContent = "მთავარი";
    document.querySelector(".main-link-collection").textContent = "კოლექცია";
    document.querySelector(".main-link-new").textContent = "ახალი";

    document.querySelector(".search-block-men").textContent = "კაცები";
    document.querySelector(".search-block-women").textContent = "ქალები";
    document.querySelector(".search-block-kids").textContent = "ბავშვები";
    document.querySelector(".go-to-shop-bnt").textContent = "შოპინგი"

    document.querySelector(".links-txt-1").textContent = "მთავარი";
    document.querySelector(".links-txt-2").textContent = "პირადი";

    document.querySelector(".side-menu-home").textContent = "მთავარი"
    document.querySelector(".side-menu-collection").textContent = "კოლექცია"
    document.querySelector(".side-menu-new").textContent = "ახალი"
    document.querySelector(".side-menu-men").textContent = "კაცები"
    document.querySelector(".side-menu-women").textContent = "ქალები"
    document.querySelector(".side-menu-kids").textContent = "ბავშვები"

    document.querySelector(".side-menu-favorite").textContent = "ფავორიტი"
    document.querySelector(".side-menu-cart").textContent = "ურიკა"
    document.querySelector(".side-menu-sign").textContent = "შესვლა"

    document.querySelector(".new-collection-title").innerHTML = "ახალი" + "<br>" + "კოლექცია"
    document.querySelector(".new-collection-txt").innerHTML = "ზაფხული" + "<br>" + "2024"
    document.querySelector(".new-this-title-head-name").innerHTML = "საუკეთესო" + "<br>" + "კვირეული"
    document.querySelector(".collection-23-24-titile").innerHTML = "კოლექცია" + "<br>" + "23-24"
    document.querySelector(".fashion-design-title-block").innerHTML = "ჩვენი მიდგომა მოდის დიზაინთან"
    document.querySelector(".fashion-design-text-block").innerHTML = `
                                                                    ელეგანტურ მოდაში ჩვენ ვაერთიანებთ კრეატიულობას ოსტატობას,<br>    რათა შევქმნათ
                                                                    მოდა, რომელიც სცილდება ტენდენციებს და უძლებს დროის გამოცდას<br>
                                                                    დიზაინი შემუშავებულია ზედმიწევნით, რაც უზრუნველყოფს უმაღლესი ხარისხის
                                                                    შესანიშნავი დასრულება
                                                                `

    document.querySelector(".footer-column-1-row-1 ul li:nth-child(1)").textContent = "ინფორმაცია"
    document.querySelector(".footer-price").textContent = "ფასები"
    document.querySelector(".footer-about").textContent = "ჩვენს შესახებ"
    document.querySelector(".footer-contacts").textContent = "საკონტაქტო"

    document.querySelector(".footer-column-1-row-2 ul li:first-child").textContent = "ენები"
    georgianLanguage.textContent = "ქართ.";
    englishLanguage.textContent = "ინგ."
    spanishLanguage.textContent = "ესპ."

    
})