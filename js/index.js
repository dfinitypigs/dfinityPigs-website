
const menu = document.querySelector('.menu');
const trigger = document.querySelector('.trigger');

function toggle() {
    menu.classList.toggle('menu--open');
    
  }
  trigger.addEventListener('click', toggle);


  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }