document.addEventListener('DOMContentLoaded', () => {
    const categoryTitles = document.querySelectorAll('.category-title');
    const postsContainer = document.querySelector('.posts-main-container');
    const logo = document.querySelector('.logo');
    const homeLink = document.querySelector('#navLinks li:first-child a'); 
    
    // scroll to the top of the page by the scrollToTop function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Click event listener for logo
    logo.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        scrollToTop();
    });
    
    // add lick event listener for "Home" link is clicked and prevent the default behavior of the link 
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        scrollToTop();
    });
    const fetchPosts = async (category) => {
        try {
            const response = await fetch('db.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
  
            // Clear current posts
            postsContainer.innerHTML = '';
  
            // Filter posts based on the category
            const filteredPosts = category === 'all' 
                ? data.posts 
                : data.posts.filter(post => post.category === category);
  
            // Append posts to the container
            filteredPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
  
                postElement.innerHTML = `
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
                postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
  
   
    // Initial fetch of all posts, health tools, and doctors
    fetchPosts('all');
    //--------------- fetch and display health tools----------------//
  function fetchHealthTools() {
    fetch('http://localhost:3000/healthTools') 
      .then(response => response.json())
      .then(data => {
        displayHealthTools(data);
      })
      .catch(error => console.error('Error fetching health tools:', error));
  }
  
  // ------------------- display health tools on the DOM--------------------//
  function displayHealthTools(healthTools) {
    const healthToolsContainer = document.getElementById('health-tools-container');
    healthToolsContainer.innerHTML = ''; // Clear existing content
    healthTools.forEach(tool => {
      const toolCard = document.createElement('div');
      toolCard.className = 'health-tool-card';
      toolCard.innerHTML = `
                    <img src="${tool.image}" alt="${tool.name}">
                    <div class="health-tool-info">
                        <h3>${tool.name}</h3>
                        <p>${tool.description}</p>
                      <a href="#" class="read-btn" >Use Tool</a>
                    </div>
                `;
      healthToolsContainer.appendChild(toolCard);
    });
  }
  
  // ---------------------------- fetch and display doctors-------------------//
  function fetchDoctors() {
    fetch('http://localhost:3000/doctors')
      .then(response => response.json())
      .then(data => {
        displayDoctors(data); // Call function to display doctors
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }
  
  // ------------------Function to display doctors on the DOM------------//
  function displayDoctors(doctors) {
    const doctorsContainer = document.querySelector('.doctors-section');
    doctorsContainer.innerHTML = '';
    
  // // Add the title above the doctor cards
  // const titleElement = document.createElement('h2');
  // titleElement.textContent = 'Our Online Doctors';
  // doctorsContainer.appendChild(titleElement);
 // Clear existing content
    doctors.forEach(doctor => {
      const doctorCard = document.createElement('div');
      doctorCard.className = 'doctor-card';
      doctorCard.innerHTML = `
        <img src="${doctor.img}" alt="${doctor.name}">
        <div class="doctor-info">
        <h2>${doctor.title} </h2>
          <h3>${doctor.name}</h3>
          <p>${doctor.specialty}</p>
          <p>${doctor.bio}</p>
        </div>
      `;
      doctorsContainer.appendChild(doctorCard);
    });
  }
  
  // ----------------------Initial fetch of health tools and doctors------------//
  fetchHealthTools();
  fetchDoctors();
    // Add event listeners to category titles
    categoryTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Remove active class from all titles
            categoryTitles.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked title
            title.classList.add('active');
  
            // Fetch posts for selected category
            const categoryId = title.id;
            fetchPosts(categoryId);
        });
    });
    // ----------- menu toggle--------------//
  //add click event listener
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
     menuToggle.classList.toggle('active');
     navLinks.classList.toggle('active');
  });
    
    // --------------Contact form handling--------------//
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent successfully!');
        contactForm.reset();
    });
  });
  
  
  

/*this method only fetches posts and filter has not been intergrated used for development purpose */

// document.addEventListener('DOMContentLoaded',() =>{ 
  
//   //=======================Making an Initial fetch of all posts========================//
//   fetchPosts('all');


// //  fetch and display posts
// function fetchPosts() {
//    fetch('http://localhost:3000/posts')
//      .then(response => response.json())
//      .then(data => {
//        displayPosts(data);
//      }) 
     
//      .catch(error => console.error('Error fetching posts:', error));
//  }
//  //================Making an Initial fetch of pots====================//
//  fetchPosts();
//  // -------Display posts on the DOM------
//  function displayPosts(posts) {
//    const postsContainer = document.querySelector('.posts-main-container');
//    postsContainer.innerHTML = ''; // Clear existing content
//    posts.forEach(post => {
//      const postCard = document.createElement('div');
//      postCard.className = 'post';
//      postCard.innerHTML = `
//         <div class="post-img ${post.category}">
//                        <img src="${post.image}" alt="${post.title}">
//                        <div class="category-name">${post.category}</div>
//                    </div>
//                    <div class="post-content">
//                        <div class="post-content-top">
//                            <span><i class="fas fa-calendar"></i>${post.date}</span>
//                            <span><i class="fas fa-comment"></i>${post.comments} Comments</span>
//                        </div>
//                        <h2>${post.title}</h2>
//                        <p>${post.description}</p>
//                        <a href="#" class="read-btn">Read More</a>
//                    </div>
//                `;
//      postsContainer.appendChild(postCard);
//    });
//  }
 

// });





