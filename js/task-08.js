const input = document.querySelector('input[type="number"]');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const box=document.querySelectorAll('box')

renderButton.addEventListener('click', onButtonRender);
destroyButton.addEventListener('click', onButtonDestroy);


let boxesArr = [];


function createBoxes(amount) {
  
   for (let i = 0; i < amount; i += 1) {
     
      const div = document.createElement('div');
      
      div.classList = 'box';
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.border=`${2 + i}px solid orangered`;
      div.style.backgroundColor = `rgb(
         ${Math.ceil(Math.random() * 250)}, 
         ${Math.ceil(Math.random() * 250)}, 
         ${Math.ceil(Math.random() * 250)}
         )`;
      
      boxesArr.push(div)
   }
   
   boxes.append(...boxesArr)
};

function destroyBoxes(amount) {
   input.value = '';
   
   for (let i = 0; i < amount; i += 1) {
      boxes.removeChild(boxesArr[i])
   };

   boxesArr=[]
};


function onButtonRender(event) {
   createBoxes(input.value);
   
};

function onButtonDestroy(event) {
  destroyBoxes(input.value)
};

