// this function scrolls to the top of the page
function scrollUp() {
  window.scrollTo(0, 0);
}
// this function opens the navbar
function expand() {
  document.querySelector(".links").classList.toggle("open");
}
// this function make the up button appear and disappear
function contorlUp() {
  // if we scrolled more than 500px show it else hide it
  const btn = document.querySelector(".scroll-up");
  if (window.scrollY > 500) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "all";
  } else {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
}

function changeNavColor() {
  // if we scrolled more than 100px make the navbar gray else leave it the way it was
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("gray");
  } else if (window.scrollY < 50) {
    navbar.classList.remove("gray");
  }
}
let scrolling = null;
function hideNav() {
  // when we stop scrolling tha last set time out will not be cleared and it will make the nav disappear but if we are at the top of the page it will not disappear
  const navbar = document.querySelector(".navbar");
  navbar.style.top = "0";
  clearTimeout(scrolling);
  scrolling = setTimeout(function () {
    navbar.style.top = "-100%";
  }, 3000);
  if (window.scrollY < 50) {
    clearTimeout(scrolling);
  }
}
// if the section's top offest is >= the scroll position highlight its nav item. 
function activateNavLinks() {
  let links = document.querySelectorAll(".link");
  let sectionsOffset = [];
  document.querySelectorAll("section").forEach((section) => {
    sectionsOffset.push(section.offsetTop);
  });
  sectionsOffset.forEach((offset, i) => {
    if (window.scrollY + 120 >= offset) {
      links.forEach((link, j) => {
        if (i === j) {
          console.log(offset, window.scrollY);
          link.style.backgroundColor = "#a3d2ca";
        } else {
          link.style.backgroundColor = "transparent";
        }
      });
    }
  });
}
window.onscroll = () => {
  contorlUp();
  changeNavColor();
  activateNavLinks();
  hideNav();
};
