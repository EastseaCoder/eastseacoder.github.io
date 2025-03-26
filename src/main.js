document.addEventListener('DOMContentLoaded', () => {
  handleArrowHide();
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

  const headerObj = addHeaderInfo();
  if (headerObj.scrollY > headerObj.headerHeight) {
    header.classList.add('header__black');
    header.style.transition = 'all 300ms linear';
  } else {
    header.classList.remove('header__black');
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
  }
}

function handleArrowHide() {
  // Arrow up버튼을 아래로 스크롤시 투명하게 처리함
  const arrow = document.querySelector('.arrow-up');
  const scrollY = window.scrollY;
  const homeHeight = home.offsetHeight;
  if (scrollY >= homeHeight / 2) {
    arrow.classList.remove('arrow-hide');
  } else {
    arrow.classList.add('arrow-hide');
  }
}

document.addEventListener('scroll', (e) => {
  e.preventDefault();
  handleDarkMode();
  handleHomeOpacity();
  handleArrowHide();
});
