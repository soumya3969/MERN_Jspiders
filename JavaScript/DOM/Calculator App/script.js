
const display = document.getElementById('display_result');
const form = document.getElementById('calculatorForm');
let expression = '';

form.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.tagName === 'INPUT' && target.type === 'submit') {
        event.preventDefault();
        const value = target.value;

        if (value === '=') {
            const result = eval(expression);
                display.value = expression + ' = ' + result;
                expression = result;
        } else if (value === 'del') {
            display.value = display.value.slice(0, -1);
            expression = display.value;
        } else {
            display.value += value;
            expression += value;
        }
    }
});
