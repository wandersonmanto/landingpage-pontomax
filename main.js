document.addEventListener('DOMContentLoaded', function() {

  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const currentPosition = window.screenY;
    if(currentPosition < alturaHero) {
      hideHeader();

    } else {

    }
  });

  // Seção de atrações, programação das abas
  buttons.forEach(currentButton => {
    currentButton.addEventListener('click', (botao) => {
      const abaTarget = botao.target.dataset.tabButton;
      displayNoneAbas();
      const aba = document.querySelector(`[data-tab-id=${abaTarget}]`)
      aba.classList.add('shows__list--is-active');
      removeButtonActive();
      botao.target.classList.add('shows__tabs__button--is-active');
      
    })
  })

  // Seção FAQ, accordion
  questions.forEach(currentQuestion => {
    currentQuestion.addEventListener('click', openOrClose)
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

function openOrClose(element) {
  const classe = 'faq__questions__item--is-open';
  const parentElement = element.target.parentNode;

  parentElement.classList.toggle(classe);
  
}

function removeButtonActive() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  buttons.forEach(currentButton => {
    currentButton.classList.remove('shows__tabs__button--is-active');
  });

}

function displayNoneAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  tabsContainer.forEach(currentTab => {
    currentTab.classList.remove('shows__list--is-active');
  })
}