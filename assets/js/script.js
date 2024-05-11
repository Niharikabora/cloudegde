'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 140) {
    header.classList.add("header-fixed");

  } else {
    header.classList.remove("header-fixed");

  }
});

/**
 * image slider
 */

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
}
prev.onclick = function(){
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
  slider.style.left = -items[active].offsetLeft + 'px';
  //
  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(()=> {next.click()}, 3000);


}

dots.forEach((li, key) => {
  li.addEventListener('click', ()=>{
    active = key;
    reloadSlider();
  })
})
window.onresize = function(event) {
  reloadSlider();
};

slider.style.width = items.length * 100 + "%" // change width of list according to the number of elements