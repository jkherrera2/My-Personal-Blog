// NAV BURGER
const burger = document.querySelector(".burger");
const navmenu = document.querySelector("ul");
const navbg = document.querySelector("nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navmenu.classList.toggle("active");
    navbg.classList.toggle("active");
})

// NAV SCROLL EFFECT
const links = document.querySelectorAll("ul > li > a");
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".gradient");
const bars = document.querySelectorAll(".bar");
const logo = document.querySelector(".logo");
const contacts = document.querySelector(".contact");

const options = {
    rootMargin: "-500px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("navbar-scrolled");
            logo.classList.add("changecolor");
            contacts.classList.add("changeborder");
            links.forEach((e) => {
                e.classList.add("changecolor");
            })
            bars.forEach((e) => {
                e.classList.add("changebg");
            })
        }else {
            nav.classList.remove("navbar-scrolled");
            logo.classList.remove("changecolor");
            contacts.classList.remove("changeborder");
            links.forEach((e) => {
                e.classList.remove("changecolor");
            })
            bars.forEach((e) => {
                e.classList.remove("changebg");
            })
        }
    })
}, options);

observer.observe(sectionOne);