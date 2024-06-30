let georgianLanguage = document.querySelector(".geo-language");
let englishLanguage = document.querySelector(".eng-language");
let spanishLanguage = document.querySelector(".esp-language");

georgianLanguage.addEventListener("click", () => {
    // main page nav
    let mainLinkHome = document.querySelector(".main-link-home");
    if (mainLinkHome) mainLinkHome.textContent = "მთავარი";

    let mainLinkCollection = document.querySelector(".main-link-collection");
    if (mainLinkCollection) mainLinkCollection.textContent = "კოლექცია";

    let mainLinkNew = document.querySelector(".main-link-new");
    if (mainLinkNew) mainLinkNew.textContent = "ახალი";

    let searchBlockMen = document.querySelector(".search-block-men");
    if (searchBlockMen) searchBlockMen.textContent = "კაცები";

    let searchBlockWomen = document.querySelector(".search-block-women");
    if (searchBlockWomen) searchBlockWomen.textContent = "ქალები";

    let searchBlockKids = document.querySelector(".search-block-kids");
    if (searchBlockKids) searchBlockKids.textContent = "ბავშვები";

    let goToShopBtn = document.querySelector(".go-to-shop-bnt");
    if (goToShopBtn) goToShopBtn.textContent = "შოპინგი";

    let linksTxt1 = document.querySelector(".links-txt-1");
    if (linksTxt1) linksTxt1.textContent = "მთავარი";

    let linksTxt2 = document.querySelector(".links-txt-2");
    if (linksTxt2) linksTxt2.textContent = "პირადი";

    let sideMenuHome = document.querySelector(".side-menu-home");
    if (sideMenuHome) sideMenuHome.textContent = "მთავარი";

    let sideMenuCollection = document.querySelector(".side-menu-collection");
    if (sideMenuCollection) sideMenuCollection.textContent = "კოლექცია";

    let sideMenuNew = document.querySelector(".side-menu-new");
    if (sideMenuNew) sideMenuNew.textContent = "ახალი";

    let sideMenuMen = document.querySelector(".side-menu-men");
    if (sideMenuMen) sideMenuMen.textContent = "კაცები";

    let sideMenuWomen = document.querySelector(".side-menu-women");
    if (sideMenuWomen) sideMenuWomen.textContent = "ქალები";

    let sideMenuKids = document.querySelector(".side-menu-kids");
    if (sideMenuKids) sideMenuKids.textContent = "ბავშვები";

    let sideMenuFavorite = document.querySelector(".side-menu-favorite");
    if (sideMenuFavorite) sideMenuFavorite.textContent = "ფავორიტი";

    let sideMenuCart = document.querySelector(".side-menu-cart");
    if (sideMenuCart) sideMenuCart.textContent = "ურიკა";

    let sideMenuSign = document.querySelector(".side-menu-sign");
    if (sideMenuSign) sideMenuSign.textContent = "შესვლა";

    let newCollectionTitle = document.querySelector(".new-collection-title");
    if (newCollectionTitle) newCollectionTitle.innerHTML = "ახალი" + "<br>" + "კოლექცია";

    let newCollectionTxt = document.querySelector(".new-collection-txt");
    if (newCollectionTxt) newCollectionTxt.innerHTML = "ზაფხული" + "<br>" + "2024";

    let newThisTitleHeadName = document.querySelector(".new-this-title-head-name");
    if (newThisTitleHeadName) newThisTitleHeadName.innerHTML = "საუკეთესო" + "<br>" + "კვირეული";

    let collection2324Title = document.querySelector(".collection-23-24-titile");
    if (collection2324Title) collection2324Title.innerHTML = "კოლექცია" + "<br>" + "23-24";

    let fashionDesignTitleBlock = document.querySelector(".fashion-design-title-block");
    if (fashionDesignTitleBlock) fashionDesignTitleBlock.innerHTML = "ჩვენი მიდგომა მოდის დიზაინთან";

    let fashionDesignTextBlock = document.querySelector(".fashion-design-text-block");
    if (fashionDesignTextBlock) {
        fashionDesignTextBlock.innerHTML = `
                    ელეგანტურ მოდაში ჩვენ ვაერთიანებთ კრეატიულობას ოსტატობას,<br>
                    რათა შევქმნათ მოდა, რომელიც სცილდება ტენდენციებს და უძლებს დროის გამოცდას<br>
                    დიზაინი შემუშავებულია ზედმიწევნით, რაც უზრუნველყოფს უმაღლესი ხარისხის შესანიშნავი დასრულება
                `;
    }

    let footerColumn1Row1Li1 = document.querySelector(".footer-column-1-row-1 ul li:nth-child(1)");
    if (footerColumn1Row1Li1) footerColumn1Row1Li1.textContent = "ინფორმაცია";

    let footerPrice = document.querySelector(".footer-price");
    if (footerPrice) footerPrice.textContent = "ფასები";

    let footerAbout = document.querySelector(".footer-about");
    if (footerAbout) footerAbout.textContent = "ჩვენს შესახებ";

    let footerContacts = document.querySelector(".footer-contacts");
    if (footerContacts) footerContacts.textContent = "საკონტაქტო";

    let footerColumn1Row2Li1 = document.querySelector(".footer-column-1-row-2 ul li:first-child");
    if (footerColumn1Row2Li1) footerColumn1Row2Li1.textContent = "ენები";

    if (georgianLanguage) georgianLanguage.textContent = "ქართ.";
    if (englishLanguage) englishLanguage.textContent = "ინგ.";
    if (spanishLanguage) spanishLanguage.textContent = "ესპ.";

    // sign in page
    let signInTitle = document.querySelector(".sign-in-title");
    if (signInTitle) signInTitle.textContent = "შესვლა";

    let forgetPassBlock = document.querySelector(".forget-pass-block a");
    if (forgetPassBlock) forgetPassBlock.textContent = "დაგავიწყდა პაროლი?"

    let createAccBlock = document.querySelector(".create-acc-block a");
    if (createAccBlock) createAccBlock.textContent = "პროფილის შექმნა"

    // pass recovery page
    let forgotPassTitle = document.querySelector(".forget-pass-title")
    if (forgotPassTitle) forgotPassTitle.textContent = "დაგავიწყდა პაროლი?"

    let forgetPassTxt = document.querySelector(".forget-pass-text")
    if (forgetPassTxt) forgetPassTxt.textContent = "გთხოვთ, შეიყვანოთ ელფოსტა, რომლითაც დარეგისტრირდით, რომ მიიღოთ ელ.წერილი პაროლის გადატვირთვის ბმულით."

    //about us page
    let aboutUsLandingTitle = document.querySelector(".landing-titile");
    if (aboutUsLandingTitle) aboutUsLandingTitle.textContent = "ჩვენს შესახებ . . ."

    let aboutUsLandingTxt = document.querySelector(".landing-txt")
    if (aboutUsLandingTxt) aboutUsLandingTxt.textContent = `
    კეთილი იყოს თქვენი მობრძანება ტანსაცმლის მაღაზიაში, სადაც მოდა ხვდება კომფორტს! თბილისის შუაგულში მდებარე, ჩვენ ვართ თქვენი მიმართულება ტანსაცმლის უახლესი ტენდენციებისთვის. ჩვენი კურირებულ კოლექციას აქვს ელეგანტური და ხელმისაწვდომ ვარიანტები ყველა შემთხვევისთვის, ყოველდღიური ტანსაცმლიდან ოფიციალურ ჩაცმულობამდე. ჩვენ ვამაყობთ მაღალი ხარისხის ქსოვილების, უნიკალური დიზაინის და მომხმარებლის განსაკუთრებული მომსახურებით. Cloths Store-ში ჩვენ გვჯერა, რომ ყველა იმსახურებს გამოიყურებოდეს და იგრძნოს თავი საუკეთესოდ და ჩვენ აქ ვართ, რათა დაგეხმაროთ იპოვოთ სრულყოფილი ტანსაცმელი, რომელიც ასახავს თქვენს პირად სტილს. გვეწვიეთ დღეს და იგრძენით განსხვავება!
    `

    let aboutCompanyTitle = document.querySelector(".about-company-title")
    if (aboutCompanyTitle) aboutCompanyTitle.textContent = "ჩვენი კომპანიის კულტურის შესახებ"

    let aboutCompanyTxt = document.querySelector(".about-company-txt")
    if (aboutCompanyTxt) aboutCompanyTxt.textContent = `
    ჩვენ ჩვენი მისია გავხადეთ ჩვენი გუნდისთვის ინკლუზიური და შთამაგონებელი სამუშაო გარემოს უზრუნველყოფა. თითოეული ჩვენგანი წვლილი შეაქვს ჩვენი კომპანიის ენერგიულ კულტურაში და, შესაბამისად, ჩვენი ბრენდის იდენტურობაში. როგორც მრავალფეროვანი კოლექტივი სხვადასხვა ძლიერი მხარეებითა და გამოცდილებით, ჩვენ ვიზიარებთ საერთო ხედვას, რომელიც მუდმივად ახდენს გავლენას ჩვენს კორპორატიულ კულტურაზე, ჩვენს ბრენდზე და ჩვენს ბიზნესზე. ჩვენი ბრენდის ბირთვი ეფუძნება ჩვენს კორპორატიულ კულტურას: მშვენივრად უნდა გამოიჩინოთ თავი სამართლიანად. ჩვენ გვინდა წავახალისოთ სხვების და საკუთარი თავის მიღება და ხელი შევუწყოთ ინკლუზიურ, სამართლიან და წრიულ მოდის კულტურას. შეიტყვეთ მეტი ჩვენი ხედვისა და აზროვნების შესახებ ჩვენს კულტურის ბუკლეტში
    `

    // contact us page
    let contactUsTitle = document.querySelector(".contact-us-title")
    if (contactUsTitle) contactUsTitle.textContent = "შეგვეხმიანეთ"

    //collection
    let collectionNewreliseTitle = document.querySelector(".collection-new-release")
    if (collectionNewreliseTitle) collectionNewreliseTitle.textContent = "ახალი გამოშვება"

    let showFilterTxt = document.querySelector(".show-filter-txt")
    if (showFilterTxt) showFilterTxt.textContent = "ფილტრის ჩვენება"

    let filterClothesLink = document.querySelector(".filter-clothes");
    if (filterClothesLink) filterClothesLink.textContent = "ტანსაცმელი"

    let filterTopShirtLink = document.querySelector(".filter-top-shirt")
    if (filterTopShirtLink) filterTopShirtLink.textContent = "ტოპები და პერანგები"

    let filterShorts = document.querySelector(".filter-shorts")
    if (filterShorts) filterShorts.textContent = "შორტები"

    let filterHoodies = document.querySelector(".filter-hoodie-pullover")
    if (filterHoodies) filterHoodies.textContent = "ჰუდები და პულოვერები"

    let filterJacket = document.querySelector(".filter-jacket")
    if (filterJacket) filterJacket.textContent = "ჯაკეტები"

    let filterPants = document.querySelector(".filter-pants")
    if (filterPants) filterPants.textContent = "შარვლები"

    let newClothesTitle = document.querySelector(".new-clotes-landing")
    if (newClothesTitle) newClothesTitle.textContent = "ყოველთვის იყავი მოდაში"

    let choiceTitle = document.querySelector(".choose-your-style-title")
    if (choiceTitle) choiceTitle.textContent = "მიიღე სწორი არჩევანი"

    let gruop1Title = document.querySelector(".gruop-1-title")
    if (gruop1Title) gruop1Title.textContent = "რეტრო დარტყმები"

    let gruop2Title = document.querySelector(".gruop-2-title")
    if (gruop2Title) gruop2Title.textContent = "თავისუფლება და სტაბილურობა"

    let gruop3Title = document.querySelector(".gruop-3-title")
    if (gruop3Title) gruop3Title.textContent = "ტრენდული"

    let gruop4Title = document.querySelector(".gruop-4-title")
    if (gruop4Title) gruop4Title.textContent = "ახალი ჩამოსვლა"

    let gruop1Txt = document.querySelector(".group-1-txt")
    if (gruop1Txt) gruop1Txt.textContent = "იყავი განსხვავებული"

    let gruop2Txt = document.querySelector(".group-2-txt")
    if (gruop2Txt) gruop2Txt.textContent = "იგრძენი კომფორტი ნებისმიერ დროს"

    let gruop3Txt = document.querySelector(".group-3-txt")
    if (gruop3Txt) gruop3Txt.textContent = "კლასიკური არის კლასიკური"

    let gruop4Txt = document.querySelector(".group-4-txt")
    if (gruop4Txt) gruop4Txt.textContent = "იყავი პირველი"

    let newArrivalsTitle = document.querySelector(".new-arrivals-title")
    if (newArrivalsTitle) newArrivalsTitle.textContent = "ახალი მიღება"

    let newestStyleTitle = document.querySelector(".newest-style-title")
    if (newestStyleTitle) newestStyleTitle.textContent = "შეიძინეთ ჩვენი უახლესი სტილები"

    let newestStyleTxt = document.querySelector(".newest-style-txt")
    if (newestStyleTxt) newestStyleTxt.textContent = `აღმოაჩინეთ ჩვენი უახლესი პროდუქტები და იყავით წინ სტილით! შეიძინეთ ახლავე, რათა განაახლოთ თქვენი გარდერობი უახლესი ტენდენციებით
    და აუცილებელი ნაჭრები. არ გამოტოვოთ - ჩვენი ახალი კოლექცია სულ რაღაც ერთი დაწკაპუნებითაა!`

    let joinUsTitle = document.querySelector(".join-title")
    if (joinUsTitle) joinUsTitle.textContent = "გახდი ჩვენი ოჯახის ნაწილი"

    let joinUsSing = document.querySelector(".sign")
    if (joinUsSing) joinUsSing.textContent = "შემოსვლა"

    let joinUsJoinNow = document.querySelector(".reg")
    if (joinUsJoinNow) joinUsJoinNow.textContent = "გაწევრიანდი ახლა"

});

spanishLanguage.addEventListener("click", () => {
    // main page nav
    let mainLinkHome = document.querySelector(".main-link-home");
    if (mainLinkHome) mainLinkHome.textContent = "principal";

    let mainLinkCollection = document.querySelector(".main-link-collection");
    if (mainLinkCollection) mainLinkCollection.textContent = "recopilación";

    let mainLinkNew = document.querySelector(".main-link-new");
    if (mainLinkNew) mainLinkNew.textContent = "nuevo";

    let searchBlockMen = document.querySelector(".search-block-men");
    if (searchBlockMen) searchBlockMen.textContent = "hombres";

    let searchBlockWomen = document.querySelector(".search-block-women");
    if (searchBlockWomen) searchBlockWomen.textContent = "mujer";

    let searchBlockKids = document.querySelector(".search-block-kids");
    if (searchBlockKids) searchBlockKids.textContent = "niños";

    let goToShopBtn = document.querySelector(".go-to-shop-bnt");
    if (goToShopBtn) goToShopBtn.textContent = "Compras";

    let linksTxt1 = document.querySelector(".links-txt-1");
    if (linksTxt1) linksTxt1.textContent = "principal";

    let linksTxt2 = document.querySelector(".links-txt-2");
    if (linksTxt2) linksTxt2.textContent = "personal";

    let sideMenuHome = document.querySelector(".side-menu-home");
    if (sideMenuHome) sideMenuHome.textContent = "principal";

    let sideMenuCollection = document.querySelector(".side-menu-collection");
    if (sideMenuCollection) sideMenuCollection.textContent = "recopilación";

    let sideMenuNew = document.querySelector(".side-menu-new");
    if (sideMenuNew) sideMenuNew.textContent = "nuevo";

    let sideMenuMen = document.querySelector(".side-menu-men");
    if (sideMenuMen) sideMenuMen.textContent = "hombres";

    let sideMenuWomen = document.querySelector(".side-menu-women");
    if (sideMenuWomen) sideMenuWomen.textContent = "mujer";

    let sideMenuKids = document.querySelector(".side-menu-kids");
    if (sideMenuKids) sideMenuKids.textContent = "niños";

    let sideMenuFavorite = document.querySelector(".side-menu-favorite");
    if (sideMenuFavorite) sideMenuFavorite.textContent = "favorito";

    let sideMenuCart = document.querySelector(".side-menu-cart");
    if (sideMenuCart) sideMenuCart.textContent = "carro";

    let sideMenuSign = document.querySelector(".side-menu-sign");
    if (sideMenuSign) sideMenuSign.textContent = "acceso";

    let newCollectionTitle = document.querySelector(".new-collection-title");
    if (newCollectionTitle) newCollectionTitle.innerHTML = "nuevo" + "<br>" + "recopilación";

    let newCollectionTxt = document.querySelector(".new-collection-txt");
    if (newCollectionTxt) newCollectionTxt.innerHTML = "verano" + "<br>" + "2024";

    let newThisTitleHeadName = document.querySelector(".new-this-title-head-name");
    if (newThisTitleHeadName) newThisTitleHeadName.innerHTML = "el mejor" + "<br>" + "semana";

    let collection2324Title = document.querySelector(".collection-23-24-titile");
    if (collection2324Title) collection2324Title.innerHTML = "recopilación" + "<br>" + "23-24";

    let fashionDesignTitleBlock = document.querySelector(".fashion-design-title-block");
    if (fashionDesignTitleBlock) fashionDesignTitleBlock.innerHTML = "Nuestro enfoque en el diseño de moda.";

    let fashionDesignTextBlock = document.querySelector(".fashion-design-text-block");
    if (fashionDesignTextBlock) {
        fashionDesignTextBlock.innerHTML = `
        De manera elegante, combinamos la creatividad con la artesanía,<br>
        Crear moda que trascienda las tendencias y resista el paso del tiempo<br>
        El diseño está meticulosamente elaborado para garantizar un acabado de la más alta calidad.
                `;
    }

    let footerColumn1Row1Li1 = document.querySelector(".footer-column-1-row-1 ul li:nth-child(1)");
    if (footerColumn1Row1Li1) footerColumn1Row1Li1.textContent = "información";

    let footerPrice = document.querySelector(".footer-price");
    if (footerPrice) footerPrice.textContent = "precios";

    let footerAbout = document.querySelector(".footer-about");
    if (footerAbout) footerAbout.textContent = "sobre nosotros";

    let footerContacts = document.querySelector(".footer-contacts");
    if (footerContacts) footerContacts.textContent = "Contacto";

    let footerColumn1Row2Li1 = document.querySelector(".footer-column-1-row-2 ul li:first-child");
    if (footerColumn1Row2Li1) footerColumn1Row2Li1.textContent = "idiomas";

    if (georgianLanguage) georgianLanguage.textContent = "Geo.";
    if (englishLanguage) englishLanguage.textContent = "Eng.";
    if (spanishLanguage) spanishLanguage.textContent = "Esp.";

    // sign in page
    let signInTitle = document.querySelector(".sign-in-title");
    if (signInTitle) signInTitle.textContent = "acceso";

    let forgetPassBlock = document.querySelector(".forget-pass-block a");
    if (forgetPassBlock) forgetPassBlock.textContent = "¿Olvidaste tu contraseña?"

    let createAccBlock = document.querySelector(".create-acc-block a");
    if (createAccBlock) createAccBlock.textContent = "Crear un perfil"

    // pass recovery page
    let forgotPassTitle = document.querySelector(".forget-pass-title")
    if (forgotPassTitle) forgotPassTitle.textContent = "¿Olvidaste tu contraseña?"

    let forgetPassTxt = document.querySelector(".forget-pass-text")
    if (forgetPassTxt) forgetPassTxt.textContent = "Ingrese el correo electrónico con el que se registró para recibir un correo electrónico con un enlace para restablecer la contraseña."

    //about us page
    let aboutUsLandingTitle = document.querySelector(".landing-titile");
    if (aboutUsLandingTitle) aboutUsLandingTitle.textContent = "sobre nosotros . . ."

    let aboutUsLandingTxt = document.querySelector(".landing-txt")
    if (aboutUsLandingTxt) aboutUsLandingTxt.textContent = `
    ¡Bienvenido a la tienda de ropa donde la moda se encuentra con la comodidad! Ubicados en el corazón de Tbilisi, somos su destino para las últimas tendencias en ropa.
    `

    let aboutCompanyTitle = document.querySelector(".about-company-title")
    if (aboutCompanyTitle) aboutCompanyTitle.textContent = "Acerca de nuestra cultura empresarial"

    let aboutCompanyTxt = document.querySelector(".about-company-txt")
    if (aboutCompanyTxt) aboutCompanyTxt.textContent = `
    Nuestra misión es proporcionar un entorno de trabajo inclusivo e inspirador para nuestro equipo. Cada uno de nosotros contribuye a la vibrante cultura de nuestra empresa y, por tanto, a nuestra identidad de marca. Como equipo diverso con diferentes fortalezas y experiencias, compartimos una visión común que influye continuamente en nuestra cultura corporativa, nuestra marca y nuestro negocio. El núcleo de nuestra marca se basa en nuestra cultura corporativa: lucir genial de manera justa. Queremos fomentar la aceptación de los demás y de nosotros mismos y promover una cultura de la moda inclusiva, justa y circular. Obtenga más información sobre nuestra visión y pensamiento en nuestro folleto cultural.
    `

    // contact us page
    let contactUsTitle = document.querySelector(".contact-us-title")
    if (contactUsTitle) contactUsTitle.textContent = "Contáctenos"

    //collection
    let collectionNewreliseTitle = document.querySelector(".collection-new-release")
    if (collectionNewreliseTitle) collectionNewreliseTitle.textContent = "Nuevo lanzamiento"

    let showFilterTxt = document.querySelector(".show-filter-txt")
    if (showFilterTxt) showFilterTxt.textContent = "Mostrar filtro"

    let filterClothesLink = document.querySelector(".filter-clothes");
    if (filterClothesLink) filterClothesLink.textContent = "ropa"

    let filterTopShirtLink = document.querySelector(".filter-top-shirt")
    if (filterTopShirtLink) filterTopShirtLink.textContent = "Tops y camisas"

    let filterShorts = document.querySelector(".filter-shorts")
    if (filterShorts) filterShorts.textContent = "bermudas"

    let filterHoodies = document.querySelector(".filter-hoodie-pullover")
    if (filterHoodies) filterHoodies.textContent = "Sudaderas con capucha y jerseys"

    let filterJacket = document.querySelector(".filter-jacket")
    if (filterJacket) filterJacket.textContent = "chaquetas"

    let filterPants = document.querySelector(".filter-pants")
    if (filterPants) filterPants.textContent = "pantalones"

    let newClothesTitle = document.querySelector(".new-clotes-landing")
    if (newClothesTitle) newClothesTitle.textContent = "Estar siempre a la moda"

    let choiceTitle = document.querySelector(".choose-your-style-title")
    if (choiceTitle) choiceTitle.textContent = "Tomar la decisión correcta"

    let gruop1Title = document.querySelector(".gruop-1-title")
    if (gruop1Title) gruop1Title.textContent = "ritmos retro"

    let gruop2Title = document.querySelector(".gruop-2-title")
    if (gruop2Title) gruop2Title.textContent = "Libertad y estabilidad"

    let gruop3Title = document.querySelector(".gruop-3-title")
    if (gruop3Title) gruop3Title.textContent = "de moda"

    let gruop4Title = document.querySelector(".gruop-4-title")
    if (gruop4Title) gruop4Title.textContent = "nueva llegada"

    let gruop1Txt = document.querySelector(".group-1-txt")
    if (gruop1Txt) gruop1Txt.textContent = "Sé diferente"

    let gruop2Txt = document.querySelector(".group-2-txt")
    if (gruop2Txt) gruop2Txt.textContent = "Siéntete cómodo en cualquier momento"

    let gruop3Txt = document.querySelector(".group-3-txt")
    if (gruop3Txt) gruop3Txt.textContent = "Un clásico es un clásico."

    let gruop4Txt = document.querySelector(".group-4-txt")
    if (gruop4Txt) gruop4Txt.textContent = "Sé el primero"

    let newArrivalsTitle = document.querySelector(".new-arrivals-title")
    if (newArrivalsTitle) newArrivalsTitle.textContent = "Nueva recepción"

    let newestStyleTitle = document.querySelector(".newest-style-title")
    if (newestStyleTitle) newestStyleTitle.textContent = "Compra nuestros últimos estilos"

    let newestStyleTxt = document.querySelector(".newest-style-txt")
    if (newestStyleTxt) newestStyleTxt.textContent = `¡Descubra nuestros últimos productos y manténgase a la vanguardia con estilo! Compra ahora para actualizar tu guardarropa con las últimas tendencias.
    y piezas esenciales. ¡No te lo pierdas: nuestra nueva colección está a solo un clic de distancia!`

    let joinUsTitle = document.querySelector(".join-title")
    if (joinUsTitle) joinUsTitle.textContent = "Hazte parte de nuestra familia"

    let joinUsSing = document.querySelector(".sign")
    if (joinUsSing) joinUsSing.textContent = "acceso"

    let joinUsJoinNow = document.querySelector(".reg")
    if (joinUsJoinNow) joinUsJoinNow.textContent = "Únete ahora"

});

englishLanguage.addEventListener("click", () => {
    location.reload()
})