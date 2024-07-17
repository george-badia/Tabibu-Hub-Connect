// ----------- menu toggle--------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   navLinks.classList.toggle('active');
});
