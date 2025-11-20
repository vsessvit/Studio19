// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
  }
});