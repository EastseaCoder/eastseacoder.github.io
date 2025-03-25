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
window.addEventListener('scroll', () => {
  const headerObj = addHeaderInfo();
  if (headerObj.scrollY > headerObj.headerHeight) {
    header.classList.add('header__black');
    header.style.transition = 'all 300ms linear';
  } else {
    header.classList.remove('header__black');
  }
});
