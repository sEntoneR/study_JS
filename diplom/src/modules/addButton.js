const addButton = () => {
  const hiddenBlocks = document.querySelectorAll('.hidden'),
    addSentenceBtn = document.querySelector('.add-sentence-btn');

  addSentenceBtn.addEventListener('click', () => {
    hiddenBlocks.forEach((item) => item.classList.remove('hidden'));
    addSentenceBtn.classList.add('hidden');

  });

};

export default addButton;