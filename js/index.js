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

// new collection slider
let slideTrack = document.querySelector(".new-collection-slider-wrapper");
let nextButton = document.querySelector(".slider-btn-next");
let prevButton = document.querySelector(".slider-btn-prev");
let gap = 50;

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


// new this week collection
let newThisWeekSlider = document.querySelector(".new-this-week-track");
let newThisWeek_nextButton = document.querySelector(".new-this-week-next-btn");
let newThisWeek_prevButton = document.querySelector(".new-this-week-prev-btn");

newThisWeek_nextButton.addEventListener("click", () => {
    let nextImgWidth = newThisWeekSlider.firstElementChild.clientWidth + gap;
    newThisWeekSlider.style.transition = "transform 0.5s ease-out";
    newThisWeekSlider.style.transform = `translateX(-${nextImgWidth}px)`;

    setTimeout(() => {
        newThisWeekSlider.style.transition = "none";
        newThisWeekSlider.appendChild(newThisWeekSlider.firstElementChild);
        newThisWeekSlider.style.transform = `translateX(${0}px)`;
    }, 500);
});

newThisWeek_prevButton.addEventListener("click", () => {
    let prevImgWidth = newThisWeekSlider.lastElementChild.clientWidth + gap;
    newThisWeekSlider.style.transition = "transform 0.5s ease-out";
    newThisWeekSlider.style.transform = `translateX(${prevImgWidth}px)`;

    setTimeout(() => {
        newThisWeekSlider.style.transition = "none";
        newThisWeekSlider.insertBefore(newThisWeekSlider.lastElementChild, newThisWeekSlider.firstElementChild);
        newThisWeekSlider.style.transform = `translateX(${0}px)`;
    }, 500);
});

// new this week collection
let items = [
    {
        "id": 1,
        "name": "V-Neck T-Shirt",
        "info": "Embroidered Seersucker Shirt",
        "img": "img/new-this-week-1.png",
        "price": 99
    },
    {
        "id": 2,
        "name": "Cotton T Shirt",
        "info": "Basic Slim Fit T-Shirt",
        "img": "img/new-this-week-2.png",
        "price": 99
    },
    {
        "id": 3,
        "name": "Henley T-Shirt",
        "info": "Blurred Print T-Shirt",
        "img": "img/new-this-week-1.png",
        "price": 99
    },
    {
        "id": 4,
        "name": "Crewneck T-Shirt",
        "info": "Full Sleeve Zipper",
        "img": "img/new-this-week-4.png",
        "price": 99
    },
    {
        "id": 5,
        "name": "Cotton  Shirt",
        "info": "GEOMETRIC JACQUARD SHIRT",
        "img": "img/this-week-collection-4.png",
        "price": 99
    }
]


for (let item of items) {

    let itemsBlock = document.querySelector(".new-this-week-track");
    let img = document.createElement("img");
    let newCollectionDiv = document.createElement("div")
    newCollectionDiv.className = "new-this-week-slider-item"
    img.src = item.img;
    newCollectionDiv.appendChild(img);
    newCollectionDiv.innerHTML += `
                    <span class="name-block">${item.name}</span> <br>
                    <span class="info-block">${item.info}</span>
                    <span class="price-block">${item.price}$</span> <br>
                `;
    itemsBlock.appendChild(newCollectionDiv);
    document.querySelector(".new-this-week-cnt").innerHTML = items.length;
}


// 23-24 collection
let collections = [
    {
        "id": 1,
        "name": "Cotton  Shirt",
        "info": "Basic Heavy Weight T-shirt",
        "img": "img/23-24-collection-1.png",
        "price": 199
    },
    {
        "id": 2,
        "name": "Cotton  jeans",
        "info": "Soft Wash straight Fit Jeans",
        "img": "img/23-24-collection-2.png",
        "price": 199
    },
    {
        "id": 3,
        "name": "Cotton  Shirt",
        "info": "Basic Heavy Weight T-shirt",
        "img": "img/23-24-collection-3.png",
        "price": 199
    },
];

for (let collection of collections) {
    let collections_23_24_block = document.querySelector(".collections-23-24-items");
    let img = document.createElement("img");
    img.src = collection.img;
    let collection_23_24_new_div = document.createElement("div");
    collection_23_24_new_div.className = "collections-23-24-item";
    collection_23_24_new_div.appendChild(img);

    collection_23_24_new_div.innerHTML += `
        <span class="name-block">${collection.name}</span>
        <span class="info-block">${collection.info}</span>
        <span class="collection-23-24-price-block">${collection.price}$</span>
    `;

    collections_23_24_block.appendChild(collection_23_24_new_div);
}