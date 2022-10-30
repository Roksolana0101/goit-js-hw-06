const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', onInputValidate);

function onInputValidate() {
	if (inputElement.value.length === Number(inputElement.dataset.length)) {
		inputElement.classList.remove('invalid');
		inputElement.classList.add('valid');
	} else {
		inputElement.classList.remove('valid');
		inputElement.classList.add('invalid');
	}
}