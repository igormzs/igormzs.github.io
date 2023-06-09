
document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    const currentPath = window.location.pathname;
  
    // Find the menu links and add the active class to the corresponding link
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link) => {
      // Modify the comparison logic to check if the current path is equal to the link's href attribute
      if (link.getAttribute('href') === currentPath || link.getAttribute('href') === `.${currentPath}`) {
        link.classList.add('active');
      }
    });
  });
  

/* var anchor = document.querySelector("#menu").querySelectorAll("a");

console.log(anchor);
for(var i = 0; i < 3; i++) {
    if(window.location.href === anchor[i].href) {
        anchor[i].classList.add("active")
    }
} */



var btnToggleMenu = document.querySelector(".btn--toggle-menu");
function toggleMenu(){
    var mainNav = document.querySelector("#menu");
    mainNav.classList.toggle("menu-is-open");
    document.body.classList.toggle("no-scroll")
}
btnToggleMenu.addEventListener("click", toggleMenu);