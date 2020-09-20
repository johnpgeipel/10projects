const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
const btnClose = document.getElementById("btn-close");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
});

btnClose.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
});