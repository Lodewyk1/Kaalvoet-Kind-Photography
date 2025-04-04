// JavaScript to toggle the burger menu
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});