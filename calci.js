document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case 'C':
                    display.value = '';
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += e.target.innerText;
            }
        });
    });
});
