// Gallery lightbox functionality
const lightboxLinks = Array.from(document.querySelectorAll('.lightbox'));
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
const closeBtn = document.getElementById('lightbox-close');

let currentIndex = 0;
let currentSection = '';
let sectionLinks = [];

function showImage(index) {
  const link = sectionLinks[index];
  if (link) {
    lightboxImage.src = link.href;
    lightboxOverlay.style.display = 'flex';
    currentIndex = index;
  }
}

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

// Scroll to section after full page load and layout stability
window.addEventListener('load', () => {
  const targetId = localStorage.getItem('scrollToProject');
  if (targetId) {
    requestAnimationFrame(() => {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollToProject');
      }, 100);
    });
  }
});

// Lightbox event listeners
lightboxLinks.forEach((link, index) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    currentSection = link.dataset.section;
    sectionLinks = lightboxLinks.filter(l => l.dataset.section === currentSection);
    currentIndex = sectionLinks.indexOf(link);
    showImage(currentIndex);
  });
});

prevBtn.addEventListener('click', e => {
  e.stopPropagation();
  showImage((currentIndex - 1 + sectionLinks.length) % sectionLinks.length);
});

nextBtn.addEventListener('click', e => {
  e.stopPropagation();
  showImage((currentIndex + 1) % sectionLinks.length);
});

closeBtn.addEventListener('click', e => {
  e.stopPropagation();
  lightboxOverlay.style.display = 'none';
  lightboxImage.src = '';
});

lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
  lightboxImage.src = '';
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (lightboxOverlay.style.display === 'flex') {
    if (e.key === 'ArrowLeft') {
      showImage((currentIndex - 1 + sectionLinks.length) % sectionLinks.length);
    } else if (e.key === 'ArrowRight') {
      showImage((currentIndex + 1) % sectionLinks.length);
    } else if (e.key === 'Escape') {
      lightboxOverlay.style.display = 'none';
      lightboxImage.src = '';
    }
  }
});