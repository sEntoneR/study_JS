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

const addButton = () => {
const hiddenBlocks = document.querySelectorAll('.hidden'),
      addSentenceBtn = document.querySelector('.add-sentence-btn');
      
      addSentenceBtn.addEventListener('click', () => {
        hiddenBlocks.forEach((item)=>item.classList.remove('hidden'));
        addSentenceBtn.classList.add('hidden');
        
      });

};

addButton();