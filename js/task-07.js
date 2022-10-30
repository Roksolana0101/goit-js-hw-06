const spell = {
	controlRef: document.querySelector('#font-size-control'),
	textDifSizeRef: document.querySelector('#text'),
};

spell.controlRef.addEventListener('input', onSizeChanger);

function onSizeChanger() {
	spell.textDifSizeRef.style.fontSize = `${spell.controlRef.value}px`;
}