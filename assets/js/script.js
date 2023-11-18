'use strict';

// Animate Hamburger menu
const hamburgerMenu = (element) => {
  element.classList.toggle('change');

  // Show and hide dropdown menu on mobile version
  const dropdownMenu = document.getElementById('mobile');
  dropdownMenu.classList.toggle('hidden');
};

document.addEventListener('scroll', () => {
  const header = document.getElementById('nav-bar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
