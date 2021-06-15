const input = document.querySelector('input[type="number"]');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const box=document.querySelectorAll('box')

renderButton.addEventListener('click', onButtonRender);
destroyButton.addEventListener('click', onButtonDestroy);


let boxesArr = [];
let lastElWidth=30;
let lastElHeight=30;

function creatingBoxes(amount) {
   
   const boxesArray = Array.from({ length: amount }, (v, i) => i + 1);
   
   const creatingBoxes = boxesArray.map((elem) => {
     
      const div = document.createElement('div');
   
      div.classList = 'box';
      div.style.width = `${lastElWidth + elem * 10}px`;
      div.style.height = `${lastElHeight + elem * 10}px`;
      div.style.border = `${2 + elem}px solid orangered`;
      div.style.backgroundColor = `rgb(
      ${Math.ceil(Math.random() * 250)}, 
      ${Math.ceil(Math.random() * 250)}, 
      ${Math.ceil(Math.random() * 250)}
      )`;
      boxesArr.push(div);
      return div
      
   });
   
   lastElWidth = parseFloat(boxesArr[boxesArr.length - 1].style.width);
   lastElHeight =parseFloat( boxesArr[boxesArr.length - 1].style.height);
   
   boxes.append(...creatingBoxes);
   
};

function destroyBoxes(amount) {
   input.value = '';

   boxesArr.forEach(elem=>boxes.removeChild(elem))

   boxesArr = []
   lastElWidth=30;
   lastElHeight=30;
};


function onButtonRender(event) {
   creatingBoxes(input.value);
   
};

function onButtonDestroy(event) {
   destroyBoxes(input.value)
   
};

