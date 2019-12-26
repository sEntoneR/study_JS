const accordionTwo = () => {
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

export default accordionTwo;