document.addEventListener('DOMContentLoaded', () => {
	const display = document.getElementById('display');
	const btns = document.querySelectorAll('button[data-value]');

	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			let value = btn.getAttribute('data-value');

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
		});
	});

	function clearDisplay() {
		display.value = '';
	}

	function deleteLast() {
		display.value = display.value.slice(0, -1);
	}

	function appendToDisplay(value) {
		display.value += value;
	}

	function calculateResult() {
		try {
			return eval(display.value) || 'Error';
		} catch (error) {
			return 'Error';
		}
	}
});
