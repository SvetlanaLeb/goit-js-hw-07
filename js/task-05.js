const input = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    greeting.textContent = event.currentTarget.value;
    greeting.style.color = "blue";
    greeting.style.fontFamily = "Trocchi";
    greeting.style.fontSize="34px"
    
    if (!event.currentTarget.value) {
        
        greeting.textContent = 'незнакомец';
        greeting.style.color = "#424242";
        greeting.style.fontFamily = "Segoe UI";
        greeting.style.fontSize="32px"
 }
};

input.addEventListener('focus', onInputFocus);

function onInputFocus(event) {
    
   
    greeting.style.fontStyle ="italic"
}

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    greeting.style.color = "#424242";
    greeting.style.fontStyle = "normal"
    greeting.style.fontFamily = "Segoe UI";
    greeting.style.fontSize="32px"
}