
document.addEventListener('DOMContentLoaded',() =>{ 

   const categoryTitles = document.querySelectorAll('.category-title');
   const healthToolsContainer = document.getElementById('healthToolsContainer');
   const doctorsContainer = document.getElementById('doctorsContainer');
// ----------- menu toggle--------------//
//add click event listener
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   navLinks.classList.toggle('active');
});


//-------------------------Logo and scroll top actions------------------------//
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
   });

  
   // -------Initial fetch of all posts------//
   fetchPosts('all');
   //----------add event listener to category titles--------//
   
   categoryTitles.forEach('click',() => {
      title.addEventListener('click',()=>{
// Remove active class from all titles
      categoryTitles.forEach(t=>t.classListList.remove('active'))

// Add active class to clicked title
      title.add('active')

// Fetch posts for selected category
      const categoryId = title.id
      })  
   });
   
// Function to fetch and display posts
function fetchPosts() {
   fetch('http://localhost:3000/posts')
     .then(response => response.json())
     .then(data => {
       displayPosts(data);
     }) 
     
     .catch(error => console.error('Error fetching posts:', error));
 }
 
 // ---------Function to display posts on the DOM------//
// Initial fetch of posts
 fetchPosts();
 function displayPosts(posts) {
   const postsContainer = document.querySelector('.posts-main-container');
   postsContainer.innerHTML = ''; // Clear existing content
   posts.forEach(post => {
     const postCard = document.createElement('div');
     postCard.className = 'post';
     postCard.innerHTML = `
        <div class="post-img ${post.category}">
                       <img src="${post.image}" alt="${post.title}">
                       <div class="category-name">${post.category}</div>
                   </div>
                   <div class="post-content">
                       <div class="post-content-top">
                           <span><i class="fas fa-calendar"></i>${post.date}</span>
                           <span><i class="fas fa-comment"></i>${post.comments} Comments</span>
                       </div>
                       <h2>${post.title}</h2>
                       <p>${post.description}</p>
                       <a href="#" class="read-btn">Read More</a>
                   </div>
               `;
     postsContainer.appendChild(postCard);
   });
 }


 });

