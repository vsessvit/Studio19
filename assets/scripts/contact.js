// Contact form functionality
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('formSuccess');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    successMessage.style.display = 'block';
    form.reset();
    // Remove validation state after successful submission
    form.classList.remove('was-validated');
  }
  form.classList.add('was-validated');
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