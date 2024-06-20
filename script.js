let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function storeInMemory() {
    memory = parseFloat(display.innerText);
}

function recallMemory() {
    display.innerText = memory;
}

function clearMemory() {
    memory = 0;
}
