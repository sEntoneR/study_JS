const calc = () => {

  const myonoffswitch = document.getElementById('myonoffswitch'),
        myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
        selectBoxTwo = document.querySelector('.select-box-two'),
        inputMeters = document.getElementById('meters'),
        calcResult = document.getElementById('calc-result'),
        calcItems = document.querySelectorAll('.form-control'),
        panelGroup = document.querySelector('.panel-group');
  
  let mySeptic = {},

      
  
      camera = 0,
      diameter = 0,
      rings = 0,
      diameterTwo = 0,
      rings2 = 0,
      bottom = 0;
      
  
  if (myonoffswitch.checked) {
    camera = 10000;
  }
  
  if (myonoffswitchTwo.checked) {
    bottom = 1000;
  }
  
  panelGroup.addEventListener('change', (event) => {
    const target = event.target;
  
    if (target === myonoffswitch) {
      
      if (myonoffswitch.checked) {
            if (myonoffswitchTwo.checked) {
              bottom = 1000;
              mySeptic.bottom = true;
            } else {
              bottom = 0;
              mySeptic.bottom = false;
            }
        selectBoxTwo.style.display = 'none';
        camera = 10000;
        mySeptic.doubleCamera = false;
      } else {
            if (myonoffswitchTwo.checked) {
              bottom = 2000;
              mySeptic.bottom = true;
            } else {
              bottom = 0;
              mySeptic.bottom = false;
            }
        selectBoxTwo.style.display = 'block';
        camera = 15000;
        mySeptic.doubleCamera = true;
      }
    }
  
    calcItems.forEach((elem, i) => {
      if (target === elem) {
        if (i == 0 && elem.value < 2) {
          diameter = 0;
          mySeptic.diameterOne = '1.4';
        } else if (i == 0 && elem.value == 2) {
          diameter = 0.2;
          mySeptic.diameterOne = '2';
        } else if (i == 2 && elem.value < 2) {
          diameterTwo = 0;
          mySeptic.diameterTwo = '1.4';
        } else if (i == 2 && elem.value == 2) {
          diameterTwo = 0.2;
          mySeptic.diameterTwo = '2';
        } else if (i == 1 && elem.value == 1) {
          rings = 0;
          mySeptic.ringsOne = '1';
        } else if (i == 1 && elem.value == 2) {
          rings = 0.3;
          mySeptic.ringsOne = '2';
        } else if (i == 1 && elem.value == 3) {
          rings = 0.5;
          mySeptic.ringsOne = '3';
        } else if (i == 3 && elem.value == 1) {
          rings2 = 0;
          mySeptic.ringsTwo = '1';
        } else if (i == 3 && elem.value == 2) {
          rings2 = 0.3;
          mySeptic.ringsTwo = '2';
        } else if (i == 3 && elem.value == 3) {
          rings2 = 0.5;
          mySeptic.ringsTwo = '3';
        }
      }
    });
  
    if (target === myonoffswitchTwo) {
      if (myonoffswitchTwo.checked) {
          if (myonoffswitch.checked) {
            bottom = 1000;
          } else {
            bottom = 2000;
          }
          mySeptic.bottom = true;
      } else  {   
        bottom = 0;
        mySeptic.bottom = false;
      }
    }
  
    if (target === inputMeters) {
      mySeptic.meters = inputMeters.value;
    }
  
    countSum();
    mySeptic.cost = calcResult.value;
  });
  
  const countSum = () => {
    let diametrValue1 = diameter * (camera + bottom),
        ringsValue1 = (camera + bottom + diametrValue1) * rings,
        diametrValue2 = diameterTwo * (camera + bottom),
        ringsValue2 = (camera + bottom + diametrValue2) * rings2;
  
    let total = +Math.round(camera + diametrValue1 + ringsValue1 + diametrValue2 + ringsValue2 + bottom);
    
    calcResult.value = total;
  };

  const constructorFrom = document.querySelector('#constructorFrom');

  constructorFrom.addEventListener('click', event => {
    if(event.target.closest('.send-calc-btn')){
      localStorage.test = JSON.stringify(mySeptic);
    }
  });
};

export default calc;
