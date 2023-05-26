
var anchor = document.querySelector("#mainMenu").querySelectorAll("a");

console.log(anchor);
for(var i = 0; i < 3; i++) {
    if(window.location.href === anchor[i].href) {
        anchor[i].classList.add("active")
    }
}