
let counterValue=0;
const counter=document.querySelector('#value');

const incrementButtonClickHandler= ()=>{
    
    counterValue+=1;
    counter.textContent=`${counterValue}`
   };

const increment =() => {
   const buttonIncrement=document.querySelector('[ data-action="increment"]');
   buttonIncrement.addEventListener('click', incrementButtonClickHandler)
};

const decrementButtonClickHandler= ()=>{
    
    counterValue-=1;
    counter.textContent=`${counterValue}`
 };

const decrement =() => {
 const buttonDecrement=document.querySelector('[ data-action="decrement"]');
 buttonDecrement.addEventListener('click', decrementButtonClickHandler)
};



increment();
decrement();