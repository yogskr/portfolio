'use strict';

// Animate Hamburger menu
const hamburgerMenu = document.getElementById('hamburger');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change');

  // Show and hide dropdown menu on mobile version
  const mobileNav = document.getElementById('mobile');
  mobileNav.style.display =
    mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('scroll', () => {
  const header = document.getElementById('nav-bar');
  const dropdown = document.getElementById('dropdown');
  const logo = document.querySelector('.logo-text');
  const hamburgerLine = document.querySelectorAll('.line');
  const navItem = document.querySelectorAll('.nav-link');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
    dropdown.classList.add('scrolled');
    logo.classList.add('scrolled');

    for (let i = 0; i < hamburgerLine.length; i++) {
      hamburgerLine[i].style.backgroundColor = '#ffffff';
    }
  } else {
    header.classList.remove('scrolled');
    dropdown.classList.remove('scrolled');
    logo.classList.remove('scrolled');

    for (let i = 0; i < hamburgerLine.length; i++) {
      hamburgerLine[i].style.backgroundColor = '';
    }

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = '';
    }
  }
});
