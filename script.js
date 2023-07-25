let displayValue = '';

// Lisää syöte näyttöalueelle
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Tyhjentää koko näyttöalueen sisällön
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

// Poistaa viimeksi syötetyn merkin näytöltä
function clearEntry() {
    const display = document.getElementById('display').value;
    displayValue = display.substring(0, display.length - 1);
    document.getElementById('display').value = displayValue;
}

// Suorittaa laskutoimitukset ja näyttää tuloksen näyttöalueella
function calculate() {
    try {
        if (displayValue.includes('sqrt(')) {
            const number = displayValue.replace('sqrt(', '').replace(')', '');
            displayValue = Math.sqrt(parseFloat(number)).toString();
        } else {
            displayValue = eval(displayValue).toString();
        }
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}
// Funktio näppäimistösyötön käsittelyä varten
function handleKeyboardInput(event) {
    const key = event.key;
    if (/[0-9+\-*/.^]/.test(key)) {
        event.preventDefault();
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault();
        clearEntry();
    }
}

document.addEventListener('keydown', handleKeyboardInput);
