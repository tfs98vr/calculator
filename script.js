let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operators');
let dot = document.getElementById('dot');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');
let display = document.getElementById('display');

let operation = {
    first: [],
    operatorValue: [],
    second: [],
}

const subtraction = function() {
    let a = parseFloat(operation.first.join(''));
    let b = parseFloat(operation.second.join(''));
    let result = a - b;
    let resultRounded = Math.round((result + Number.EPSILON) * 100) / 100;
    return resultRounded;
}

const addition = function() {
    let a = parseFloat(operation.first.join(''));
    let b = parseFloat(operation.second.join(''));
    let result = a + b;
    let resultRounded = Math.round((result + Number.EPSILON) * 100) / 100;
    return resultRounded;
}

const multiplication = function() {
    let a = parseFloat(operation.first.join(''));
    let b = parseFloat(operation.second.join(''));
    let result = a * b;
    let resultRounded = Math.round((result + Number.EPSILON) * 100) / 100;
    return resultRounded;
}

const division = function() {
    let a = parseFloat(operation.first.join(''));
    let b = parseFloat(operation.second.join(''));
    let result = a / b;
    let resultRounded = Math.round((result + Number.EPSILON) * 100) / 100;
    return resultRounded;
}

const clearAll = function() {
    operation.first.length = 0;
    operation.operatorValue.length = 0;
    operation.second.length = 0;
}

const operate = function() {
    if (operation.operatorValue[operation.operatorValue.length - 1] === '+') {
        let result = addition().toString();
        clearAll();
        for (i = 0; i < result.length; i++) {
            operation.first.push(result[i]);
        }
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else if (operation.operatorValue[operation.operatorValue.length - 1] === '-') {
        let result = subtraction().toString();
        clearAll();
        for (i = 0; i < result.length; i++) {
            operation.first.push(result[i]);
        }
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else if (operation.operatorValue[operation.operatorValue.length - 1] === '*') {
        let result = multiplication().toString();
        clearAll();
        for (i = 0; i < result.length; i++) {
            operation.first.push(result[i]);
        }
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else if (operation.operatorValue[operation.operatorValue.length - 1] === '/') {
        let result = division().toString();
        clearAll();
        for (i = 0; i < result.length; i++) {
            operation.first.push(result[i]);
        }
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    }
}

const backspace = function() {
    if(operation.first.length > 0 && operation.operatorValue.length > 0 && operation.second.length > 0) {
        operation.second.pop();
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else if (operation.first.length > 0 && operation.operatorValue.length > 0 && operation.second.length === 0) {
        operation.operatorValue.length = 0;
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else {
        operation.first.pop()
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    }
}

number.forEach((x) => x.addEventListener('click', function(e) {
    operation.operatorValue.length === 0 ? operation.first.push(e.target.value) : operation.second.push(e.target.value);
    display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
}))

operators.forEach((y) => y.addEventListener('click', function(e) { 
    if (operation.first.length === 0 && e.target.value === '-') {
        operation.first.push(e.target.value);
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');      
    } else if ((operation.first[0] === '-' && operation.first.length > 1 && operation.second.length < 1) || (operation.first[0] != '-' && operation.first.length > 0 && operation.second.length < 1)) {
        operation.operatorValue.push(e.target.value);
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else if (operation.first.length > 0 && operation.operatorValue.length > 0 && operation.second.length > 0) {
        operate();
        operation.operatorValue.push(e.target.value);
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    }
}))

dot.addEventListener('click', function(e) {
    if (operation.first[0] === '-' && operation.first.length === 1 && operation.operatorValue.length === 0) {
        return
    } else if (operation.first[0] === undefined) {
        return
    } else if(operation.first.indexOf('.') === -1 && operation.first[0].indexOf('.') === -1 && operation.operatorValue.length === 0) {
        operation.first.push(e.target.value);
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    } else if (operation.second.indexOf('.') === -1 && operation.operatorValue.length > 0 && operation.second.length > 0) {
        operation.second.push(e.target.value);
        display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
    }
})

equal.addEventListener('click', () => operate())

clear.addEventListener('click', function() {
    clearAll();
    display.textContent = operation.first.join('') + operation.operatorValue.slice(operation.operatorValue.length - 1) + operation.second.join('');
})

erase.addEventListener('click', function() {
    backspace();
})