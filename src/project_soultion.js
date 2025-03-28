'use strict';
// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.type;

  if (filter === null) {
    return;
  }
  handleActiveSelection(e);
  filterProjects(filter);
});

function handleActiveSelection(e) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  e.target.classList.add('category--selected');
}

function filterProjects(filter) {
  projectsContainer.classList.add('anim-out');
  projects.forEach((project) => {
    project.classList.remove('showProject', 'hideProject');
    if (filter === project.dataset.type || filter === 'all') {
      project.classList.add('showProject');
    } else {
      project.classList.add('hideProject');
    }
    setTimeout(() => {
      projectsContainer.classList.remove('anim-out');
    }, 250);
  });
}
