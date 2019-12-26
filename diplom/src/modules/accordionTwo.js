const accordionTwo = () => {

  const panelGroup = document.querySelectorAll('.panel-group')[1],
        panelHeading = panelGroup.querySelectorAll('.panel-heading'),
        panelCollapse = panelGroup.querySelectorAll('.panel-collapse');
  
  const toggleTabContent = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index === i) {
        panelCollapse[i].classList.add('in');
      } else {
        panelCollapse[i].classList.remove('in');
      }
    }
  };
  
  panelGroup.addEventListener('click', (event) => {

    let target = event.target.closest('.panel-heading');
        
    
      if (target) {
        panelHeading.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
  });

};

export default accordionTwo;