const hbutton = document.querySelector('.hamb');
const mobileMenu = document.querySelector('#mobile_menu');
const closeMenu = document.querySelector('.topx');
const contentMenu = document.querySelector('#content');
const libutton1 = document.querySelector('.top-a1');
const libutton2 = document.querySelector('.top-a2');


hbutton.addEventListener('click', () => {
  mobileMenu.classList.replace('hidemobile', 'showmobile');
  contentMenu.classList.replace('showcontent', 'hidemobile');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.replace('showmobile', 'hidemobile');
  contentMenu.classList.replace('hidemobile', 'showcontent');
});

libutton1.addEventListener('click', () => {
  mobileMenu.classList.replace('showmobile', 'hidemobile');
  contentMenu.classList.replace('hidemobile', 'showcontent');
});

libutton2.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
});