// GSAP animations
gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out" });
gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1.2, delay: 0.5, ease: "power3.out" });

// Project links functionality
const projectLinks = document.querySelectorAll('.project-link-hero');
const heroContent = document.getElementById('hero-content');
const projectInfo = document.getElementById('project-info');
const projectTitle = document.getElementById('project-title');
const viewProjectBtn = document.getElementById('view-project-btn');

let selectedAnchor = '';

projectLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const newImage = link.getAttribute('data-image');
    const projectName = link.textContent.trim();
    selectedAnchor = projectName.replace(/^[0-9]+\s*/, '').toLowerCase().replace(/\s+/g, '-');

    const style = document.createElement('style');
    style.innerHTML = `
      .hero::after {
        background-image: url('${newImage}');
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    heroContent.style.display = 'none';
    projectTitle.textContent = projectName;

    gsap.fromTo(projectInfo, 
      { opacity: 0, y: 50, pointerEvents: 'none' }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", pointerEvents: 'auto' }
    );
  });
});

// View project button functionality
viewProjectBtn.addEventListener('click', () => {
  if (selectedAnchor) {
    window.location.href = `gallery.html#${selectedAnchor}`;
  } else {
    alert("Please select a project first.");
  }
});

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