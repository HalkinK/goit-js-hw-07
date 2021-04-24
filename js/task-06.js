const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', onInputChange);

const a = Number(inputRef.dataset.length);

function onInputChange(event) {

    if (event.currentTarget.value.length === a) {
        inputRef.classList.add('valid');

        inputRef.classList.value = 'valid'
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.value = 'invalid'
    }
}
