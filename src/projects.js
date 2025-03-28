'use strict';

const categories = document.querySelectorAll('.category');
const project = Array.from(document.querySelectorAll('.project'));

categories.forEach((category) => {
  category.addEventListener('click', (e) => {
    e.preventDefault();
    btnSelected(e);
    project.forEach((project) => {
      projectHide(project);
    });
    if (category.dataset.type === 'all') {
      project.forEach((project) => {
        projectStyle(project);
      });
    } else {
      const result = filterProject(project, category);
      result.forEach((project) => {
        projectStyle(project);
      });
    }
  });
});
function btnSelected(e) {
  categories.forEach((category) => {
    category.classList.remove('category--selected');
  });
  e.target.classList.add('category--selected');
}
function filterProject(project, category) {
  const result = project.filter(
    (item) => item.dataset.type === category.dataset.type
  );
  return result;
}
function projectStyle(project) {
  project.style.opacity = 1;
  project.style.transform = 'scale(1)';
  project.style.pointerEvents = 'auto';
}

function projectHide(project) {
  project.style.pointerEvents = 'none';
  project.style.opacity = 0;
  project.style.transform = 'scale(0.8)';
}
