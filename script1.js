// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle search bar on click
  const searchIcon = document.querySelector('.search-icon');
  const searchBar = document.querySelector('.search-bar');
  
  searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
  });
  
  // Carousel autoplay pause on hover and resume on leave
  const items = document.querySelectorAll('.slider .item');
  let isPaused = false;
  
  document.querySelector('.slider').addEventListener('mouseenter', () => {
    items.forEach(item => item.style.animationPlayState = 'paused');
    isPaused = true;
  });
  
  document.querySelector('.slider').addEventListener('mouseleave', () => {
    if (isPaused) {
      items.forEach(item => item.style.animationPlayState = 'running');
      isPaused = false;
    }
  });
  
  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // Scroll to top functionality
  const scrollToTopBtn = document.querySelector('.foot-panel1');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  