const btn = {
    decrementBtnRef: document.querySelector('[data-action="decrement"]'),
    incrementBtnRef: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
}

btn.decrementBtnRef.addEventListener('click', onDecrement);

btn.incrementBtnRef.addEventListener('click', onIncrement);

let counterValue = 0;

function onDecrement() {
	counterValue -= 1;
	btn.valueRef.textContent = counterValue;
}

function onIncrement() {
	counterValue += 1;
	btn.valueRef.textContent = counterValue;
}
