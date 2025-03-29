'use strict';
const sections = document.querySelectorAll(
  '#home, #About,#skills,#work,#testimonial,#contact'
);
const headerMenu = document.querySelectorAll('.header__menu__item');
const arrowUp = document.querySelector('.arrow-up');
window.addEventListener('DOMContentLoaded', () => {
  createObserver();
  scrollSmoothHeaderMenu();
  arrowUpSmooth();
});

function scrollToTarget(target) {
  const targetElement = document.getElementById(target);

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}

function scrollSmoothHeaderMenu() {
  headerMenu.forEach((menu) => {
    menu.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTarget(menu.getAttribute('href').replace('#', ''));
    });
  });
}
function arrowUpSmooth() {
  arrowUp.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTarget(arrowUp.getAttribute('href').replace('#', ''));
  });
}

function createObserver() {
  let observer;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };

  observer = new IntersectionObserver(handleActive, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
}

function handleActive(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      headerMenu.forEach((menu) => {
        if (entry.target.dataset.id === menu.dataset.id) {
          menu.classList.add('active');
        }
      });
    } else {
      headerMenu.forEach((menu) => {
        menu.classList.remove('active');
      });
    }
  });
}
