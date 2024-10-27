document.addEventListener('DOMContentLoaded', () => {
	const calculator = new Calculator('display');
	calculator.init();
});

class Calculator {
	constructor(displayId) {
		this.display = document.getElementById(displayId);
		this.display.value = '0';
	}

	// Initialize event listeners for buttons
	init() {
		const btns = document.querySelectorAll('button[data-value]');
		btns.forEach((btn) => {
			btn.addEventListener('click', () => {
				let value = btn.getAttribute('data-value');
				this.handleButtonClick(value);
			});
		});
	}

	// Main button click handler
	handleButtonClick(value) {
		switch (value) {
			case '=':
				this.display.value = this.calculateResult();
				break;
			case 'C':
				this.clearDisplay();
				break;
			case 'DEL':
				this.deleteLast();
				break;
			default:
				this.appendToDisplay(value);
				break;
		}
	}

	// Handle adding values to the display
	appendToDisplay(value) {
		this.checkDisplayForZero();
		if (value === '/') {
			this.display.value += '÷';
		} else if (value === '*') {
			this.display.value += '×';
		} else {
			this.display.value += value;
		}
	}

	// Check if the display should clear the initial 0
	checkDisplayForZero() {
		if (this.display.value === '0') {
			this.display.value = '';
		}
	}

	// Clear the display
	clearDisplay() {
		this.display.value = '0';
	}

	// Delete the last character
	deleteLast() {
		this.display.value = this.display.value.slice(0, -1);
		if (this.display.value === '') {
			this.display.value = '0';
		}
	}

	// Calculate and return the result
	calculateResult() {
		const expression = this.display.value.replace(/÷/g, '/').replace(/×/g, '*');
		try {
			return eval(expression) || 'Error';
		} catch (error) {
			return 'Error';
		}
	}
}
