
var anchor = document.querySelector("#menu").querySelectorAll("a");

console.log(anchor);
for(var i = 0; i < 3; i++) {
    if(window.location.href === anchor[i].href) {
        anchor[i].classList.add("active")
    }
}



var btnToggleMenu = document.querySelector(".btn--toggle-menu");
function toggleMenu(){
    var mainNav = document.querySelector("#menu");
    mainNav.classList.toggle("menu-is-open");
    document.body.classList.toggle("no-scroll")
}
btnToggleMenu.addEventListener("click", toggleMenu);