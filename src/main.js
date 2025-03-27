'use strict';
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', (e) => {
    handleDarkMode();
    handleHomeOpacity();
    handleArrowHide();
  });
  screenChange(mql);
});

function handleDarkMode() {
  // Header에 페이지 아래로 스크롤시 다크 스타일링 적용
  const header = document.querySelector('.header');
  function addHeaderInfo() {
    const headerInfo = header.getBoundingClientRect();
    const headerObj = {
      headerHeight: headerInfo.height,
      scrollY: window.scrollY,
    };
    return headerObj;
  }
  if (!mql.matches) {
    const headerObj = addHeaderInfo();
    if (headerObj.scrollY > headerObj.headerHeight) {
      header.classList.add('header__black');
      header.style.transition = 'all 300ms linear';
    } else {
      header.classList.remove('header__black');
    }
  } else {
    const headerObj = addHeaderInfo();
    if (headerObj.scrollY > headerObj.headerHeight) {
      header.style.opacity = '0';
      header.style.transition = 'all 300ms linear';
    } else {
      header.style.opacity = '1';
    }
  }
}

function handleHomeOpacity() {
  // Home 섹션을 아래로 스크롤시 투명하게 처리함
  const home = document.querySelector('.home__container');
  const homeHeight = home.offsetHeight;

  const scroll =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (scroll > 0) {
    home.style.opacity = Math.max(0, Math.min(1, -scroll / homeHeight + 1));
    // const opacity = 1 - scroll / homeHeight;
  } else {
    home.style.opacity = 1;
  }
}

function handleArrowHide() {
  // Arrow up버튼을 아래로 스크롤시 투명하게 처리함
  const home = document.querySelector('.home__container');
  const arrow = document.querySelector('.arrow-up');
  const scrollY = window.scrollY;
  const homeHeight = home.offsetHeight;
  if (scrollY >= homeHeight / 2) {
    arrow.classList.remove('arrow-hide');
  } else {
    arrow.classList.add('arrow-hide');
  }
}

const mql = window.matchMedia('(max-width: 768px)');

function setupMobileMenu() {
  const nav = document.querySelector('.header__nav');
  const menuBtn = document.querySelector('.menu__Btn');
  const headerContainer = document.querySelector('.header__container');
  const header = document.querySelector('.header');
  const headerMenu = document.querySelectorAll('.header__menu__item');

  nav.classList.remove('active');
  nav.classList.add('hidden');

  if (!menuBtn) {
    const btn = document.createElement('button');
    btn.classList.add('menu__Btn');
    btn.innerHTML = `<i class="fa-solid fa-bars fa-lg"></i>`;
    headerContainer.appendChild(btn);

    btn.addEventListener('click', () => {
      nav.classList.toggle('hidden');
      header.classList.add('header__black');
    });

    headerMenu.forEach((menu) => {
      menu.addEventListener('click', () => {
        nav.classList.add('hidden');
        nav.classList.remove('active');
      });
    });
  }
}

function setupDesktopMenu() {
  const nav = document.querySelector('.header__nav');
  const menuBtn = document.querySelector('.menu__Btn');
  const headerMenu = document.querySelectorAll('.header__menu__item');

  nav.classList.remove('hidden');
  if (menuBtn) menuBtn.remove();

  headerMenu.forEach((menu) => {
    menu.addEventListener('click', () => nav.classList.add('active'));
  });
}

function screenChange(e) {
  if (e.matches) {
    setupMobileMenu();
  } else {
    setupDesktopMenu();
  }
}
mql.addEventListener('change', screenChange);
