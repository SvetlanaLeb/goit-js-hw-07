const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
input.addEventListener('focus', onInputFocus);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid')
        
    }
    else { event.currentTarget.classList.add('invalid') }
    
};

function onInputFocus(event) {
    
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.remove('invalid')
}

