const accordion = () => {
  const accordion = document.getElementById('accordion');
  accordion.addEventListener('click', (event) => {
    const target = event.target,
      heading = target.closest('.panel-heading'),
      nextStep = target.closest('.construct-btn');

    const collapse = heading ? heading.nextElementSibling :
      nextStep ? target.closest('.panel').nextElementSibling.querySelector('.panel-collapse') : heading;

    if (collapse) {
      event.preventDefault();
      target.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(item => {
        item.classList.toggle('in', item === collapse && !item.classList.contains('in'));
      });
    }
  });
};

export default accordion;