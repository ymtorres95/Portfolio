// scroll to top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("ScrolltoTop").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE
}

// nav menu

window.onload = function () {
  const menuButton = document.getElementById("menu-button");
};

const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");

menuButton.addEventListener("click", function () {
  if (sideMenu.style.display === "none") {
    sideMenu.style.display = "block";
  } else {
    sideMenu.style.display = "none";
  }
});
