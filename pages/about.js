// NAV BURGER
const burger = document.querySelector(".burger");
const navmenu = document.querySelector("ul");
const navbg = document.querySelector("nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navmenu.classList.toggle("active");
    navbg.classList.toggle("active");
})

