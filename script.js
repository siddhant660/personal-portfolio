const icon = document.querySelector(".nav-icon");
const menu = document.querySelector(".home-button");
const close = document.querySelector(".close-btn");

icon.addEventListener("click", function() {
    menu.style.display = "block";
});

close.addEventListener("click", function() {
    menu.style.display = "none";

});

