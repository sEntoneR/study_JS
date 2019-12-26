const calculator = () => {

  const myonoffswitch = document.getElementById('myonoffswitch'),
        myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
        selectBoxTwo = document.querySelector('.select-box-two'),
        meters = document.getElementById('meters'),
        calcResult = document.getElementById('calc-result'),
        calcItems = document.querySelectorAll('.form-control'),
        panelGroup = document.querySelector('.panel-group');

  let mySeptic = {},

      camera = 0,
      diameter = 0,
      rings = 0,
      diameterTwo = 0,
      rings2 = 0,
      floor = 0;
      

  if (myonoffswitch.checked) {
    selectBoxTwo.style.display = 'none';
    camera = 10000;
  } 
  
  if (myonoffswitchTwo.checked) {
    floor = 1000;
  }

  panelGroup.addEventListener('change', (event) => {
    const target = event.target;

    if (target === myonoffswitch) {
      
      if (myonoffswitch.checked) {
            if (myonoffswitchTwo.checked) {
              floor = 1000;
              mySeptic.floor = true;
            } else {
              floor = 0;
              mySeptic.floor = false;
            }
        selectBoxTwo.style.display = 'none';
        camera = 10000;
        mySeptic.doubleCamera = false;
      } else {
            if (myonoffswitchTwo.checked) {
              floor = 2000;
              mySeptic.floor = true;
            } else {
              floor = 0;
              mySeptic.floor = false;
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
            floor = 1000;
          } else {
            floor = 2000;
          }
          mySeptic.floor = true;
      } else  {   
        floor = 0;
        mySeptic.floor = false;
      }
    }

    if (target === meters) {
      mySeptic.meters = meters.value;
    }

    countSum();
    mySeptic.cost = calcResult.value;
  });

  const countSum = () => {
    let diametrValue1 = diameter * (camera + floor),
        ringsValue1 = (camera + floor + diametrValue1) * rings,
        diametrValue2 = diameterTwo * (camera + floor),
        ringsValue2 = (camera + floor + diametrValue2) * rings2;

    let total = +Math.round(camera + diametrValue1 + ringsValue1 + diametrValue2 + ringsValue2 + floor);
    
    calcResult.value = total;

  };

  const accordion = document.querySelector('#accordion');
  accordion.addEventListener('click', event => {
    if(event.target.closest('.send-calc-btn')){
      localStorage.test = JSON.stringify(mySeptic);
    }
  });

};

export default calculator;