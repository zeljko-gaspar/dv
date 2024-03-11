// import accounts from './accounts';
// import api from './api';
// import database from './database';
// import main from './main'

// add class on load
window.onload = function() {
	document.body.className = 'loaded';
};
// add class on scroll page
function handleScroll() {
  if (window.scrollY > 200) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
}
window.addEventListener('resize', handleScroll);
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// export default animations;