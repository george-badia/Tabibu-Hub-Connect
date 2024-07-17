
document.addEventListener('DOMContentLoaded',() =>{
// ----------- menu toggle--------------
//add click event listener
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   navLinks.classList.toggle('active');
});
//------------Logo and scroll top actions---------
//selecting the logo element on the webpage and storing it in a variable logo.
const logo = document.querySelector('.logo');
//selecting the first link inside the list item in the navigation and and storing it in a variable homeLink.
const homeLink = document.querySelector('#navLinks li:first-child a');
// scroll to the top of the page by the scrollToTop function
function scrollToTop() {
   window.scrollTo({
      top:0,
      behaviour: 'smooth'
   })
};
//--click event listener for logo--
logo.addEventListener('click',function(event) {
   event.preventDefault()
   scrollToTop();
});
// lick event listener for "Home" link is clicked and prevent the default behavior of the link
homeLink.addEventListener('click',function (event){
   event.preventDefault()
   })
});

