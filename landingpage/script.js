document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';
    let firstValue = '';
    let secondValue = '';
    let currentOperator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const action = button.getAttribute('data-action');
            const buttonValue = button.textContent;

            if (!action) {
                displayValue += buttonValue;
                display.textContent = displayValue;
            } else if (action === 'operator') {
                firstValue = displayValue;
                currentOperator = buttonValue;
                displayValue = '';
            } else if (action === 'equals') {
                secondValue = displayValue;
                displayValue = calculate(firstValue, secondValue, currentOperator);
                display.textContent = displayValue;
                firstValue = '';
                secondValue = '';
                currentOperator = '';
            } else if (action === 'clear') {
                displayValue = '';
                display.textContent = '0';
                firstValue = '';
                secondValue = '';
                currentOperator = '';
            } else if (action === 'delete') {
                displayValue = displayValue.slice(0, -1);
                display.textContent = displayValue || '0';
            }
        });
    });

    function calculate(first, second, operator) {
        let result;
        first = parseFloat(first);
        second = parseFloat(second);

        if (operator === '+') {
            result = first + second;
        } else if (operator === '-') {
            result = first - second;
        } else if (operator === '*') {
            result = first * second;
        } else if (operator === '/') {
            result = first / second;
        }

        return result.toString();
    }
});