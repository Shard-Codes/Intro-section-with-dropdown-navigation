// Html import elements
const NavMenu = document.querySelector('.nav__menu'),
navToggler = document.querySelector('.nav__toggle'),
navClose = document.querySelector('.nav__close');

// Toggle navMenu
navToggler.addEventListener('click', () =>{
  NavMenu.classList.add('open-menu');
})

navClose.addEventListener('click', () =>{
  NavMenu.classList.remove('open-menu');
})