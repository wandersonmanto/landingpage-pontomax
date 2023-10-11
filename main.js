document.addEventListener('DOMContentLoaded', function() {


  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY;

    if(currentPosition > alturaHero) {
      hideHeader();

    } else {
      showHeader();
    }
  });


});

function hideHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}
function showHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}