const display = document.getElementById('display_result');
const form = document.getElementById('calculatorForm');
let expression = '';

form.addEventListener('click', handleButtonPress);
document.addEventListener('keydown', handleKeyPress);

function handleButtonPress(event) {
    const target = event.target;
    if (target.matches('input[type="submit"]')) {
        event.preventDefault();
        const value = target.value;
        handleInput(value);
    }
}

function handleKeyPress(event) {
    const key = event.key;
    const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '(', ')', '%', 'Enter', 'Backspace'];
    if (allowedKeys.includes(key)) {
        event.preventDefault();
        handleInput(key);
    }
}

function handleInput(input) {
    if (input === '=' || input === 'Enter') {
        try {
            const result = eval(expression);
            display.value = expression + ' = ' + result;
            expression = result;
        } catch (error) {
            display.value = '❌';
        }
    } else if (input === 'del' || input === 'Backspace') {
        display.value = display.value.slice(0, -1);
        expression = display.value;
    } else {
        display.value += input;
        expression += input;
    }
}
