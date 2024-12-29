document.addEventListener('DOMContentLoaded', () => {
    const navHeader = document.querySelector('.nav-header');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navHeader.classList.add('scrolled');
      } else {
        navHeader.classList.remove('scrolled');
      }
    });
  });
  