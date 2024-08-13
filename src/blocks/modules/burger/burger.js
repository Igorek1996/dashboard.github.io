const burger = document.getElementById("burger");
const nav = document.getElementById("sidebar");
const body = document.getElementById("body");
const main = document.getElementById("main");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("active");
    main.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("active");
    main.classList.remove("active");
});
