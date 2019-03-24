// Function for making the navbar fixed when scrolling the page

window.onscroll = function() { scroll(); };
var navbar = document.getElementById("navbar-default");
var navbarFixed = navbar.offsetTop;

function scroll() {
    if (window.pageYOffset >= navbarFixed) {
        navbar.classList.add("navbarFixed");
    }
    else {
        navbar.classList.remove("navbarFixed");
    }
}