const accordion = () => {

  const panelGroup = document.querySelectorAll('.panel-group')[0],
        panelHeading = panelGroup.querySelectorAll('.panel-heading'),
        panelCollapse = panelGroup.querySelectorAll('.panel-collapse'),
        constructBtn = panelGroup.querySelectorAll('.construct-btn');
  
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

    let target = event.target.closest('.panel-heading, .construct-btn');
        
    
      if (target) {
        panelHeading.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });

        constructBtn.forEach((element, index) => {
          if (element === target) {
            if (index === 3) {
              toggleTabContent(0);
            } else {
              toggleTabContent(index + 1);
            }
          }
        });
      }
  });

};


export default accordion;