const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid')
        
    }
    else { event.currentTarget.classList.add('invalid') }
};

    
