document.addEventListener('DOMContentLoaded', () => {
	const display = document.getElementById('display');
	const btns = document.querySelectorAll('button[data-value]');

	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			let value = btn.getAttribute('data-value');
			btnCallback(value);
		});
	});

	function btnCallback(value) {
		switch (value) {
			case '=':
				display.value = calculateResult();
				break;
			case 'C':
				clearDisplay();
				break;
			case 'DEL':
				deleteLast();
				break;
			default:
				appendToDisplay(value);
				break;
		}
	}
});

function checkDisplayForZero(value) {
	if (display.value === '0') {
		display.value = '';
	}
}

function clearDisplay() {
	display.value = '0';
}

function deleteLast() {
	display.value = display.value.slice(0, -1);
	if (display.value === '') {
		display.value = '0';
	}
}

function appendToDisplay(value) {
	checkDisplayForZero(value);
	if (value === '/') {
		display.value += '÷';
	} else if (value === '*') {
		display.value += '×';
	} else {
		display.value += value;
	}
}

function calculateResult() {
	const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
	try {
		return eval(expression) || 'Error';
	} catch (error) {
		return 'Error';
	}
}
