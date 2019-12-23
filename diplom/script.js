'use strict';

// popup

const togglePopUp = () => {
// const popups = document.querySelectorAll('.popup');
let isModalOpened = false;
let modal = null;

  document.body.addEventListener ('click', () => {

  const element = event.target;
  const elementClasses = element.classList.toString();



  if (elementClasses.match(/discount|call|check/) && !isModalOpened){
     const modalClass = `.popup-${elementClasses.match(/discount|call|check/)[0]}`;
     modal = document.querySelector(modalClass);
     modal.classList.add('popup--show');
     isModalOpened = true;

  }

  if (element.classList.contains('popup-close') || isModalOpened && element.classList.contains('popup--show')){
      // popups.forEach((popup) => popup.classList.remove('popup--show'));
      modal.classList.remove('popup--show');
      isModalOpened = false;
  } 
});
};

togglePopUp();

// addbutton

const addButton = () => {
const hiddenBlocks = document.querySelectorAll('.hidden'),
      addSentenceBtn = document.querySelector('.add-sentence-btn');
      
      addSentenceBtn.addEventListener('click', () => {
        hiddenBlocks.forEach((item)=>item.classList.remove('hidden'));
        addSentenceBtn.classList.add('hidden');
        
      });

};

addButton();

// аккордион 

const accordionTwo = (elem) => {
  const accordionTwo = document.getElementById('accordion-two'),
        panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
        panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

  const togglePanel = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
    if (index === i) {
      panelCollapse[i].classList.add('in');
    } else {
      panelCollapse[i].classList.remove('in');
    }
  }
};

accordionTwo.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.panel-heading');
  if (target) {
    panelHeading.forEach((item, i) => {
      event.preventDefault();
      if (item === target) {
        togglePanel(i);
      }
    });
  }
});


};

accordionTwo();
