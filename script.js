let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operators')
let addition = document.getElementById('addition');
let subtraction = document.getElementById('subtraction');
let division = document.getElementById('division');
let multiplication = document.getElementById('multiplication');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');
let display = document.getElementById('display');
let operatorValue;

let array1 = [];
let array2 = [];
let array3 = [];


for (i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e) {
        array1.push(e.target.value);
        display.textContent = array1.join('');
    })
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {
        operatorValue = e.target.value;
        array2.push(array1.join(''));
        display.textContent = `${array2} ${e.target.value}`;
        for (i = 0; i < number.length; i++) {
            number[i].addEventListener('click', function(e) {
                array3.push(e.target.value);
                display.textContent = `${array2} ${operatorValue} ${array3.join('')}`
            })
        }
    })
}

equal.addEventListener('click', function() {
    if (operatorValue === '+') {
        let first = parseInt(array2);
        let second = parseInt(array3.join(''));
        console.log(first + second);
        display.textContent = `${first} + ${second} = ${first + second}`
    }
})