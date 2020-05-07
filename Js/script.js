//#region header navigations bar 
const burgermenu = document.querySelector("#burgermenu");
let body = document.querySelector("body");
body.addEventListener("click", function() {
    burgermenu.classList.add("hidden");
})

document.querySelector(".burgermenu-icon").addEventListener("click", function(event) {
    event.stopPropagation();
    burgermenu.classList.toggle("hidden");
})


//#endregion

//#region  Hide bikeoverlay contact form
let InputTextBtnElements = document.querySelectorAll(".lable-text-box");
let bikeOverlay = document.getElementById("bikeOverlay");
let maphover = document.querySelector(".contact-form-map-container")


for (let i = 0; i < InputTextBtnElements.length; i++) {
    InputTextBtnElements[i].addEventListener("click", function() {
        bikeOverlay.classList.add("hidden");
    })

}

maphover.addEventListener("mouseover", function() {
    bikeOverlay.classList.add("hidden");
})

//#endregion Hide bikeoverlay contact form

//#region slide by button plus skifte text og billeder (id=One)

// variabler

let imageContainerOne = document.getElementById("imageContainerOne");
let rightOne = document.getElementById("rightOne");
let leftOne = document.getElementById("leftOne");
let indexIndicatorOne = 0;
let counterOne = imageContainerOne.childElementCount;
let imageTextOne = document.getElementById("imageTextOne");
let imageTitleOne = document.getElementById("imageTitleOne");
let imagesOne = imageContainerOne.querySelectorAll("img");

rightOne.addEventListener("click", nextImageOne);
leftOne.addEventListener("click", prevImageOne);

setTitleTextOne(imagesOne[indexIndicatorOne].alt, imagesOne[indexIndicatorOne].dataset.text);
setColorOne(imagesOne[indexIndicatorOne].dataset.color);

// skift til næste billede - frem

function nextImageOne() {
    indexIndicatorOne++;
    if (indexIndicatorOne >= counterOne) {
        indexIndicatorOne = 0;
    }

    imageIndexOne();
    setTitleTextOne(imagesOne[indexIndicatorOne].alt, imagesOne[indexIndicatorOne].dataset.text);
    setColorOne(imagesOne[indexIndicatorOne].dataset.color);
}


// skift til næste billede - tilbage

function prevImageOne() {
    indexIndicatorOne--;
    if (indexIndicatorOne < 0) {
        indexIndicatorOne = counterOne - 1;
    }
    setTitleTextOne(imagesOne[indexIndicatorOne].alt, imagesOne[indexIndicatorOne].dataset.text);
    imageIndexOne();
    setColorOne(imagesOne[indexIndicatorOne].dataset.color);
}

function imageIndexOne() {
    let leftPosition = (indexIndicatorOne * -100) + "vw";
    imageContainerOne.style.left = leftPosition;
}


// fylde text ind i boxe 

function setTitleTextOne(title, text) {
    imageTextOne.textContent = text;
    imageTitleOne.textContent = title;
}

function setColorOne(themecolor) {
    removeClassesOne();
    // gammel måde at flette tekst og variabler sammen (concatenate)
    imageTextOne.classList.add("gallery-info-" + themecolor)
        // moderne måde at flette tekst og variabler sammen (concatenate) genvej shift+ `
    imageTitleOne.classList.add(`gallery-info-${themecolor}`)

}

function removeClassesOne() {
    imageTextOne.classList.remove("gallery-info-dark")
    imageTitleOne.classList.remove("gallery-info-dark")
    imageTextOne.classList.remove("gallery-info-light")
    imageTitleOne.classList.remove("gallery-info-light")
}

//#endregion slide by button

//#region slide by button plus skifte text og billeder  (id Two)



let imageContainerTwo = document.getElementById("imageContainerTwo");
let rightTwo = document.getElementById("rightTwo");
let leftTwo = document.getElementById("leftTwo");
let indexIndicatorTwo = 0;
let counterTwo = imageContainerTwo.childElementCount;
let imageTextTwo = document.getElementById("imageTextTwo");
let imageTitleTwo = document.getElementById("imageTitleTwo");
let imagesTwo = imageContainerTwo.querySelectorAll("img");

rightTwo.addEventListener("click", nextImageTwo);
leftTwo.addEventListener("click", prevImageTwo);

setTitleTextTwo(imagesTwo[indexIndicatorTwo].alt, imagesTwo[indexIndicatorTwo].dataset.text);
setColorTwo(imagesTwo[indexIndicatorTwo].dataset.color);
// skift til næste billede - frem

function nextImageTwo() {
    indexIndicatorTwo++;
    if (indexIndicatorTwo >= counterTwo) {
        indexIndicatorTwo = 0;
    }

    imageIndexTwo();
    setTitleTextTwo(imagesTwo[indexIndicatorTwo].alt, imagesTwo[indexIndicatorTwo].dataset.text);
    setColorTwo(imagesTwo[indexIndicatorTwo].dataset.color);
}


// skift til næste billede - tilbage

function prevImageTwo() {
    indexIndicatorTwo--;
    if (indexIndicatorTwo < 0) {
        indexIndicatorTwo = counterTwo - 1;
    }
    setColorTwo(imagesTwo[indexIndicatorTwo].dataset.color);
    setTitleTextTwo(imagesTwo[indexIndicatorTwo].alt, imagesTwo[indexIndicatorTwo].dataset.text);
    imageIndexTwo();
}

function imageIndexTwo() {
    let leftPosition = (indexIndicatorTwo * -100) + "vw";
    imageContainerTwo.style.left = leftPosition;
}


// fylde text ind i boxe 

function setTitleTextTwo(title, text) {
    imageTextTwo.textContent = text;
    imageTitleTwo.textContent = title;
}

function setColorTwo(themecolor) {
    removeClassesTwo();
    // gammel måde at flette tekst og variabler sammen (concatenate)
    imageTextTwo.classList.add("gallery-info-" + themecolor)
        // moderne måde at flette tekst og variabler sammen (concatenate) genvej shift+ `
    imageTitleTwo.classList.add(`gallery-info-${themecolor}`)

}

function removeClassesTwo() {
    imageTextTwo.classList.remove("gallery-info-dark")
    imageTitleTwo.classList.remove("gallery-info-dark")
    imageTextTwo.classList.remove("gallery-info-light")
    imageTitleTwo.classList.remove("gallery-info-light")
}

//#endregion slide by button

//#region slide by button plus skifte text og billeder (id=Three)

let imageContainerThree = document.getElementById("imageContainerThree");
let rightThree = document.getElementById("rightThree");
let leftThree = document.getElementById("leftThree");
let indexIndicatorThree = 0;
let counterThree = imageContainerThree.childElementCount;
let imageTextThree = document.getElementById("imageTextThree");
let imageTitleThree = document.getElementById("imageTitleThree");
let imagesThree = imageContainerThree.querySelectorAll("img");

rightThree.addEventListener("click", nextImageThree);
leftThree.addEventListener("click", prevImageThree);

setTitleTextThree(imagesThree[indexIndicatorThree].alt, imagesThree[indexIndicatorThree].dataset.text);
setColorThree(imagesThree[indexIndicatorThree].dataset.color);
// skift til næste billede - frem

function nextImageThree() {
    indexIndicatorThree++;
    if (indexIndicatorThree >= counterThree) {
        indexIndicatorThree = 0;
    }

    imageIndexThree();
    setTitleTextThree(imagesThree[indexIndicatorThree].alt, imagesThree[indexIndicatorThree].dataset.text);
    setColorThree(imagesThree[indexIndicatorThree].dataset.color);
}


// skift til næste billede - tilbage

function prevImageThree() {
    indexIndicatorThree--;
    if (indexIndicatorThree < 0) {
        indexIndicatorThree = counterThree - 1;
    }
    setTitleTextThree(imagesThree[indexIndicatorThree].alt, imagesThree[indexIndicatorThree].dataset.text);
    imageIndexThree();
    setColorThree(imagesThree[indexIndicatorThree].dataset.color);
}

function imageIndexThree() {
    let leftPosition = (indexIndicatorThree * -100) + "vw";
    imageContainerThree.style.left = leftPosition;
}


// fylde text ind i boxe 

function setTitleTextThree(title, text) {
    imageTextThree.textContent = text;
    imageTitleThree.textContent = title;
}

function setColorThree(themecolor) {
    removeClassesThree();
    // gammel måde at flette tekst og variabler sammen (concatenate)
    imageTextThree.classList.add("gallery-info-" + themecolor)
        // moderne måde at flette tekst og variabler sammen (concatenate) genvej shift+ `
    imageTitleThree.classList.add(`gallery-info-${themecolor}`)

}

function removeClassesThree() {
    imageTextThree.classList.remove("gallery-info-dark")
    imageTitleThree.classList.remove("gallery-info-dark")
    imageTextThree.classList.remove("gallery-info-light")
    imageTitleThree.classList.remove("gallery-info-light")
}

//#endregion slide by button

//#region lightBox  bike one, bike two and bike three 

const desktopImageTitleOne = document.querySelector("#desktop-imageTitle-one");
const desktopImageOne = document.querySelector("#desktop-image-one");


for (let i = 0; i < imagesOne.length; i++) {
    imagesOne[i].addEventListener("click", function() {
        desktopImageOne.src = imagesOne[i].src;
        desktopImageTitleOne.textContent = imagesOne[i].alt
        desktopImageTitleOne.classList.remove("gallery-info-dark")
        desktopImageTitleOne.classList.remove("gallery-info-light")
        desktopImageTitleOne.classList.add("gallery-info-" + imagesOne[i].dataset.color)

    });

}

const desktopImageTitleTwo = document.querySelector("#desktop-imageTitle-two");
const desktopImageTwo = document.querySelector("#desktop-image-two");


for (let i = 0; i < imagesTwo.length; i++) {
    imagesTwo[i].addEventListener("click", function() {
        desktopImageTwo.src = imagesTwo[i].src;
        desktopImageTitleTwo.textContent = imagesTwo[i].alt
        desktopImageTitleTwo.classList.remove("gallery-info-dark")
        desktopImageTitleTwo.classList.remove("gallery-info-light")
        desktopImageTitleTwo.classList.add("gallery-info-" + imagesTwo[i].dataset.color)

    });

}
const desktopImageTitleThree = document.querySelector("#desktop-imageTitle-three");
const desktopImageThree = document.querySelector("#desktop-image-three");


for (let i = 0; i < imagesThree.length; i++) {
    imagesThree[i].addEventListener("click", function() {
        desktopImageThree.src = imagesThree[i].src;
        desktopImageTitleThree.textContent = imagesThree[i].alt
        desktopImageTitleThree.classList.remove("gallery-info-dark")
        desktopImageTitleThree.classList.remove("gallery-info-light")
        desktopImageTitleThree.classList.add("gallery-info-" + imagesThree[i].dataset.color)

    });

}



//#endregion LightBox

//#region intersection observer

//#region heroImage intersection observer
const hero = document.querySelector("#hero");
const backToTop = document.querySelector(".back-to-top")


const heroOptions = {
    rootMargin: "-55% 0px 0px 0px",
    threshold: 0,
};

const heroObserver = new IntersectionObserver(function(
        entries,
        heroObserver
    ) {
        entries.forEach(entry => {
            // console.log(hero);
            if (entry.isIntersecting) {
                burgermenu.classList.remove("scrollSnap");
                logo.style = `--logo-color:${logoColorChanger.home}`;
                backToTop.classList.add("hidden");

            } else {
                burgermenu.classList.add("scrollSnap");
                backToTop.classList.remove("hidden");

            }
            console.log(entry.isIntersecting);
        });
    },
    heroOptions);

heroObserver.observe(hero);

//#endregion  heroImage intersection observer

const logo = document.querySelector("#logo");
let firstload = true;

let logoColorChanger = {
    home: "#3b5998",
    foldingbike: "#729C7E",
    roadbike: "#54336b",
    mountainbike: "#AE492F",
    contactform: "#EBC856",
}

const sectionBike1 = document.querySelector("#Bike1");
const sectionBike2 = document.querySelector("#Bike2");
const sectionBike3 = document.querySelector("#Bike3");
const sectionOne = document.querySelector("#emptyOne");
const sectionTwo = document.querySelector("#emptyTwo");
const sectionThree = document.querySelector("#emptyThree");
// console.log(sectionOne);

// Start section bike1

const sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            // console.log(sectionOne);
            if (!entry.isIntersecting) {
                sectionBike1.classList.remove("active");
                leftOne.classList.remove("active");
                rightOne.classList.remove("active");
                imageTitleOne.classList.remove("active");
                imageTextOne.classList.remove("active");

            } else {
                logo.style = `--logo-color:${logoColorChanger.foldingbike}`;
                sectionBike1.classList.add("active");
                leftOne.classList.add("active");
                rightOne.classList.add("active");
                imageTitleOne.classList.add("active");
                imageTextOne.classList.add("active");
                // logo.style = "--logo-color:" + logoColorChanger.foldingbike + ";";
            }
            console.log(entry.isIntersecting);
        });
    },
    sectionOneOptions);


sectionOneObserver.observe(sectionOne);

// Start section bike2 

const sectionTwoOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

const sectionTwoObserver = new IntersectionObserver(function(
        entries,
        sectionTwoObserver
    ) {
        entries.forEach(entry => {
            // console.log(sectionTwo);
            if (!entry.isIntersecting) {
                sectionBike2.classList.remove("active");
                leftTwo.classList.remove("active");
                rightTwo.classList.remove("active");
                imageTitleTwo.classList.remove("active");
                imageTextTwo.classList.remove("active");
            } else {
                logo.style = `--logo-color:${logoColorChanger.roadbike}`;

                sectionBike2.classList.add("active");
                leftTwo.classList.add("active");
                rightTwo.classList.add("active");
                imageTitleTwo.classList.add("active");
                imageTextTwo.classList.add("active");
            }
            console.log(entry.isIntersecting);
        });
    },
    sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);

// Start section bike3 

const sectionThreeOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

const sectionThreeObserver = new IntersectionObserver(function(
        entries,
        sectionThreeObserver
    ) {
        entries.forEach(entry => {
            // console.log(sectionThree);
            if (!entry.isIntersecting) {
                sectionBike3.classList.remove("active");
                leftThree.classList.remove("active");
                rightThree.classList.remove("active");
                imageTitleThree.classList.remove("active");
                imageTextThree.classList.remove("active");

            } else {
                logo.style = `--logo-color:${logoColorChanger.mountainbike}`;

                sectionBike3.classList.add("active");
                leftThree.classList.add("active");
                rightThree.classList.add("active");
                imageTitleThree.classList.add("active");
                imageTextThree.classList.add("active");
            }
            console.log(entry.isIntersecting);
        });
    },
    sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);

//#region contactform intersection observer
const contactForm = document.querySelector("#Contact");



const contactOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
};

const contactObserver = new IntersectionObserver(function(
        entries,
        contactObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                logo.style = `--logo-color:${logoColorChanger.contactform}`;

            }
            console.log(entry.isIntersecting);
        });
    },
    contactOptions);

contactObserver.observe(contactForm);

//#endregion  contactform intersection observer

logo.style = `--logo-color:${logoColorChanger.home}`;

//#endregion intersection observer