var buttonBurger = document.querySelector('.button-burger');
var headerButtons = document.querySelector('.header__buttons');
var mobileMenu = document.querySelector('.mobile-menu');

buttonBurger.addEventListener('click', function (evt) {
  if (buttonBurger.classList.contains('button-open')) {
    headerButtons.style.display = 'flex';
    buttonBurger.classList.remove('button-open');
    buttonBurger.classList.add('button-close');
    mobileMenu.classList.add('open');
  } 
  else if (buttonBurger.classList.contains('button-close')) {
    headerButtons.style.display = 'none';
    buttonBurger.classList.add('button-open');
    buttonBurger.classList.remove('button-close');
    mobileMenu.classList.remove('open');
  }
});

/*buttonBurger.addEventListener('click', function () {
  headerButtons.style.display = 'none';
  buttonBurger.classList.remove('button-close');
  buttonBurger.classList.add('button-open');
});*/
